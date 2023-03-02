import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { toast } from "react-toastify";

const Apply = () => {



    const dispatch = useDispatch()
    const [string , setString]= useState('');
    const { ApplyButton, Result} = bindActionCreators(actionCreators, dispatch)

    var expression= useSelector(state=>state.updateValue)

    const [res, setRes]= useState('')

    const handleInput = (e)=>{

        setString(e.target.value);

    }
    var result=" "

    
    
    const applyClick= ()=>{
        result+='  Input String is : '+ `${string}`+ '\n  ,  Expression is :'+ `${expression}\n  , `

       
        

        let m=Array.from(string.matchAll(expression, (m)=>m[0]))

        if(m.length==0){
            result+= 'not matched anything'

        }
        else{
            m.forEach((p)=>{
                result+= ` ,   ${p[0]} at index ${p.index}      `
            })

        }
        
        
        

        Result(result)
        ApplyButton(false)

    }



  return (

<div className=''>
    <div className=''>
      <input
            type="text"
            onChange={handleInput}
            value={string}
            placeholder="Enter String "
            className="outline-none rounded-lg p-2 px-6 border-2 border-black w-11/12 text-lg font-bold md:w-5/12"
          />
          <br/>

          <button className='text-xl  border border-1 border-black mt-4 py-2 px-4 w-4/12 md:w-2/12 rounded-xl ' onClick={applyClick}>Apply</button>

    </div>
    </div>
  )
}

export default Apply
