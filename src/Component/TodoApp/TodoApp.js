import React, { useEffect, useState } from "react";
import TodoList from "../TodoList/TodoList";
import NewTask from "../NewTask/NewTask";

const TodoApp = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('data') === null) {
      localStorage.setItem('data', JSON.stringify(datas))
    } else {
      let tem = JSON.parse(localStorage.getItem('data'))
      setDatas(tem)
    }
  }, [])
  const addData = (dataItem) => {
    let temp = datas.concat([{ ...dataItem }]);
    temp.sort((item1, item) => Date.parse(item1.dueDate) - Date.parse(item.dueDate))
    setDatas(temp);
    localStorage.setItem('data', JSON.stringify(temp));
  }

  return (
    <div style={{ width: "1250px", margin: "100px auto 200px auto", border: "1px solid black", display: "flex" }}>
      <NewTask addData={addData} />
      <TodoList datas={datas} setData={setDatas} />
    </div>
  );
}

export default TodoApp;