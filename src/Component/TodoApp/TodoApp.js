import React, { useEffect, useState } from "react";
import TodoList from "../TodoList/TodoList";
import NewTask from "../NewTask/NewTask";

const TodoApp = () => {
    const [data, setData] = useState([]);
    const [dataItem,setDataItem] = useState([]);

    console.log("dataItem",dataItem);
    useEffect(()=>{
        if(localStorage.getItem('data')===null){
            localStorage.setItem('data',JSON.stringify(data))
        }else{
            let temp = JSON.parse(localStorage.getItem('data'))
            setData(temp)
        }
    },[])
    // localStorage.setItem('data', JSON.stringify(data));
    useEffect(()=>{
        const temp = data.concat(dataItem);
        setData(temp);
        localStorage.setItem('data', JSON.stringify(temp));
        
    },[dataItem])

    // useEffect(()=>{
    //     localStorage.setItem('data', JSON.stringify(data));
    // },[data])

    return (
        <div style={{width: "1250px", margin: "100px auto 200px auto", border:"1px solid black", display:"flex"}}>
            <NewTask  setDataItem={setDataItem}/>
            <TodoList data={data} setData={setData} />        
        </div>
    );
}

export default TodoApp;