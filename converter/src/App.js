import { useEffect, useState } from "react";
import Block from "./components/Block";;

function App() {
  const [rates, setRates] = useState([])
  const [toCurency, setToCurency] = useState('UAH');
  const [toPrice, setToPrice] = useState(0);
  const [fromCurency, setFromCurency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toRate, setToRate] = useState();
  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(res => res.json())
    .then((json) => {
      setRates(json)
    })
  }, [])

  function changeToCurency(cur, value) {
    setToCurency(cur)
    onChangeToPrice(value);
  }

  function changeFromCurency(cur) {
    setFromCurency(cur)
  }

  function onChangeToPrice(value){
    setFromPrice((rates.find(obj=> obj['cc'] === fromCurency).rate*value).toFixed(2));
    setToPrice(value);
  }

  function onChangeFromPrice(){
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Block
        changeCurency={changeToCurency}
        onChangeValue={onChangeToPrice}
        curency={toCurency}
        value={toPrice}

      />
      <Block
        changeCurency={changeFromCurency}
        onChangeValue={onChangeFromPrice}
        curency={fromCurency}
        value={fromPrice}
      />
    </div>
  );
}

export default App;
