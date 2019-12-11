import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
import Index from "./container/index";
import About from './container/about';

class RouterPage extends Component{
    render(){
        return(
            <div>
                <Route path="/" exact component={Index}></Route>
                <Route path="/about" exact component={About}></Route>
            </div>
        )
    }
}

export default (
    <div>
        <Route path="/" exact component={Index}></Route>
        <Route path="/about" exact component={About}></Route>
    </div>
);