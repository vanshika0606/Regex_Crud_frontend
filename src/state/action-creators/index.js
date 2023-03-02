export const ShowList = (show)=>{

    return (dispatch)=>{
        dispatch({
            type:"show-list",
            payload:show
        })
    }

}

export const UpdateId = (update)=>{

    return (dispatch)=>{
        dispatch({
            type:"Update-id",
            payload:update
        })
    }

}

export const UpdateValue=(updateValue)=>{

    return (dispatch)=>{
        dispatch({
            type:"UpdateValue",
            payload:updateValue
        })
    }

}

export const OpenUpdate= (update)=>{

    return (dispatch)=>{
        dispatch({
            type:"OpenUpdate",
            payload:update
        })
    }

}

export const ApplyButton = (apply)=>{

    return (dispatch)=>{
        dispatch({
            type:"Apply",
            payload:apply
        })
    }
}

export const Result= (result)=>{

    return (dispatch)=>{
        dispatch({
            type:"Result",
            payload:result
        })
    }
}