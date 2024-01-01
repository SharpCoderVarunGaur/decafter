import {createSlice} from '@reduxjs/toolkit';
const UserSlice= createSlice({
name:"user",
initialState:[],
reducers:{
addDataUser(state,action){
    console.log(action.type);
state.push(action.payload)
}
    }

})
console.log(UserSlice.actions)
export default UserSlice.reducer;
export const {addDataUser}=UserSlice.actions