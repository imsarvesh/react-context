import makeStore from './makeStore'
import reducer from './reducer'

const initialState = {
    todos: [
        
    ]
};

const [TodosProvider, useTodosDispatch, useTodos] = makeStore(reducer, initialState)

export { TodosProvider, useTodos, useTodosDispatch }