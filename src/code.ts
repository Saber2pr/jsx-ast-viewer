export const code = `// by saber2pr. https://github.com/Saber2pr/jsx-ast-viewer
<div
  width={100}
  contentEditable={true}
  color={'red'}
  arr={[1, 2]}
  style={{
    width: 100,
    color: 'red',
    background: 'blue',
    /**
      * comment2
      */
    test: {
      color: 'red',
    },
    // comment1
    child: <span>233</span>,
  }}
  id="233ccc"
  class2Name="qwq123"
  onClick={onClick}
  onError={(error, test,) => {
    console.log(error)
    console.log()
    console.log(console.log(test))
    const a = 'a'
    let b = 'b'
    const c = 'c'
    let d
    d = 'd'
    let a
    a = "a"
    if(a){
      console.log(a)
    }

    if(b){
      console.log(b)
    } else {
      console.log(c)
    }

    if(b){
      console.log(b)
    } else if(c) {
      console.log(c)
    }

    if(b){
      console.log(b)
    } else if(c) {
      console.log(c)
    } else {
      console.log(d)
    }
  }}
  onSubmit={function test() {
    console.log()
    return 233
  }}
  >
  {/* comment2 */}
  <List
    list={[
      {
        // comment1
        content: <View color="red">233</View>,
        logo: <Image mode="test" />,
      },
      {
        content: <View />,
      },
    ]}
  />
  <div />
  <div id="qwq" />
  <span>aaa</span>
  <span>1234</span>
  <span>1234asd</span>
  <span>
    12 aa
    <span>aaa</span>
    aa234 234aaa
  </span>
</div>`
