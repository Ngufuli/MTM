import React, {useState} from "react";

const ExchangeForm = () => {

    const [fromCurrency, setFromCurrency] = useState('TSH');
    const [toCurrency, setToCurrency] = useState('INR');
    const [amount, setAmount] = useState('');

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    }

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <h2>Select your exchange options</h2>
            <form onSubmit={handleSubmit}>
            <label>
                From Currency:
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <option value='TSH'>TSH</option>
                    <option value='INR'>INR</option>
                    {/* {We'll add more in the future} */}
                </select>
            </label>
            <br/>
            <label>
                To Currency:
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value='INR'>INR</option>
                    <option value='TSH'>TSH</option>
                    {/* {We'll add more in the future} */}
                </select>
            </label>
            <br/>
            <label>
                Amount:
                <input type="number" value={amount} onChange={handleAmountChange}/>
            </label>
            <br/>
            <button type="submit">Convert</button>
            </form>
        </div>
    )
}

export default ExchangeForm;