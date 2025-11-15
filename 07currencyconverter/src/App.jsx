import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {}).map((c) => c.toUpperCase());

  const swap = () => {
    setFrom(to.toLowerCase());
    setTo(from.toLowerCase());
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    const rate = currencyInfo?.[to.toLowerCase()];
    setConvertedAmount(rate ? (amount * rate).toFixed(2) : 0);
  };

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex justify-center items-center">

      {/* Animated Glow Orbs */}
      <div className="absolute w-[700px] h-[700px] bg-blue-600/20 blur-[200px] rounded-full top-[-20%] left-[-10%] animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[200px] rounded-full bottom-[-20%] right-[-10%] animate-pulse"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>

      {/* MAIN CARD */}
      <div
        className="
          w-full max-w-lg relative z-10 
          bg-white/10 backdrop-blur-2xl
          border border-white/20 
          rounded-3xl p-10
          shadow-[0_0_60px_rgba(0,0,0,0.6)]
          hover:shadow-[0_0_80px_rgba(0,0,0,0.8)]
          transition-all duration-500
        "
      >
        
        {/* Title */}
        <h2 className="text-center text-5xl font-extrabold mb-10 tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(80,150,255,0.8)]">
            Currency Converter
          </span>
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* FROM BOX */}
          <div className="w-full mb-4">
            <InputBox
              name="from"
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) =>
                setFrom(currency.toLowerCase())
              }
              selectCurrency={from.toUpperCase()}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-center my-5">
            <button
              type="button"
              onClick={swap}
              className="
                px-6 py-2 rounded-full text-white text-lg
                bg-gradient-to-r from-blue-500 to-purple-600
                shadow-[0_0_20px_rgba(80,120,255,0.7)]
                hover:shadow-[0_0_30px_rgba(120,50,255,0.7)]
                hover:scale-110 active:scale-90
                transition-all duration-300
              "
            >
              🔁 Swap
            </button>
          </div>

          {/* TO BOX */}
          <div className="w-full mt-2 mb-8">
            <InputBox
              name="to"
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) =>
                setTo(currency.toLowerCase())
              }
              selectCurrency={to.toUpperCase()}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="
              w-full py-4 rounded-2xl text-xl font-semibold
              bg-gradient-to-r from-blue-600 to-indigo-700
              text-white
              shadow-[0_0_25px_rgba(100,100,255,0.8)]
              hover:shadow-[0_0_35px_rgba(140,80,255,1)]
              hover:scale-[1.04] active:scale-95
              transition-all duration-300
            "
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>

        
      </div>
    </div>
  );
}

export default App;
