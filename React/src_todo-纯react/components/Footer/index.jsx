import React, { Component } from 'react';
import './index.css';
export default class Footer extends Component {
    //点击按钮实现全选or全不选
    handleAllCheck=(event)=>{
        this.props.handleAllCheck(event.target.checked);
    }

    //
    handleDone=()=>{
        this.props.handleDone();
    }
    render() {
        const {todos}=this.props;
        //reduce函数的用法
        const countDone=todos.reduce((preValue, current)=>preValue+(current.done?1:0),0);
        return (
                <div className="todo-footer">
                    <label>
                        <input 
                            type="checkbox" 
                            checked={countDone===todos.length&(todos.length)!==0}
                            onChange={this.handleAllCheck}
                        />
                    </label>
                    <span>
                        <span>已完成{countDone}</span> / {todos.length}</span>
                    <button 
                        className="btn btn-danger"
                        onClick={this.handleDone}
                    >清除已完成任务</button>
                </div>
        )
    }
}
