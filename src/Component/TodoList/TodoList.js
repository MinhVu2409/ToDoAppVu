import React, { useState } from "react";
import Task from "../Task/Task";
import activeImg from "../img/active.png";
import noneActiveImg from "../img/none-active.png";

const TodoList = ({ data, setData }) => {
    const [showDetal, setShowDetal] = useState(false);
    const [idShowDetail,setIdShowDetail] = useState();
    
    const onCickShowDetal = (id) => {
        data.map(e=> {
            if(e.id===id){
                setShowDetal(!showDetal)
                setIdShowDetail(id)
            }
        })
    }
    const onClickDeleteItem = (id) => {
        const temp = data.filter((e) => e.id !== id)
        setData(temp);
        localStorage.setItem("data", JSON.stringify(temp))
    }
    const onClickActive = (id) => {
       
    }

    return (
        <div style={{ width: "55%", display: 'flex', flexDirection: "column", borderRight: "1px solid black", position: "relative" }}>
            <h3 style={{ margin: "25px auto" }}>TodoList</h3>
            <div style={{ display: "flex", flexDirection: "column", margin: "30px 45px 120px 45px" }}>
                <input type="search" style={{ height: "34px", padding: "0px 15px" }} placeholder="Search..." />
                {
                    data.length > 0 && data.map((e) => (
                        <div style={{ paddingTop: "15px" }} key={e.id}>
                            <div style={{ display: "flex", position: "relative", alignItems: "center", border: "1px solid black" }}>
                                <img
                                    src={e.active ? activeImg : noneActiveImg} 
                                    style={{ width: "20px", height: "20px", margin: "0 15px" }}
                                    onClick={()=>onClickActive(e.id)}
                                />
                                <p> {e.title} </p>
                                <div style={{ display: "flex", position: "absolute", right: "20px" }}>
                                    <div
                                        style={{ padding: "5px 15px", background: "#6262df", borderRadius: "7px", marginRight: "5px", color: "white", cursor: "pointer" }}
                                        onClick={() => onCickShowDetal(e.id)}
                                    >
                                        Detail
                                    </div>
                                    <div
                                        style={{ padding: "5px 15px", background: "red", borderRadius: "7px", color: "white", cursor: "pointer" }}
                                        onClick={() => onClickDeleteItem(e.id)}
                                    >
                                        Remove
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: "25px", border: "1px solid black", display: idShowDetail===e.id ? 'block' : 'none' }}>
                                <Task showDetal={showDetal} data={e} 
                                        initialValue={{
                                            title: data.title,
                                            decription: data.decription,
                                            dueDate: data.dueDate,
                                            piority: data.piority
                                        }} />
                            </div>
                        </div>
                    ))
                }

            </div>


            <div style={{ borderTop: "1px solid black", width: "100%", position: "absolute", bottom: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
                    <p style={{ paddingTop: "20px" }}>Bulk Action:</p>
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "110px", height: "35px", textAlign: "center", paddingTop: "10px", background: "#6262df", borderRadius: "7px", margin: "25px 0px", color: "white", cursor: "pointer", marginRight: "20px" }}>Done</div>
                        <div style={{ width: "110px", height: "35px", textAlign: "center", paddingTop: "10px", background: "red", borderRadius: "7px", margin: "25px 0px", color: "white", cursor: "pointer" }}>Remove</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TodoList;