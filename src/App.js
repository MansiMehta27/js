import logo from './logo.svg';
import './App.css';

function App() {
      // let a = 10;
      // console.log(a);
      {
          // let a;
          // a=20;
          // console.log(a);
      }
      {
          // const b=40;
          // console.log(b);

      }
      // {
      //   const b;
      //   b=23;
      //   console.log(b);
      // }   //error

      {
        // let a=45;
        // a=a+2;
        // console.log(a);
      }

      let arr =[10,20,30,40,50];
      arr.map((a,i) => console.log(a));

      let intro=()=>{
        console.log("mansi mehta");
      }
      intro();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
             welcome to reacte
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
