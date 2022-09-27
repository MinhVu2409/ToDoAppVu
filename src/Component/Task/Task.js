import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import moment from "moment";

const Task = ({ showDetal , data, setDataItem ,addData, initialValue}) => {
    console.log("initialValue",initialValue);
    

    const formik = useFormik({
        // enableReinitialize: true,
        initialValues:
        {
            title: "",
            decription: '',
            dueDate: new Date().toString(),
            piority: "normal",
        },
        
        validationSchema:Yup.object({
            title: Yup.string().required("Please do required!!!"),
            decription: Yup.string().required("Please do required!!!"),
        }),
        onSubmit: (values, onSubmitProps) => {
            const id = Math.floor(Math.random() * 100000);;
            const active = false
            addData({...values,id,active });
            onSubmitProps.resetForm();
        }
    })
    return (
        <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={formik.handleSubmit}
        >
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder='Add newtask...'
                    style={{ height: "30px", padding: "0px 15px" }}
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
                {
                    formik.errors.title && (
                        <span style={{color: "red",fontSize:"12px", marginLeft:"10px"}}>{formik.errors.title}</span>
                )
            }
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                <label for="decription">Decription</label>
                <textarea
                    id="decription"
                    style={{ padding: "15px" }}
                    name="decription"
                    value={showDetal?data.decription:formik.values.decription}
                    onChange={formik.handleChange}
                />
                {
                    formik.errors.decription && (
                        <span style={{color: "red", fontSize:"12px",marginLeft:"10px"}}>{formik.errors.decription}</span>
                )
            }
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
                    <label for="dueDate">Due Date</label>
                    <input
                        type="date"
                        id="dueDate"
                        style={{ height: "30px", padding: "0 15px" }}
                        name="dueDate"
                        value={moment( showDetal?data.dueDate :formik.values.dueDate).format("YYYY-MM-DD")}
                        onChange={formik.handleChange}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "190px" }}>
                    <label for="piority">Piority</label>
                    <select
                        id="piority"
                        style={{ height: "30px", padding: "0 15px" }}
                        name="piority"
                        value={showDetal?data.piority:formik.values.piority}
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
                style={{ height: "35px", textAlign: "center", background: "#16a016", borderRadius: "3px", color: "white", margin: "20px 0px", cursor: "pointer", border: "none" }}
            >
                {showDetal ? "Update" : "Add"}
            </button>
        </form>
    );
}

export default Task;