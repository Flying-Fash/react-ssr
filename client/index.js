import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../src/App';
import store from '../src/store/store'

class Page extends Component{
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>{App}</BrowserRouter>            
            </Provider>
        )
    }
}

ReactDom.hydrate(<Page />,document.getElementById("root"))