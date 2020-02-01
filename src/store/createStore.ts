import { createStore as reduxCreateStore } from "redux"
import rootReducer from "./reducer"
import { composeWithDevTools } from "redux-devtools-extension"

const initialState = {}

// Enable redux dev tools by passing composeWithDevTools
const createStore = () =>
  reduxCreateStore(rootReducer, initialState, composeWithDevTools())

export default createStore
