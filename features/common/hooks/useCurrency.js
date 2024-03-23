import { useState } from "react"

export const useCurrency  = () => {
    const [amount, setAmount] = useState(25)
    const [currencyOne, setCurrencyOne] = useState('TSH')
    const [currencyTwo, setCurrencyTwo] = useState('INR')

    return {amount, currencyOne, currencyTwo}
}