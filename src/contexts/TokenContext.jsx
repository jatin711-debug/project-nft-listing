import {useContext, createContext, useState, useEffect} from 'react';
import axios from 'axios';
const TokenContext = createContext();
import * as UTILS from '../utils/util';

const TokenContextProvider = ({children})=>{
    const [wallet,setWallet] = useState(`0xf6b4215cdd70e0157cc96a32b5da3155037a7424`);
    const [walletData,setWalletData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [walletCount,setWalletCount] = useState(0);
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseURL =  `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs/`
    useEffect(() =>{
        UTILS.setLocalStorage(wallet.toString(),JSON.stringify(walletData));
    },[wallet]);

    const FetchResults = async (walletContext) =>{
        setIsLoading(true);
        setWallet(walletContext);
        var config = {
            method: 'get',
            url: `${baseURL}?owner=${walletContext}`
        };

        try {
            await axios(config)
                .then(response => {
                    setWalletCount(response.data.totalCount);
                    setWalletData(filterData(response.data.ownedNfts));
                })
                    .catch(error => console.log(error));
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    const filterData = (data) =>{
        const filteredData = data.filter(d => d.metadata.image !== undefined && d.metadata.description !== undefined);
        return filteredData;
    };

    return(
        <TokenContext.Provider value={{wallet,setWallet,walletData,FetchResults, isLoading, walletCount}} >
            {children}
        </TokenContext.Provider>
    );
}

export const useTokenContext = () => useContext(TokenContext);

export default TokenContextProvider;