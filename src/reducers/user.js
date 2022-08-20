

export const initialState ={
     profile:{},
     allUser:[],
}


const UserReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'SETALLUSER':{
           
            return{
                ...state,
                allUser:action.payload
            }
        
            break;
        }
        case 'SET':{
            return {
                ...state,
                profile:{...state.profile,...action.payload}
            }
            break;
        }
        default:
            return state;
    }
}
export default UserReducer;