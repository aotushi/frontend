import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import routes from './config/routes'
// import 'antd-mobile/dist/antd-mobile.css'

export default class App extends Component {
    render() {
        
        return (
            <Switch>

                {
                    // routes.map((routeObj)=>{
                    //     return <Route key={routeObj.path} {...routeObj}/>
                    // })
                    routes.map((routeObj)=>{
                        return <Route key={routeObj.path} {...routeObj}/>
                    })
                }
                <Redirect to='/Login'/>
            </Switch>
        )
    }
}
