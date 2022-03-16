
import { useRef,useState } from "react";
import {useTokenContext} from '../contexts/TokenContext';
import '../static/css/styles.css'

const InputBar = ({handelClick,handelChange}) => {
    const data = useRef();
    return (
        <div className="container">
                <div className="form-group d-flex justify-content-center align-items-center input-width">
                    <input onChange={(e)=>handelChange(e.target.value)} className="form-control" ref={data} placeholder="🔎 INPUT WALLET ADDRESS"/>
                    <button onClick={()=>handelClick(data.current.value)} className="btn btn-primary m-5">SHOW All NFT`S</button>
                </div>
        </div>
    );
}

export default InputBar;


