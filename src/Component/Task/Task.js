import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

const Task = ({ showDetal, data, setDataItem }) => {
    console.log('dataTodolist', data);
    const formik = useFormik({
        initialValues: {
            title: "",
            decription: '',
            dueDate: new Date().toString(),
            piority: "normal"
        },
        onSubmit: (values, onSubmitProps) => {
            setDataItem(values);
            onSubmitProps.resetForm();
        }


    })
    return (
        <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={formik.handleSubmit}
        >
            <input
                type="text"
                placeholder='Add newtask...'
                style={{ height: "30px", padding: "0px 15px", marginBottom: "20px" }}
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
            />
            {/* <span style={{color:'red'}}>{errors.title && touched.title && errors.title}</span> */}
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <label for="decription">Decription</label>
                <textarea
                    id="decription"
                    style={{ padding: "15px" }}
                    name="decription"
                    value={formik.values.decription}
                    onChange={formik.handleChange}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
                    <label for="dueDate">Due Date</label>
                    <input
                        type="date"
                        id="dueDate"
                        style={{ height: "30px", padding: "0 15px" }}
                        name="dueDate"
                        value={moment(formik.values.dueDate).format("YYYY-MM-DD")}
                        onChange={formik.handleChange}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "190px" }}>
                    <label for="piority">Piority</label>
                    <select
                        id="piority"
                        style={{ height: "30px", padding: "0 15px" }}
                        name="piority"
                        value={formik.values.piority}
                        onChange={formik.handleChange}
                    >
                        <option value={"low"} >Low</option>
                        <option value={"normal"} >Normal </option>
                        <option value={"high"} >High</option>
                    </select>
                </div>
            </div>
            <button
                type="submit"
                style={{ height: "35px", textAlign: "center", background: "green", borderRadius: "3px", color: "white", margin: "20px 0px", cursor: "pointer", border: "none~" }}
            >
                {showDetal ? "Update" : "Add"}
            </button>
        </form>
    );
}

export default Task;