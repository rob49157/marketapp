import React from "react";
import axios from "../../package.json"

async function Crypto(){
    try {
        const URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false";
        const {data}= await axios({
            method:'GET',
            url:URL
        })
    }catch (err){
        console.log(err)
} 
}

export default Crypto()