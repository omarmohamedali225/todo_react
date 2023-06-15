import React from "react";
import "./ToDo.css";
import { useRef,useState } from "react";
const ToDo = () => {
  const Name = useRef();
  const Note = useRef();
  const [msg,setMsg] = useState('')
  const [statemsg,setStateMsg] = useState(false)
  const [alert,setAlert] = useState('success')

  const Save = () => {
    const local = JSON.parse(localStorage.getItem("Note")) || [];
    const Item = {
      id:new Date().getTime(),
      Name: Name.current.value,
      Note: Note.current.value,
    };
    if (!Name.current.value) {
      setAlert('danger')
      setStateMsg(true)
      setMsg('Name Note Empty');
    }else if(!Note.current.value){
      setAlert('danger')
      setStateMsg(true)
      setMsg('Note Empty');
    }else{
      const newNote = [...local, Item];
      localStorage.setItem("Note", JSON.stringify(newNote));
      Name.current.value = "";
      Note.current.value = "";
      setAlert('success')
      setMsg('Note Add Success')
      setStateMsg(true)
    }
  };
  return (
    <div className="container">
      <header>
        <h1>ToDo List App</h1>
      </header>
      {statemsg&&<div className={`alert alert-${alert} mt-3`} role="alert">
        {msg}
      </div>}
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Note Name
        </label>
        <input
          ref={Name}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Note
        </label>
        <textarea
          ref={Note}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Note..."
          style={{ resize: "none" }}
        ></textarea>
      </div>
      <button className="btn btn-success w-100" onClick={Save}>
        Save
      </button>
    </div>
  );
};

export default ToDo;
