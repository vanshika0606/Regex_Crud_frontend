var INITIAL_STATE
const state= INITIAL_STATE={
    show:0,
    update:'',
    updateValue:'',
    updateButton:false,
    apply:false,
    result:'',
    data:[]
}

const reducer = (state=INITIAL_STATE, action)=>{
    if(action.type==='show-list'){
        return {
            ...state,
            show: !action.payload
        }
    }
    else if(action.type==='Update-id'){
        return {
            ...state,
            update:action.payload
        }
    }
    else if(action.type==='UpdateValue'){
        
        return {
            ...state,
            updateValue:action.payload
        }
    }
    else if(action.type==='OpenUpdate'){
        return {
            ...state,
            updateButton:action.payload
        }
    }
    else if(action.type=='Apply'){

        return {
            ...state,
            apply: action.payload
        }

    }
    else if(action.type=='Result'){

        return{
            ...state,
            result:action.payload
        }
    }
    else if(action.type=='data_success'){

        return {
            ...state,
            data:action.payload
        }
    }
    else if( action.type=="expression_delete"){

        return {
            ...state
        }
    }
    else{
        return state;
    }
}

export default reducer