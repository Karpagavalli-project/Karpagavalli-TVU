import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [start]);

  return (
    <div>
      <h1>Timer: {count}</h1>

      <button onClick={() => setStart(true)}>
        Start Test
      </button>
    </div>
  );
}

export default App;