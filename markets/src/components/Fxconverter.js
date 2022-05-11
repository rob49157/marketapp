import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

export default function Fxconverter() {
  var key = "OO3LQyjtTLlIJsljTTnLetLHgKHXv6R0";

  const BASEU_URL = "https://api.exchangeratesapi.io/latest";

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "OO3LQyjtTLlIJsljTTnLetLHgKHXv6R0");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch("https://api.apilayer.com/exchangerates_data/latest?", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="body">
      <input type="number" className="input" />
      <select className="select">
        <option value="hi">FX</option>
      </select>
    </div>
  );
}
