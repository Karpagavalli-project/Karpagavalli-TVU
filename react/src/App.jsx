import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    
        setInterval(()=>{
            setCount(prev => prev + 1);
      }, 1000);
    
}, []);

  return (
    
      <h1>Timer: {count}</h1>

     
  );
}

export default App;