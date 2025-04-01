import { useReducer, useState } from 'react'

type State = {
  count: number
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' }

const reducerFn = (state: State, action: Action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case 'DECREMENT': {
      return { ...state, count: state.count - 1 }
    }
    default: {
      return state
    }
  }
}

const initialState: State = {
  count: 0
}

export default function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState)
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const handleDecrease = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleIncrease2 = () => {
    setCount(count + 1)
  }

  const handleDecrease2 = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className='p-4 space-y-2'>
        <p>Counter: {state.count}</p>
        <p>Counter 2: {count}</p>
        <div>
          <button onClick={handleIncrease}>Increase</button>
        </div>
        <div>
          <button onClick={handleDecrease}>Decrease</button>
        </div>
        <div>
          <button onClick={handleIncrease2}>Increase 2</button>
        </div>
        <div>
          <button onClick={handleDecrease2}>Decrease 2</button>
        </div>
      </div>
    </>
  )
}
