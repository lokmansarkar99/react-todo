import { IoMdCheckmark } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

const TodoList = ({ task, setTask, handleCheckdToDo }) => {

  // Handle delete task
  const handleDeleteTodo = (taskItem) => {
    const updatedTask = task.filter((item) => item.text !== taskItem.text);
    setTask(updatedTask);
  };

  return (
    <section className="myUnOrdList">
      <ul>
        {task.map((taskItem, index) => (
          <li key={index} className="todo-item">
            <span
              className={taskItem.completed ? "checkList" : "noCheckList"}
            >
              {taskItem.text}
            </span>
            <button className="check-btn" onClick={() => handleCheckdToDo(taskItem)}>
              <IoMdCheckmark />
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTodo(taskItem)}
            >
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
