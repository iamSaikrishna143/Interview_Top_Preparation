import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, SetNumberAllowed] = useState(false);
  const [charAllowed, SetNumberAllowed] = useState(false);
  const [password, SetPassword] = useState("");

  const passwordGenerator=()=>{
    
  }

  return (
    <>
      <h1 className="text-white text-4xl text-center">Password Generetor</h1>
    </>
  );
}

export default App;
