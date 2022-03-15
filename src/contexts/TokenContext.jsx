import {useContext, createContext, useState} from 'react';
import data from '../../file.json'
import axios from 'axios';
const TokenContext = createContext();
import * as UTILS from '../utils/util';

const TokenContextProvider = ({children})=>{
    const [wallet,setWallet] = useState(`0xf6b4215cdd70e0157cc96a32b5da3155037a7424`);
    const [walletData,setWalletData] = useState([]);

    const apiKey = data.apiKey;

    const baseURL =  `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs/`

    const FetchResults = async (walletContext) =>{
        setWallet(walletContext);
        var config = {
            method: 'get',
            url: `${baseURL}?owner=${wallet}`
        };

        try {
            await axios(config)
                .then(response => {
                    setWalletData(response.data.ownedNfts);
                    UTILS.setLocalStorage(wallet.toString(),JSON.stringify(response.data));
                })
                    .catch(error => console.log(error));
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <TokenContext.Provider value={{wallet,setWallet,walletData,FetchResults}} >
            {children}
        </TokenContext.Provider>
    );
}

export const useTokenContext = () => useContext(TokenContext);

export default TokenContextProvider;