import React, {useState} from 'react'
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import*as actions from './store/actions';


function App(props) {

  const [todo, setTodo] = useState("");

  const addTodo = ()=>{
    const todoObj = {
      id: Math.random(),
      todo:todo,
      isCompleted:false,
    }

    props.addTodo(todoObj);
    setTodo("");
  }

  return (
    <div className="App">
      <TodoList/>
      <AddTodo 
        name="todo"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        addTodo={addTodo}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return{
    addTodo:(todoObj)=>dispatch(actions.addTodo(todoObj))
  }
}

const connectedComponent = connect(null, mapDispatchToProps);

export default connectedComponent(App);
