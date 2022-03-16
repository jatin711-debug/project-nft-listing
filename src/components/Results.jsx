import React, { useEffect } from 'react';
import {useTokenContext} from '../contexts/TokenContext';
import logo from '../media/images/no-img.png'
const Results = () => {

    const { FetchResults, walletData, wallet, isLoading, walletCount} = useTokenContext();
    const fetchData = async (wallet)=>{
        await FetchResults(wallet);
    }

    useEffect(()=>{
        fetchData(wallet);
    },[wallet])

    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center gx-3">
                <h2 style={{textAlign: 'center',color:'white'}}>Total Number Of NFT'S OWNED: {walletCount} </h2>
                {walletData?.map((data,index) =>(
                    <div style={{width:"20rem"}} key={index} className="col col-sm-3 col-md-4 col-lg-6 w-20 m-1">
                        <div className="card text-center">
                            <img className="card-img-top" src={data.metadata?.image || logo} alt="images" />
                            <div className="card-body">
                                <h6>{data?.metadata?.name}</h6>
                                <p className="card-text">{new String(data.metadata?.description).substring(0,30)}</p>
                            </div>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    );
}

export default Results
