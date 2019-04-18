import React, { Component } from 'react';

class TaskItem extends Component {

render() {
    var {task} = this.props;

return (    
            <tr>
                <td>{task.name}</td>
            </tr>
        );
    }
}

export default TaskItem;