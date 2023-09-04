import { useState } from 'react';
import { Header, Footer, Main, TodoProps } from './components/index'; 

export default function App() {
  const [ todos, setTodos ] = useState<TodoProps[]>();
  const [ isRerenderRequire, setIsRerenderRequire ] = useState<boolean>(false); 
  if(!todos || isRerenderRequire){
      try{
          fetch('http://localhost:3000/todos')
          .then(res => res.json())
          .then(data => setTodos(data));
      } catch(err){
          console.log("Error from Api:" , err);
          setIsRerenderRequire(true);
      }
  }

  return (
      <section className="todoapp">
        <Header title='todos'/>
        <Main todos={todos}/>
        <Footer leftItems={ todos?.length }/>
      </section>
  )
}
