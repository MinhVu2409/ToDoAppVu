import React, { useState } from "react";
import { Formik } from "formik";
import moment from "moment";

const Task = ({ showDetal,data, setDataItem }) => {
    console.log('dataTodolist',data);
    return (
        <>
            <Formik
                initialValues={{ title: '', decription:'', dueDate:new Date().toString(),piority:"normal" }}
                onSubmit={(values, {resetForm}) => {
                    let arr = []
                    arr.push(values)
                    setDataItem(arr);
                    resetForm();
                }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Required';
                    }
                    return errors;
                }}
                data
            >
                {({ values, handleChange, handleSubmit, touched, errors }) => {
                    return (
                        <form
                            style={{ display: "flex", flexDirection: "column" }}
                            onSubmit={(e)=>{
                                e.preventDefault();
                                handleSubmit(e)
                            }}
                        >
                            <input
                                type="text"
                                placeholder='Add newtask...'
                                style={{ height: "30px", padding: "0px 15px", marginBottom: "20px" }}
                                name="title"
                                value={showDetal? data.title : values.title}
                                onChange={handleChange}
                            />
                            <span style={{color:'red'}}>{errors.title && touched.title && errors.title}</span>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                                <label for="textarea">Decription</label>
                                <textarea
                                    id="textarea"
                                    style={{ padding: "15px" }}
                                    name="decription"
                                    value={values.decription}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: "20px" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
                                    <label for="inputDate">Due Date</label>
                                    <input
                                        type="date"
                                        id="inputDate"
                                        style={{ height: "30px", padding: "0 15px" }}
                                        name="inputDate"
                                        value={moment(values.dueDate).format("YYYY-MM-DD")}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "190px" }}>
                                    <label for="optionPiority">Piority</label>
                                    <select
                                        id="optionPiority"
                                        style={{ height: "30px", padding: "0 15px" }}
                                        name="piority"
                                        value={values.piority}
                                        onChange={handleChange}
                                    >
                                        <option value={"low"} >Low</option>
                                        <option value={"normal"} >Normal </option>
                                        <option value={"high"} >High</option>
                                    </select>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                style={{ height: "35px", textAlign: "center", background: "green", borderRadius: "3px", color: "white", margin: "20px 0px", cursor: "pointer" ,border:"none~"}}
                            >
                                {showDetal ? "Update" : "Add"}
                            </button>
                        </form>
                    )
                }}
            </Formik>
        </>
    );
}

export default Task;