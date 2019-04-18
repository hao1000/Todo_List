import * as types from './../constants/ActionTypes';
//  Reducers 
var s4 = () => {
    return Math.floor((1+Math.random())*0x1000).toString(16).substring(1);
}
var generateID = () => {
        return s4() + s4() + '-' + s4();
}

var data =JSON.parse(localStorage.getItem('tasks')); // Get data from localStorage

var initialState  = data ? data :[] ;

var myReducer =(state=initialState,action) => {

    switch(action.type){
        
        case types.LIST_ALL:
            return state;
           
        case types.ADD_TASK:
            var newTask ={
                id:generateID(),
                name : action.task.name,
            }
            // Add new task to state
            state.push(newTask);
            // Save localstoge 
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state]; // return state : avoid reference cases

        default:return state;
    }
};

export default myReducer;