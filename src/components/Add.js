import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import React, { useEffect, useState } from "react";
import isValid from "./IsValid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index.js";
import {useSelector} from "react-redux"



const Add = () => {

  var show= useSelector((state)=>state.show)
 
  const [expression, setExpression] = useState("");

  const dispatch = useDispatch();

  const { ShowList } = bindActionCreators(actionCreators, dispatch);

  const handleInput = async (e) => {
    setExpression(e.target.value);
  };

  const AddRege = async () => {
    

    const res = await fetch("http://localhost:3000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression,
      }),
    });

    setExpression("");
    
    ShowList(show)
  };

  const ErrorExpre = (e) => {
    e.preventDefault();
    if (isValid(expression) && expression!=='') {
      AddRege();
      toast.success("Added to the list !");
    } else {

      if(expression==""){

        toast.error("Enter Expression")

      }else{

        toast.error("Can't add invalid expression to the list !");
      }
    }
  };

  

  return (
    <div className="flex justify-center ">
      
      <form method="post" className="w-full">
        <div className="flex  justify-center items-center">
          <input
            type="text"
            onChange={handleInput}
            value={expression}
            placeholder="Enter Regular Expression"
            className="outline-none rounded-lg p-2 px-6 border-2 border-black w-11/12 text-lg font-bold md:w-5/12"
          />

          {!expression == "" && (
            <div className="text-3xl ml-5">
              {isValid(expression) == true ? (
                <FaCheck style={{ color: "green" }} />
              ) : (
                <ImCross style={{ color: "red" }} className="text-2xl" />
              )}
            </div>
          )}
        </div>
        <button
          className=" m-4 border border-1 border-black py-2 w-5/12 px-4 md:w-2/12 rounded-lg text-lg font-bold hover:bg-cyan-100"
          onClick={ErrorExpre}
        >
          Add To List
        </button>
      </form>
    </div>
  );
};

export default Add;
