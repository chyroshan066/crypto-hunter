import { useEffect, useState } from "react"
import { CryptoContext } from "./CryptoContext"

const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("€");

  useEffect(() => {
    if(currency === "EUR")
      setSymbol("€")
    else
    setSymbol("$")
  }, [currency]);

  return (
    <>
      <CryptoContext.Provider value={{ currency, setCurrency, symbol }}>
        {children}
      </CryptoContext.Provider>
    </>
  )
}

export default CryptoProvider
