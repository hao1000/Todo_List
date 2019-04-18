import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect } from 'react-redux'; // Ket noi voi Store de len lay xuong
class TaskList extends Component {

    onChange=(event)=>{

        var targets = event.target;
        var name   = targets.name;
        var value  = targets.value;
        this.setState({
                [name]:value
        });
    }

render() {
   
    var tasks = this.props.tasks_get;// var tasks =this.props.tasks

    var elmTaskItem = tasks.map((task, index) => {
        return <TaskItem
            key={task.id}
            task={task}
        />
    });

    return (
        <table className="table table-bordered table-hover" >
            <tbody>
                {elmTaskItem}
            </tbody>
        </table>

    );
}
}

const mapStatetoProps =(state) => {  //store of state
    return {
        tasks_get: state.tasks // Key : tasks / value : state( trong store - reducer)
        // get tasks from Store 
    }
};

export default connect(mapStatetoProps,null) (TaskList);