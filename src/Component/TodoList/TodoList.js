import React, { useRef, useState } from "react";
import activeImg from "../img/active.png";
import noneActiveImg from "../img/none-active.png";
import Task from "../Task/Task";

const TodoList = ({ datas, setDatas }) => {
  const [showDetal, setShowDetal] = useState(false);
  const [idShowDetail, setIdShowDetail] = useState();
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const timer = useRef(null);

  const onCickShowDetal = (id) => {
    datas.map(e => {
      if (e.id === id) {
        setIdShowDetail(id)
      }
    })
    setShowDetal(!showDetal);
  }

  const onClickDeleteItem = (id) => {
    const temp = datas.filter((e) => e.id !== id)
    setDatas(temp);
    localStorage.setItem("data", JSON.stringify(temp))

  }

  const onClickActive = (index) => {
    const temp = [...datas];
    temp[index].active = !temp[index].active;
    setDatas(temp);
  }

  const onClickDeleteAll = () => {
    const temp = datas.filter((e) => e.active === false)
    setDatas(temp);
    localStorage.setItem("data", JSON.stringify(temp))
  }

  const handleSearch = (keyword) => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      const _data = JSON.parse(localStorage.getItem("data"));
      const temps = _data.filter((e) => {
        return e?.title && e?.title?.toLowerCase().includes(keyword?.toLowerCase().trim())
      });
      setDatas(temps)
    }, 250);
  }

  const updateData = (data) => {
    const index = datas.findIndex((e) => e.id === data.id)
    const temp = datas;
    temp[index] = { ...temp[index], ...data }
    setDatas(temp)
    localStorage.setItem("data", JSON.stringify(temp));
    setUpdateSuccess(true);
    setTimeout(() => {
      setUpdateSuccess(false);
    }, 2000);
  }

  return (
    <div style={{ width: "55%", display: 'flex', flexDirection: "column", borderRight: "1px solid black", position: "relative" }}>
      <h3 style={{ margin: "25px auto" }}>TodoList</h3>
      <div style={{ display: "flex", flexDirection: "column", margin: "30px 45px 120px 45px" }}>
        <input
          type="search" style={{ height: "34px", padding: "0px 15px" }} placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        {
          datas.length > 0 && datas.map((e, index) => (
            <div style={{ paddingTop: "15px" }} key={e.id}>
              <div style={{ display: "flex", position: "relative", alignItems: "center", border: "1px solid black" }}>
                <img
                  src={e.active ? activeImg : noneActiveImg}
                  style={{ width: "20px", height: "20px", margin: "0 15px" }}
                  onClick={() => onClickActive(index)}
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
              {idShowDetail === e.id && showDetal && (
                <div style={{ padding: "25px", border: "1px solid black" }}>
                  <Task showDetal={showDetal} data={e} id={e.id} updateData={updateData} updateSuccess={updateSuccess}
                    initialValues={{
                      title: e.title,
                      decription: e.decription,
                      dueDate: e.dueDate,
                      piority: e.piority
                    }} />
                </div>
              )}
            </div>
          ))
        }
      </div>
      <div style={{ borderTop: "1px solid black", width: "100%", position: "absolute", bottom: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px" }}>
          <p style={{ paddingTop: "20px" }}>Bulk Action:</p>
          <div style={{ display: "flex" }}>
            <div 
              style={{ width: "110px", height: "35px", textAlign: "center", paddingTop: "10px", background: "#6262df", borderRadius: "7px", margin: "25px 0px", color: "white", cursor: "pointer", marginRight: "20px" }}
            >
              Done
            </div>
            <div
              style={{ width: "110px", height: "35px", textAlign: "center", paddingTop: "10px", background: "red", borderRadius: "7px", margin: "25px 0px", color: "white", cursor: "pointer" }}
              onClick={() => onClickDeleteAll()}
            >
              Remove
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default TodoList;