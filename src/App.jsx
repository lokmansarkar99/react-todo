import Todo from "./Todo";

import { useState } from "react";
export const todosKey = "reactToDo"
function App() {
  
  const [task, setTask] = useState(() => {
    const rawTodos = localStorage.getItem(todosKey)
    if (!rawTodos) return []
    return JSON.parse(rawTodos)
  });


  return (
    <section>
      
      <Todo task= {task} setTask={setTask} />

     
    
   </section>
  );
}

export default App
