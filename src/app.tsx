import 'normalize.css';
import './app.less';

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as JSX from '@saber2pr/jsx-ast-parser'
import pkgInfo from '@saber2pr/jsx-ast-parser/package.json'

import { createEditor } from '@saber2pr/monaco';
import { code } from './code';

export const App = () => {
  const input_ref = useRef<HTMLDivElement>()
  const jsx_ref = useRef<HTMLDivElement>()
  const ast_ref = useRef<HTMLDivElement>()
  const output_ref = useRef<HTMLDivElement>()

  useEffect(() => {
    // inputEditor
    const inputEditor = createEditor(input_ref.current, { 'input.jsx': '' }, { theme: 'vs-dark' })

    // astEditor
    const astEditor = createEditor(ast_ref.current, { 'ast.json': '' }, { theme: 'vs-dark', readOnly: true })

    // jsxEditor
    const jsxEditor = createEditor(jsx_ref.current, { 'jsx.json': '' }, { theme: 'vs-dark', readOnly: true })

    // outputEditor
    const outputEditor = createEditor(output_ref.current, { 'output.jsx': '' }, { theme: 'vs-dark', readOnly: true, })

    // parse
    inputEditor.getModel().onDidChangeContent(() => {
      const content = inputEditor.getValue()
      try {
        const ast = JSX.parser.parse(content)
        const jsx = JSX.transformer.transform(ast)
        const output = JSX.compiler.compile(jsx)
        astEditor.setValue(JSON.stringify(ast, null, 2))
        jsxEditor.setValue(JSON.stringify(jsx, null, 2))
        outputEditor.setValue(output)
      } catch (error) { }
    })

    inputEditor.setValue(code)
    inputEditor.getInstance().focus()
  }, [])

  return (
    <div className="app">
      <div className="view flex">
        <div className="view-item flex-glow">
          <div className="title">INPUT JSX CODE - v{pkgInfo.version}</div>
          <div ref={input_ref} className="view-item-editor"></div>
        </div>
        <div ref={jsx_ref} className="view-item flex-glow">
          <div className="title">COMPILE OUTPUT</div>
          <div ref={output_ref} className="view-item-editor"></div>
        </div>
      </div>
      <div className="view flex">
        <div className="view-item flex-glow">
          <div className="title">AST</div>
          <div ref={ast_ref} className="view-item-editor"></div>
        </div>
        <div ref={jsx_ref} className="view-item flex-glow">
          <div className="title">JSX</div>
          <div ref={jsx_ref} className="view-item-editor"></div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
