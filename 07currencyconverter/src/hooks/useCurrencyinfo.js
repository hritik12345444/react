import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    const curr = baseCurrency.toLowerCase();

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[curr]);   // JSON structure: { usd: { inr: xx, eur: xx } }
      })
      .catch(() => setData({}));
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
