import React, { useEffect, useState } from "react";
import coingecko from "../Apis/coingecko";
 // const URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false


 const Crypto= ()=>{
     const [coins, setcoins]= useState([])
     useEffect(()=>{
         const fetchdata= async ()=>{
            const response= await coingecko.get("/coins/markets",{
                params:{
                    vs_currency:"usd",
                    ids:"bitcoin,rushmoon"
                 }
            })
           
             console.log(response.data)

         }
         fetchdata()
     },[])
     return <div>


     </div>
 };


export default Crypto()