import React from 'react';
import dp from '../../../assets/dp.jpg';
import './Header.css';
const Header=(props)=>{
    let dpUrl=dp;
    if(props.dpHash!=null){
       dpUrl= `https://ipfs.io/ipfs/${props.dpHash}`
    }


    return <div className="Header">
                <img className="HeImg" src={dpUrl}/>

                <h4 className="HeH4">AeChat</h4>

                <div className="HeHamBurger">
                    <div className="HeStroke"></div>
                    <div className="HeStroke"></div>
                    <div className="HeStroke"></div>
                </div>
            </div>
}

export default Header;