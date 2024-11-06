import './App.css'
import { useState, useRef, useReducer } from 'react';
import Header from './components/Header';
import List from './components/List';
import Editor from './components/Editor';

const mockData = [
  {
    id: 0,
    isDone: false,
    content : "React 공부하기",
    date: new Date().getTime,
  },
  {
    id: 1,
    isDone: false,
    content : "빨래하기",
    date: new Date().getTime,
  },
  {
    id: 2,
    isDone: false,
    content : "노래 연습하기",
    date: new Date().getTime,
  },
];
// function reducer() {

// }
function App() {
  // const [todos, dispatch] = useReducer(reducer, mockData);
  const [todos, SetTodos] = useState(mockData);
  const idRef = useRef(3)

  const onCreate = ( content ) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }
    SetTodos([newTodo, ...todos])
    // dispatch({
    //   type : "CREATE",
    //   data : {
    //     id: idRef.current++,
    //     isDone: false,
    //     content: content,
    //     date: new Date().getTime(),
    //   }
    // })
  };

  const onUpdate = (targetId) => {
    SetTodos(
      todos.map((todo)=>
        todo.id ===targetId 
          ? {...todo, isDone:!todo.isDone}
          : todo
    ));
  };
  const onDelete = (targetId) => {
    SetTodos(todos.filter((todo)=>todo.id !== targetId));
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} 
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  )
}

export default App