import React, { Component,Fragment } from 'react';
import './index.css';
export default class Item extends Component {
    state={mouseIsEnter:false}

    //鼠标移动改变当下item的背景颜色 使用state状态+事件来操作页面改变
    changeColor=(type)=>{
        return ()=>{
            this.setState({mouseIsEnter:type})
        }
    }

    //点击button,删除todo
    deleteTodo=(todoObj)=>{
        return ()=>{
            if(window.confirm('确定删除吗?'))
            this.props.deleteTodo(todoObj);
        }
    }

    //点击选框,改变当前input的checked属性值 ***
    changeInputCheck=(id)=>{
        return (event)=>{
            this.props.handleCheck(id, event.target.checked)
        }
    }
    render() {
        const {id,name,done}=this.props.todoObj;
        const {mouseIsEnter}=this.state;
        return (
            <Fragment>
                <li 
                    onMouseLeave={this.changeColor(false)} 
                    onMouseEnter={this.changeColor(true)}
                    className={mouseIsEnter?'active':''}
                >
                    <label>
                        <input 
                            type="checkbox" 
                            checked={done}
                            onChange={this.changeInputCheck(id)}
                        />
                        <span>{name}</span>
                    </label>
                    <button 
                        onClick={this.deleteTodo(this.props.todoObj)}
                        className="btn btn-danger" 
                        style={{ display: mouseIsEnter?'block':'none' }}
                    >删除</button>
                </li>
            </Fragment>
        )
    }
}
