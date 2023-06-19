import React, { useEffect, useState } from "react";
import { useLocal } from "./context/GlobalContext";
import Swal from "sweetalert2";
import "./Card.css";
const Card = () => {
  const local = JSON.parse(localStorage.getItem('Note'))
  const {Del,Note} = useLocal()
  const [data,setData] = useState([])
  useEffect(()=>{
    setData(local)
  },[])
  const Show = (i) => {
    Swal.fire(`${i.Name}`, `${i.Note}`);
  };


  const Delete = ({i,index}) => {
    Swal.fire({
      title: `Are you sure? ${local[index].Name}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setData(Del(i))
      }
    });
  };
  return (
    data.length>0 ? data.map((i,index)=>
    <div className="col-lg-4 col-md-6 col-12" key={i.id}>
      <div className="card mb-3">
      <div className="card-header">Note Number : {index+1}</div>
      <div className="card-body">
        <h5 className="card-title">{i.Name}</h5>
        <p className="card-text">{i.Note}</p>
      </div>
      <div className="card-footer text-body-secondary">
        <button
          className="btn text-primary-emphasis border-primary-subtle bg-primary-subtle btn-sm"
          onClick={()=>Show(i)}
        >
          View
        </button>
        <button className="btn text-primary-emphasis mx-2 border-primary-subtle bg-danger-subtle btn-sm" onClick={()=>Delete({i,index})}>
          Delete
        </button>
      </div>
    </div>
    </div>
    ) : <h1 className="text-danger text-center mt-5">لا توجد نوتة لعرضها</h1>
  );
};

export default Card;
