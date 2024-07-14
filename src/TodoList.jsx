import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [des, setDes] = useState("");
  const [list, setList] = useState([]);
  const [date, setDate] = useState("");
  const [checkedId, setCheckedId] = useState(null);

  function add() {
    setList([...list, { task, des, date }]);
    setTask("");
    setDes("");
    setDate("");
  }

  function toggleCheck(id) {
    if (checkedId === id) {
      setCheckedId(null);
    } else {
      setCheckedId(id);
    }
  }

  function deleteData(id) {
    const updatedList = list.filter((item, index) => index !== id);
    setList(updatedList);
  }

  return (
    <div>
      <h1>TODO LIST......!</h1>
      <input type="text" placeholder="Enter your Task" value={task} onChange={(e) => setTask(e.target.value)} /> <br /> <br />
      <input type="text" placeholder="Enter your Task Description" value={des} onChange={(e) => setDes(e.target.value)} /> <br /> <br />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /> <br /> <br />
      <button onClick={add}>Add</button>
      <ul>
        {list.map((item, id) => {
          const currentDate = new Date();
          const dueDate = new Date(item.date);
          const datePassed = dueDate > currentDate;

          return (
            <li key={id} style={{ border: datePassed ? "3px solid yellow" : "transparent", textDecoration: checkedId === id ? "line-through" : "none" }}>
              Task:  {item.task} ( Description : {item.des} )  Due Date : {item.date}
              <input type="checkbox" onChange={() => toggleCheck(id)} />
              {datePassed ? <b>  "Due date is passed"  </b> : ""}
              <button onClick={() => deleteData(id)}>DELETE</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;





