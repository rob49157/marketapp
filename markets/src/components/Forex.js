import React, { useEffect, useState } from "react";
import styles from '../App.module.css';
import FxItem from "./Fxitems";
 
import { searchFxRates } from "./services";
import { fetchExchangeRates } from "./services";
import '../App.css'
import axios from "axios";



export  function Forex() {
  const [rates, setRates] = React.useState(null);
  const [ratesBase, setRatesBase] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);

  const onSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    let componentIsMounted = true;

    const getFxData = () => {
      fetchExchangeRates()
        .then((data) => {
          console.log('fx data:', data);
          if (componentIsMounted) {
            setRates(data.rates);
            setRatesBase(data.base);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // load initially
    getFxData();

    const fetchInterval = setInterval(getFxData, 1000 * 60);

    return () => {
      clearInterval(fetchInterval);
      componentIsMounted = false;
    };
  }, []);

  React.useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setSearchResults(searchFxRates(rates, searchTerm));
    } else {
      setSearchResults(rates);
    }
  }, [searchTerm, rates]);

  return (
    <div className={styles.app}>
      <h1>Fx Rates</h1>
      <input
        value={searchTerm}
        className={styles.input}
        placeholder='Search...'
        onChange={onSearch}
      />
      {searchResults
        ? Object.keys(searchResults).map((key) => (
            <FxItem
              key={key}
              fxSymbol={key}
              fxRate={searchResults[key]}
              ratesBase={ratesBase}
            />
          ))
        : []}
    </div>
  );
}























