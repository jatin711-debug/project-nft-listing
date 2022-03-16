
import { useRef,useState } from "react";
import {useTokenContext} from '../contexts/TokenContext';
import '../static/css/styles.css'

const InputBar = ({handelClick,handelChange}) => {
    const data = useRef();
    return (
        <div className="container">
                <div className="form-group d-flex justify-content-center align-items-center input-width">
                    {/* <input onChange={(e)=>handelChange(e.target.value)} className="form-control search-bar-main" ref={data} placeholder="🔎 INPUT WALLET ADDRESS"/> */}
                    {/* <button onClick={()=>handelClick(data.current.value)} className="btn btn-primary m-5 search-bar-icon"></button> */}
                </div>
                <div class="search-bar">
        <input type="text" ref={data} onChange={(e)=>handelChange(e.target.value)} placeholder="Search your address &#128270"  class=" search-bar-main"></input>
        <div ><button class="search-bar-icon btn btn-primary" title="Search" onClick={()=>handelClick(data.current.value)}></button ></div>
    </div>
        </div>
    );
}

export default InputBar;


