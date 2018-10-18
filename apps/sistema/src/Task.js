import React, { Component } from 'react';

class Task extends Component {
    constructor(props){
        super(props);
        this.makeTasks = this.makeTasks.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }

    makeTasks(task){
        return <li onClick={() =>this.delete(task.key)} key={task.key}>{task.text}</li>
    }

    render(){
        var tasks = this.props.elementos;
        var listTasks = tasks.map(this.makeTasks);

        return (
            <ul>
                {listTasks}
            </ul>
        );
    }
}

export default Task;