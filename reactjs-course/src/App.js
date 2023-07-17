// import logo from './logo.svg';
// import './App.css';



// function App() {
//   class Header {
//     constructor() {
//       this.color = "Red";
//     }

//     //Arrow function:
//     changeColor = () => {
//       document.getElementById("demo").innerHTML += this;
//     }
//   }

//   const myheader = new Header();


//   //The window object calls the function:
//   window.addEventListener("load", myheader.changeColor);

//   //A button object calls the function:
//   document.getElementById("btn").addEventListener("click", myheader.changeColor);

//   var value = "Hello yes sir";
//   const hello = (val) => {
//     console.log(value + ' ReactJS');
//   };
//   return (
//     <div className="App">
//       <h1>Hello ReactJS</h1>
//       <button onClick={hello}>click me to show say hello</button>

//       <h1>Regular Function</h1>

//       <p>The <strong>this</strong> keyword represents different objects depending on how the function was called.</p>

//       <button id="btn">Click Me!</button>

//       <p><strong>this</strong> represents:</p>

//       <p id="demo"></p>

//       <p>See the difference before and after the button is clicked.</p>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';



function App() {
  const myArray = ["I", "love", "chocolate", "frogs"];
  const myList = myArray.map((item) => <h2>{item}</h2>);

  return (
    <div className="App">
      <h1>hi</h1>
      <p>{myList}</p>
    </div>
  );
}

export default App;
