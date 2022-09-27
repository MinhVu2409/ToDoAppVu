import React from 'react';
import Task from '../Task/Task';

const NewTask = ({data, setDataItem, addData}) => {
    return (
        <div style={{ width: "45%", display: 'flex', flexDirection: "column", borderRight: "1px solid black" }}>
            <h3 style={{ margin: "25px auto" }}>NewTask</h3>
            <div style={{ margin: "30px 45px" }}>
                <Task data={data} setDataItem={setDataItem} addData={addData}/>
            </div>
        </div>
    );
}

export default NewTask;