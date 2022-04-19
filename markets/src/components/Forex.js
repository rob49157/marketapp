import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Forex(){
    const [forex, setForex]= useState([])
    // state for searchbar
    const [search, setSearch]= useState('')
    console.log('dasdasd')

    useEffect(()=>{
        axios 
        .get('https://api.exchangerate.host/latest')
        .then((response)=>{
            setForex(response.data)
            console.log(response.data)
        })
    },[])
}