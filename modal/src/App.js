import './App.css';
import { useState } from 'react';

function App() {
  const [modaView, setModalView] = useState(false)

  return (
    <div className=''>
      <button onClick={() => setModalView(true)} className='bg-cyan-500 p-2 text-3xl rounded-md'>Open window</button>

      <div className={`absolute left-0 top-0 w-full h-full bg-slate-500 bg-opacity-40 flex justify-center items-center transition-all ${modaView ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className='bg-white w-[70%] max-w-[400px] max-h-[300px] py-10 px-8 rounded-xl relative'>
          <svg onClick={() => setModalView(false)} className='absolute top-0 right-0 cursor-pointer' height="35" viewBox="0 0 200 200" width="35">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img className='transition-all' src='https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
