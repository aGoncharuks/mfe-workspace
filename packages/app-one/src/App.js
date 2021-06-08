import {useState} from 'react';

function App() {
	const [count, setCount] = useState(0);
	
  return (
    <div className="App">
			<div>REACT APPLICATION</div>
			<div>Counter: {count}</div>
			<button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
