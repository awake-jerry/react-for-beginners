import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Hello Created :)");
    return () => console.log("Hello Destroyed :("); // CleanUp 기능
  }, []);
  
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return <div>
    {showing ? <Hello /> : null}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>;
}

export default App;