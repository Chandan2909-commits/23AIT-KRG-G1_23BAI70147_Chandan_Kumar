import { useState } from 'react'
import ItemList from './ItemList'

function App() {
  const [counter, setCounter] = useState(0)
  const [items] = useState(() => Array.from({ length: 1000 }, (_, i) => i + 1))

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter((c) => c + 1)}>Increment Counter</button>
      <ItemList items={items} />
    </div>
  )
}

export default App
