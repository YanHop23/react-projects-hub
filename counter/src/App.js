import React, { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  const onClickPlus = () => {
    setCount(count + 1);
  }
  const onClickMinus = () => {
    setCount(count - 1);
  }
  return (
    <div className="text-3xl font-normal">
      <h2 className="text-gray-400 text-center">Counter:</h2>
      <h1 className="font-bold text-5xl text-center mt-4 mb-4">{count}</h1>
      <button onClick={onClickMinus} className="bg-red-600 p-2 mr-1 rounded-lg hover:shadow-[-5px_5px_5px_5px_rgba(229,57,53,0.3)]" >- Minus</button>
      <button onClick={onClickPlus} className="bg-green-600 p-2 ml-1 rounded-lg hover:shadow-[5px_5px_5px_5px_rgba(67,160,71,0.3)]">Plus +</button>
    </div>
  );
}

export default App;
