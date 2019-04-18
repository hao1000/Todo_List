import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index'

class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
        }        
    }

    onChange =(event) => {
        var target = event.target;
        var name = target.name;
        var value =target.value;
        this.setState({
            [name] : value
        });
    }
    onSubmit = (event) => {
        event.preventDefault(); // Do not load Form 
        this.props.onAddTask(this.state);
         this.onClear();
    }

    onClear = () =>{
        this.setState({
            name:'',
        });
}
    render() {

        return (
        
            <div className="input-group" >
                <form onSubmit={this.onSubmit}>

                    <input
                        type="text ps-5"
                        className="form-control-right mr-5"
                        placeholder="Add to list"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}

                    ></input>

                    <div className="text-right">
                        <button type="submit" className="btn btn-warning btn-5">
                            <span className="fa fa-plus "></span>
                            Add </button>
                    </div>

                </form>
            </div>
               
        );
    }
}
const mapStateToProps = (state) => { // Vì có 1 tham số nên có thể bỏ ()
    // Phải trả về 1 object
    return { 
    }
};
// Gửi tới Reducer 
// Chuyển dispath thành props 
const mapDispatchToProps = (dispath,props) => {
    return{
        onAddTask:( task) => {
            dispath(actions.addTask(task)); // Từ action đã import
        }
    }
}
// Connect : tham số thứ 2 là 1 action
export default  connect(mapStateToProps,mapDispatchToProps)(TaskForm);