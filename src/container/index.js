import React,{ useState,useEffect } from 'react';
import {connect} from 'react-redux';
import { getIndexList } from "../store/index";

function Index(props){
    const [count,setCount] = useState(1);
    useEffect(() => {
        props.getIndexList();
    },[]);
    return (
        <>
            <div>hello,{props.title},你点击了{count}次</div>
            <button 
                style={{padding:"5px 20px",background:"red",color:"#fff",borderRadius:'3px'}} 
                onClick={() => setCount(count+1)}
            >+</button>
            <hr />
            <ul>
                {props.list.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </>
    )
}

export default connect(
    state => ({
        list:state.index.list,
    }),
    {getIndexList:getIndexList}
)(Index)