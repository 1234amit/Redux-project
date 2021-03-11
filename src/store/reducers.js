const initState = {
    name: 'Amit Goswsmi',
    todos: [
        {id:'345642', todo:'Marketing', isCompleted:false},
        {id:'245648', todo:'Buying', isCompleted:false},
        {id:'945647', todo:'Shopping', isCompleted:false},
    ]
}


const rootReducer = (state=initState, actions) =>{

    switch(actions.type){
        case 'ADD_TODO':
            state = {
                ...state,
                todos:[...state.todos, actions.todo]
            }
            break;

        case 'DELETE_TODO':
            const todos = state.todos;
            const updateTodos = todos.filter(todo=>todo.id !== actions.id);
            state = {
                ...state,
                todos:updateTodos,
            }
            break;
    }

    return state 
  }

export default rootReducer