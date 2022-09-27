import React, { useEffect, useState } from "react";
import TodoList from "../TodoList/TodoList";
import NewTask from "../NewTask/NewTask";

const TodoApp = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem('data')===null){
            localStorage.setItem('data',JSON.stringify(data))
        }else{
            let tem = JSON.parse(localStorage.getItem('data'))
            setData(tem)
        }
    },[])
    const addData = (dataItem) => {
        let temp = data.concat([dataItem])
        temp.sort((item1,item)=> Date.parse(item1.dueDate) - Date.parse(item.dueDate) )
        setData(temp);
        console.log("data",data)
        localStorage.setItem('data',JSON.stringify(temp))
    }

    return (
        <div style={{width: "1250px", margin: "100px auto 200px auto", border:"1px solid black", display:"flex"}}>
            <NewTask  addData={addData} />
            <TodoList data={data} setData={setData} />        
        </div>
    );
}

export default TodoApp;