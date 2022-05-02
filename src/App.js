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

  // let arr=[10,20,30,40,50];
  // let res = Array.isArray(arr);
  // console.log(res);

  //map//
  // const numbers = [1, 2, 3, 4];
  // const doubled = numbers.map(item => item * 2);
  // console.log(doubled); // [2, 4, 6, 8]

  //filter//

  //map//

  // let array =[
  //   {id:101,name:"binal",quantity: 25,price: 150,expiry: 2022,status: true},
  //   {id:102,name:"Abacavir",quantity: 20,price: 200,expiry: 2024,status: true},
  //   {id:103,name:"Eltrombopag",quantity: 35,price: 250,expiry: 2025,status: false},
  //   {id:104,name:"'Meloxicam'",quantity: 40,price: 300,expiry: 2026,status: true},
  //   {id:105,name:"biAllopurinol",quantity: 45,price: 450,expiry: 2027,status: false},

  // ];
  // let map = array.map(x=>console.log(x.id,x.quantity,x.price,x.expiry,x.status));

  //filter employe//

  //   function canVote(expiry) {
  //     return expiry >= 300;
  // }

  // function func() {
  //     let filtered = [2020,2021,2023,2024,2025].filter(canVote);
  //    console.log(filtered);
  // }
  // func();




  //filter//
  //   function canVote(salary) {
  //     return price >= 300;
  //  }

  // function func() {
  //     let filtered = [200,250,300,350,400].filter(canVote);
  //    console.log(filtered);
  // }
  // func();

  //reduces//
  // let array = [20000,30000,40000,45000,50000];
  // let ini = 0;
  // let sum = array.reduce(
  //   (pre,cur)=>pre+cur,
  //   ini
  // );
  //  console.log(sum);


  // let array = [200,300,400,450,650];
  // let ini = 0;
  // let sum = array.reduce(
  // (pre,cur)=>pre+cur,
  //  ini
  //  );
  //   console.log(sum);


  const data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];
  //map function//


  // data.map((value,index)=>console.log(value.id,value.name));

  // //filterdata function//

  // let  filterdata=data.filter((d,i)=>d.expiry>=2022);
  // console.log(filterdata);

  // //reduce function//

  // let ans =filterdata.reduce((acc,d,i)=>acc+d.price,0);
  // console.log(ans);



  // filter&reduces//

  let abc = data
    .filter((d, i) => d.expiry >= 2022)
    .reduce((acc, d, i) => acc + d.price, 0);

  console.log(abc);



  //reduces bounse//


  return (
    <>
      <table>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>price</th>
          <th>quantity</th>
          <th>expiry</th>
          <th>total</th>
         

          <th rowspan="5">1200</th>
        </tr>

      


        {
          data.map((value, index) => {
            return (
          <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.quantity}</td>
                <td>{value.expiry}</td>
                
            </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default App;

