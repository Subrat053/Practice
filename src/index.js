import React from "react";
import ReactDOM from "react-dom/client";

const Game = () => {
  return (
    <>
    <h1>Hii</h1>
    <App name='Calculator'/>
    </>
  );
}

const App = (props) => <h1>{props.name}</h1>; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Game/>
  </React.StrictMode>
);