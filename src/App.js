import React from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [square, setSquare] = useState(2);

  const expensiveFunction = number => {
    let i = 0;
    while( i < 2000000000) i++;
    return square * number;
  };

  const fastFunction = number => {
    return number;
  }

  const slowResult = useMemo(() => expensiveFunction(square), [square]);
  const fastResult = fastFunction(count);

  return (
    <div >
      <h2>Expensive function</h2>
      <p>{square} x {square} = {slowResult(square)}</p>
      <button onClick={() => setCount(count + 1)} >Square again</button>
      <h2>Fast function</h2>
      <p>Count is: {fastFunction(count)}</p>
    </div>
  );
}

export default App;
