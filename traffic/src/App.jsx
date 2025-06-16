import React,{useEffect, useState} from "react";
import './App.css'
const App = () => {

const[activeLight, setActiveLight] = useState("red");


useEffect(() => {
let timer;

if(activeLight=="red"){``
  timer= setTimeout(() => {
setActiveLight("green")
},5000)
}
else if(activeLight=="green"){
timer= setTimeout(() => {
  setActiveLight("yellow")
},3000);``
}
else{
  timer = setTimeout(() => {
  setActiveLight("red")``
  },2000)
}

return () => clearTimeout(timer);


},[activeLight])

 return ( 
    <div className="traffic-light">
      <div className={`light red ${activeLight === "red" ? "active" : ""}`} />
      <div className={`light yellow ${activeLight === "yellow" ? "active" : ""}`} />
      <div className={`light green ${activeLight === "green" ? "active" : ""}`} />
    </div>
  );
};

export default App;
