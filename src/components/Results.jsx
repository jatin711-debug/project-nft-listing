import React, { useEffect } from 'react';
import {useTokenContext} from '../contexts/TokenContext';
import logo from '../media/images/no-img.png'

const Results = () => {

    const { FetchResults, walletData, wallet } = useTokenContext();

    const fetchData = async ()=>{
        await FetchResults();
        console.log(walletData);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                {walletData?.map(data =>(
                    <div style={{width:"25rem"}} className="col col-sm-3 col-md-4 col-lg-6 w-20 m-1">
                        <div className="card text-center">
                            <img className="card-img-top" src={data.metadata.image || logo} alt="images" />
                            <div className="card-body">
                                <h4>{data.id.tokenId}</h4>
                                <p className="card-text">{data.contract.description}</p>
                            </div>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default Results
