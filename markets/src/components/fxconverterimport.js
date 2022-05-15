import react from 'react'
import "../App.css";

export default function  Currencyrow(props){
    const{
        currencyOptions,
        selectedCurrency,
        onchangeCurrency,
        onChangeAmount,
        amount
    }= props

    return (
        <div className="body">
        <input type="number" value={amount} onChange={onChangeAmount} className="input" />
        <select value={selectedCurrency} onChange={onchangeCurrency} className="select">
          {currencyOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        
      </div>
     )
}