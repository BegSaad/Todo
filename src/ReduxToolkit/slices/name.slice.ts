import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userdata{
    name:string|null
}

const initialState:userdata={
    name:null
}

const userSlice=createSlice({
name:'nameData',
initialState,
reducers:{
    setName:(
state,
action:PayloadAction<{
    name:string
}>
    )=>{
state.name=action.payload.name
    },


clearName:(state)=>{
state.name= null
}
},
})

export const { setName,clearName} = userSlice.actions;
export default userSlice.reducer;