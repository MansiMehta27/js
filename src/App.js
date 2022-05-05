import logo from './logo.svg';
import './App.css';

function App() {
 
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
 

    let obj = {
     id:10,
     name:"mansi"
    };

   let obj1={...obj};
   console.log(obj1);
  

   let obj2={
     ...obj,
     place:"surat",
     name:"meera"
   };
   console.log(obj2);



   let {id,name}=obj;
   console.log(id,name);

  

   let abc = data
  .filter((d, i) => d.expiry >= 2022)
  .reduce((acc, d, i) => acc + d.price, 0);

  console.log(abc);

return (
    <>
      <table border="1">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>price</th>
          <th>quantity</th>
          <th>expiry</th>
          <th>Total</th>
          
         
        
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
               {index===0 ? <td rowspan={data.length}>{abc}</td>:null}
                
            </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default App;

