
import { useRef,useState } from "react";
import {useTokenContext} from '../contexts/TokenContext';

const InputBar = () => {
    const [state,setState] = useState();
    const data = useRef();
    const {setWallet,wallet} = useTokenContext(); 

    const handelSubmit = (value)=>{
        console.log(value);
        setWallet(value);
    }

    return (
        <div className="container">
            <form onSubmit={()=>handelSubmit(data.current.value)}>
                <div className="form-group d-flex justify-content-center align-items-center">
                    <input className="form-control" ref={data} placeholder="🔎 INPUT WALLET ADDRESS" value={wallet}/>
                    <button type="submit" className="btn btn-primary m-5">SHOW NFT`S</button>
                </div>
            </form>
        </div>
    );
}

export default InputBar;


