import React, {Component} from 'react';
import CountUI from './components/Count'


export default class App extends Component{
    render(){
        return(
            <div>
                <CountUI/>
                <hr/>
            </div>
        )
    }
}