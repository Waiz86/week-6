import { useState } from "react";
import { useEffect } from 'react';
import './App.css';

// const App = () => {
//   const [zoomAnimal, setZooAnimal] =useState([]);
//   const [error, setError] = useState(null);

//   useEffect(()=>{
//     const fetchData =async ()=> {
//       try {
//         const response = await fetch ("https://zoo-animal-api.herokuapp.com/animals/rand/10"  
//         );
//         if (!response.ok){
//           throw new Error(response.statusText)
//         }
//         const data = await response.json();
//         setZooAnimal(data);
//         console.log(data);
//       } catch (error) { 
//         console.log(error);
//         setError("Could not fetch the data");
//     }
//   };
//     fetchData();
//   },[])

 
//   return (  

//       <div className="App">
//         <h1>Fetch API</h1>
//         {error && <p>{error}</p>}
//         {zoomAnimal.map((animal) => (
//           <div key ={animal.id}>
//           <h3>{animal.name}</h3>  
//             <img src={animal.image_link} alt="animal"></img>
//           </div>                     
//         ))}
//       </div>
//   );
// };

const App = () => {
  const [users, setUsers] =useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const getUsers =async ()=> {
      try {
        const response = await fetch ("https://fakestoreapi.com/products"  
        );
        if (!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) { 
        console.log(error);
        setError("Could not fetch the data");
    }
  };
    getUsers();
  },[])

 
  return (  

      <div className="App">
        <h1>Waiz clothing Store</h1>
        {error && <p>{error}</p>}
        {users.map((curElem) => (
          <div key ={curElem.id}>
          <h3>{curElem.title}</h3>  
          <p>{curElem.price}</p>
          <h4>{curElem.description}</h4>
          <img src={curElem.image} alt="Men clothing"></img>
          <p> {curElem.rating.rate}</p>
      </div> 
  ))}
      </div>
  );
};





export default App;


