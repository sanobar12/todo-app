import React, { useState, useEffect } from "react";
import { Heading } from "./Components/Heading";

export const App = () => {
  const [list, setList] = useState("");
  const [items, setItem] = useState([]);
  const [indexName, setIndexName] = useState("");
  
  const itemEvent = (event) => {
    setList(event.target.value);
  };

  const itemList = () => {
    // access list in array(old data include)
    setItem([...items, { title: list, isCompleted: false }]);
    setList("");
  };
  const onChecked = (index) =>{
    // console.log('working', onChecked)
    const item = items.filter((item, idx) => idx === index)[0];
    item.isCompleted = !item.isCompleted
    const newItems = [...items]
    newItems[index] = item;
    setItem(newItems)
  }
  const onEdit = (value) => {
    setIndexName(value);
    let [arr] = items.filter((item) => item === value);
    setList(arr.title);
    // console.log(arr)
  };

  const deleteItem = (del) => {
    let arrDel = items.filter((item) => item !== del);
    setItem(arrDel);
  };
  const onUpdate = () => {
    const index = items.findIndex((item) => item === indexName);
    let newArr = [...items];
    newArr[index].title = list;
    // console.log(newArr)
    setItem(newArr);
    //  through function input will be empty or clear
    setList("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="heading col-md-12">
        <Heading type="h2">To do:</Heading>
        </div>
        </div>
        <div className="list ">
          <div className="row">
          <ul>
            {items.map((item,index) => {
              return (
                <div className="sub-list col-md-12" >
                  <div className="row">
                  <div className="text col-md-10">
                  <h4  style={{textDecoration : item?.isCompleted ? 'line-through' : ' '}}>{item.title}</h4>
                  </div>
                  <div className="btns col-md-2">
                 <input className="chbox" type="checkbox" onChange={() => onChecked(index)}/>
                   <button
                    className="btn btn-success"
                    onClick={() => onEdit(item)}
                  >
                   <i className="fa fa-pencil"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(item)}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                  </div>
                </div>
                </div>
              );
            })}
          </ul>
          </div>
          </div>
        <div className="head">
          <div className="row">
            <p className="col-md-1">Task</p>
            <input className="col-md-9" placeholder="What do you nedd to do?" type="text" value={list} onChange={itemEvent}/>  
          </div>
          <div className="btns2">
            <button className="btn btn-primary" disabled={list? false : true} onClick={itemList}>
              Save Item
            </button>
            <button className="btn btn-info" disabled={list? false : true && list===items? false : items !== list ? true : false} onClick={items.length ? onUpdate: ""}> 
              Update
            </button>
            </div>
        </div>
    </div>
  );
};
