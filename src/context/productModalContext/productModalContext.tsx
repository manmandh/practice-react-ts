import { createContext, useReducer, ReactNode, Dispatch } from 'react'

interface ProductModalState {
  formType: 'create' | 'edit' | null
}

type Action = { type: 'OPEN_CREATE' } | { type: 'OPEN_EDIT' } | { type: 'CLOSE_MODAL' }

const initialState: ProductModalState = {
  formType: null
}

function productModalReducer(state: ProductModalState, action: Action): ProductModalState {
  switch (action.type) {
    case 'OPEN_CREATE':
      return { formType: 'create' }
    case 'OPEN_EDIT':
      return { formType: 'edit' }
    case 'CLOSE_MODAL':
      return { formType: null }
    default:
      return state
  }
}

interface ProductModalContextType {
  state: ProductModalState
  dispatch: Dispatch<Action>
}

const ProductModalContext = createContext<ProductModalContextType>({
  state: initialState,
  dispatch: () => null
})

export const ProductModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productModalReducer, initialState)

  return <ProductModalContext.Provider value={{ state, dispatch }}>{children}</ProductModalContext.Provider>
}

export default ProductModalContext
