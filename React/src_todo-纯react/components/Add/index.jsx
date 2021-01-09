import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import './index.css';

export default class Add extends Component {
    addTodo=(event)=>{
        let name=event.target.value;
        if(event.keyCode!==13) return;
        if(name.trim()==='') return alert('输入错误,重新输入')
        this.props.addTodo({id:uuidv4(), name, done:false});
        event.target.value='';
    }
    render() {
        return (
                <div className="todo-header">
                    <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.addTodo}/>
                </div>
        )
    }
}
