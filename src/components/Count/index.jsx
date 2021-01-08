import React, { Component, Fragment } from 'react';
import store from '../../redux/store';
import { 
    countDecrementAction, 
    countIncrementAction, 
    countIncrementAsyncAction 
} from '../../redux/count_action';


export default class CountUI extends Component {
    container = React.createRef();
    handleCount = (type) => {
        return () => {
            const { value } = this.container.current;
            if (type === 'increment') {
                store.dispatch(countIncrementAction(value * 1));
            }
            if (type === 'decrement') {
                store.dispatch(countDecrementAction(value * 1));
            }
            if (type === 'incrementIfOdd') {
                if (store.getState() % 2 !== 0) {
                    store.dispatch(countIncrementAction(value * 1))
                }
            }
            if (type === 'incrementAsync') {
                store.dispatch(countIncrementAsyncAction(value * 1, 500))
            }
        }
    }
    render() {
        return (
            <Fragment>
                <h2>这是Count组件</h2>
                <h2>当前求和为:{store.getState()}</h2>
                <select ref={this.container}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={this.handleCount('increment')}>+</button>&nbsp;
                <button onClick={this.handleCount('decrement')}>-</button>&nbsp;
                <button onClick={this.handleCount('incrementIfOdd')}>奇数加</button>&nbsp;
                <button onClick={this.handleCount('incrementAsync')}>延时加</button>&nbsp;
            </Fragment>
        )
    }
}