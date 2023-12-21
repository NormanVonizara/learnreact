const todos = [
    "Présenter React",
    "Syntaxe JSX"
]

function App() {
  return <>
      <Title color="red" id="monid" className="maclass" data-demo="demo" />
      <ul>
          {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>
  </>
}

function Title ({color, ...props}) {
    return <h1 style={{color}} {...props}>Bonjour les gens</h1>
}

export default App
