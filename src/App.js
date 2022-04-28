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

      // let arr =[10,20,30,40,50];
      // arr.map((a,i) => console.log(a));

      // let intro=()=>{
      //   console.log("mansi mehta");
      // }
      //  intro()


        //array//


      //  let arr = [10,"mansi",20,30,40,50];
      //  console.log(arr[4]);

       //object//


      //  let obj ={
      //    id:10,
      //    age:20,
      //    per:30

      //  }
      //  console.log(obj.age);

      //push//

      //  let arr = [10,"mansi",20,30,40,50];
      //  arr.push(99);

      //  console.log(arr);

      //unshift//

      //  let arr = [10,"mansi",20,30,40,50];
      //  arr.unshift(23);
      //  console.log(arr);

      // pop //

      // let arr =[10,20,30,40,50];
      // arr.pop();
      // console.log(arr);

      //shift//

      // let arr =[10,20,30,40,50];
      // arr.shift();
      // console.log(arr);

    //splice//

    //    let arr =[10,20,30,40,50];
    //   arr.splice(3,0,99);
    //  console.log(arr);

      //tostring//

      //  let arr = [10,20,30,40,50];
      //  console.log(arr.toString());

    //some//
    // let arr = [10,20,30,40,50];
    // let res=arr.some((a)=>a>100);
    // console.log(res);

       //find//

      //  let arr = [10,20,30,40,50];
      //  let res=arr.find((a)=>a>10);
      //  console.log(res);

      //isarray//
      let arr=[10,20,30,40,50];
      let res = Array.isArray(arr);
      console.log(res);



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
