import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Bienvenue dans mon appli</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick}/>
    </div>
  );
}

const MyButton = ({ count, onClick }) => {

  return (
    <button onClick={onClick}>Cliqué {count} fois</button>
  )
}


export default App;
