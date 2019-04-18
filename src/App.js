import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

class App extends Component {

    render() {
        return (
            <div className="container" align="center">

                <div className="text">
                    <h1>Todo List </h1>
                    <hr />
                    {/* Add */}
                    <TaskForm /> &nbsp; &nbsp;
                    {/*//Show List */}
                    <div className="tbl-5" >
                        <TaskList />
                    </div>
                
                </div>
            </div>
               
        );
    }
}
export default App;