import React, { useState } from "react";
import Task from "../Task/Task";
import active from "../img/active.png";
// import noneActive from "../img/noneactive.png";

const TodoList = ({ data , setData}) => {
    const [showDetal, setShowDetal] = useState(false);
    const arr = [];
    console.log("arr=============>",arr);
    console.log("data==============>",data);

    const onClickDeleteItem = (idx) => {
        setData(data.filter((e,index)=> index!== idx));  
        
    }
    return (
        <div style={{ width: "55%", display: 'flex', flexDirection: "column", borderRight: "1px solid black" }}>
            <h3 style={{ margin: "25px auto" }}>TodoList</h3>
            <div style={{ display: "flex", flexDirection: "column", margin: "30px 45px 120px 45px" }}>
                <input type="search" style={{ height: "34px", padding: "0px 15px" }} placeholder="Search..." />
                {
                    data.map((e, idx) => (
                        
                        <div style={{ paddingTop: "15px" }} key={idx}>
                            <div style={{ display: "flex", position: "relative", alignItems: "center", border: "1px solid black" }}>
                                <img
                                    src={active}
                                    style={{ width: "20px", height: "20px", margin: "0 15px" }}
                                />
                                <p> {e.title} </p>
                                <div style={{ display: "flex", position: "absolute", right: "20px" }}>
                                    <div
                                        style={{ padding: "5px 15px", background: "blue", borderRadius: "7px", marginRight: "5px", color: "white", cursor: "pointer" }}
                                        onClick={() => setShowDetal(!showDetal)}
                                    >
                                        Detail
                                    </div>
                                    <div 
                                        style={{ padding: "5px 15px", background: "red", borderRadius: "7px", color: "white", cursor: "pointer" }}
                                        onClick={()=> onClickDeleteItem(idx)}
                                    >
                                        Remove
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: "25px", border: "1px solid black", display: showDetal ? 'block' : 'none' }}>
                                <Task showDetal={showDetal} data={e} />
                            </div>
                        </div>
                    ))
                }

            </div>


            <div style={{ borderTop: "1px solid black", padding: "0 25px", }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ paddingTop: "20px" }}>Bulk Action:</p>
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "110px", height: "35px", textAlign: "center", paddingTop: "10px", background: "blue", borderRadius: "7px", margin: "25px 0px", color: "white", cursor: "pointer", marginRight: "20px" }}>Done</div>
                        <div style={{ width: "110px", height: "35px", textAlign: "center", paddingTop: "10px", background: "red", borderRadius: "7px", margin: "25px 0px", color: "white", cursor: "pointer" }}>Remove</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TodoList;