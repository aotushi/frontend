import React, { Component } from 'react';
import Add from './components/Add';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
    state={
        todos:[
            {id:'001',name:'抽烟', done:false},
            {id:'002',name:'喝酒', done:true},
            {id:'003',name:'烫头', done:false}
        ]
    }
    //为Add组件传一个函数,添加todo
    addTodo=(todo)=>{
        this.setState({todos:[todo, ...this.state.todos]})
    }
    //为item组件传函数,删除todo
    deleteTodo=(todoObj)=>{
        const{todos}=this.state;
        const newtodos=todos.filter((todo)=>{
            return todo!==todoObj
        })
        this.setState({todos:newtodos})
    }
    //为item组件传函数:改变input的checkbox的勾选状态
    handleCheck=(id,value)=>{
        const {todos}=this.state;
        const newtodos=todos.map((todo)=>{
            if(todo.id===id) todo.done=value;
            return todo;
        })
        this.setState({todos:newtodos})
    }
    //给footer组件传函数,点击按钮实现全选全不选
    handleAllCheck=(value)=>{
        const {todos}=this.state;
        const newtodos=todos.map((todo)=>{
            if(todo.done!==value) todo.done=value
            return todo;
        })
        this.setState({todos:newtodos})
    }
    //给footer组件传函数,点击清除已完成的todo 使用filter而非map
    handleDone=()=>{
        const{todos}=this.state;
        const newtodos=todos.filter((todo)=>{
            return !todo.done;
        })
        this.setState({todos:newtodos});
    }
    render() {
        const {todos}=this.state;
        return (
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Add addTodo={this.addTodo} />
                        <List 
                            todos={todos}
                            deleteTodo={this.deleteTodo}
                            handleCheck={this.handleCheck}
                        />
                        <Footer 
                            todos={todos}
                            handleAllCheck={this.handleAllCheck}
                            handleDone={this.handleDone}
                        />
                    </div>
                </div>
        )
    }
}