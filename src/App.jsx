import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [minute, setMinute] = useState(0);
  const [started,setStarted] = useState(false);

  // useEffect(() => {
  //   return () => clearInterval(id.current);
  // }, []);

  let id = useRef();

  function handelTime() {
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setStarted(!started);
  }

  useEffect(()=>{
    if(time==60){
      setMinute(state=>state+1);
      setTime(0);
    }
  },[time])

  return (
    <div className="App">
      <h1>{minute} {time}</h1>
      <button onClick={started?() => {clearInterval(id.current);setStarted(!started);}:()=>handelTime()}>{started?"Pause":"Start"}</button>
      <button
        onClick={() => {
          clearInterval(id.current);
          setTime(0);
          setMinute(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
