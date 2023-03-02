import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index.js";


const Update = () => {
    var updateValue= useSelector((state)=>state.updateValue)

    var updateId= useSelector((state)=>state.update)

    const dispatch = useDispatch();

    const { OpenUpdate} = bindActionCreators(actionCreators, dispatch);


    const [update, setUpdate] = useState(updateValue)



    const handleInput= (e)=>{
        setUpdate(e.target.value)

    }

    const ClickButton= async(e)=>{
        var expression=update

        e.preventDefault();

     const res=  await fetch(`https://regex-backend.onrender.com/update/${updateId}`, {
            method:"PUT",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
        
             expression
            })
        })
        
        toast.success("Expression updated successfully!")
        OpenUpdate(false)
    }


  return (
    <div className='w-full '>
        <div className="flex justify-center ">
     
      <form method="put" className="w-full ">
        <div className="flex  justify-center items-center">
          <input
            type="text"
            onChange={handleInput}
            value={update}
            placeholder="Enter Regular Expression"
            className="outline-none rounded-lg p-2 px-6 border-2 border-black  text-lg font-bold w-5/12"
          />
        </div>
        <button
          className=" m-4 border border-1 border-black py-2 px-4  w-4/12 md:w-2/12 rounded-lg"

          onClick={ ClickButton}
        >
          Update
        </button>
      </form>
    </div>

      
    </div>
  )
}

export default Update
