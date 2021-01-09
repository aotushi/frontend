import React, { Component } from 'react';
import Item from '../Item';
import './index.css';


export default class List extends Component {
    render() {
        const {todos, deleteTodo, handleCheck}=this.props;
        return (
                <ul className="todo-main">
                    {
                        todos.map((todoObj)=>{
                            return <Item 
                                        key={todoObj.id} 
                                        todoObj={todoObj}
                                        deleteTodo={deleteTodo}
                                        handleCheck={handleCheck}
                                    />
                        })
                    }
                </ul>
        )
    }
}
