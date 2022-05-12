import React, { useEffect, useState } from "react";
import "../App.css";

export default function Fxconverter() {
  const [currencyoptions, setCurrencyoptions] = useState([]);
  const [fromcurrency, setFromcurrency] = useState();
  const [toCurrency, settoCurrency] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "OO3LQyjtTLlIJsljTTnLetLHgKHXv6R0");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch("https://api.apilayer.com/exchangerates_data/latest?", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const firstcurrency = Object.keys(data.rates)[0];
        setCurrencyoptions([data.base, ...Object.keys(data.rates)]);
        setFromcurrency(data.base);
        settoCurrency(firstcurrency);
      })
      .catch((error) => console.log("error", error));
  }, []);

  <Fxconverter currencyoptions={currencyoptions} />;

  return (
    <div className="body">
      <input type="number" className="input" />
      <select className="select">
        {currencyoptions.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
