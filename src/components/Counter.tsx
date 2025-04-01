import { useCounter } from '../context/CounterContext'

const Counter = () => {
  const { state, dispatch } = useCounter()

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  )
}

export default Counter
