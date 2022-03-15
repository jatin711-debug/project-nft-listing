import { useState } from 'react';
import InputBar from './components/InputBar';
import Results from './components/Results';
import {useTokenContext} from './contexts/TokenContext';
import Footer from './components/Footer';
import './App.css';

const App = () => {

    const [state,setState] = useState();

    const {setWallet} = useTokenContext(); 

    const handelClick = (value)=>{
        setWallet(value);
        console.log(value);
    }

    const handelChange = (value)=>{
        setState(value);
    }
    return (
        <div className="container">
            <InputBar handelClick={handelClick} handelChange={handelChange} setAddressState={setState} />
            <Results />
            <Footer/>
        </div>
    );
}

export default App
