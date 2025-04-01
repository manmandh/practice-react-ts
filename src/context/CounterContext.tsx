import React, { createContext, useReducer, useContext } from 'react'

type State = {
  count: number
}

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' }

const initialState: State = { count: 0 }

const CounterContext = createContext<
  | {
      state: State
      dispatch: React.Dispatch<Action>
    }
  | undefined
>(undefined)

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}

export const useCounter = () => {
  const context = useContext(CounterContext)
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider')
  }
  return context
}
