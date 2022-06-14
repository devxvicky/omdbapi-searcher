// import React, { useEffect, useState } from "react"

// const AsyncAwait = () => {

//   const [users, setUsers] = useState([])

//   const fetchData = async () => {

//     const response = await fetch("https://jsonplaceholder.typicode.com/todos")

//     const data = await response.json()

//     setUsers(data)

//     console.log(data)

//   }

//   useEffect(() => {

//     fetchData()

//   }, [])

//   return (

//     <div>

//         <div className="">

//           {users.map(usersss => (

//             <div>
//             <h4 key={usersss.id}>{usersss.title}</h4>
//             </div>

//           ))}

//         </div>

//     </div>

//   )

// }

// export default AsyncAwait

// import React, {useState, useEffect} from "react";

// const Api = () => {
//     const [apiData, setApiData] = useState([])

//     const fetchData = async () => {
//         const data = await fetch('https://jsonplaceholder.typicode.com/users')
//         const dataJ = await data.json()
//         setApiData(dataJ)
//         console.log(dataJ)
//     }

//         useEffect(() => {
//             fetchData()
//         }, [])

//         return (
//             <>
//             <div>
//                 {apiData.map(todos => (
//                     <div className="container border-2 border-rose-500 mx-auto flex">
//                         <h3 className=" border-2 border-yellow-300" key={todos.id}>{todos.username}</h3>
//                     </div>
//                 )

//                 )}
//             </div>
//             </>
//         )
// }

// export default Api;

import React, { useEffect, useState } from 'react';

const Api = () => {
  const [term, setTerm] = useState('Avengers');
  const [display, setDisplay] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `http://www.omdbapi.com?apikey=b6003d8a&s=${term}`
    );
    const dataJ = await data.json();
    const dataM = dataJ.Search;
    setDisplay(dataM);
    console.log(dataM);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      fetchData();
    }
  };

  return (
    <div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-6xl text-red-500 my-10">OMDB-api</p>
        <p className="text-xl text-gray-500">
          Simple application to search Movies using OMDB api.
        </p>
      </div>
      <div className="container mx-auto mt-10 flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter movie name"
          className="border-2 p-2"
          onChange={(e) => setTerm(e.target.value)}
          onKeyDown={handleKeypress}
        ></input>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-3 gap-4 w-full h-screen ">
        {display?.length > 0 ? (
          display.map((movies) => (
            <div className="">
              <img src={movies.Poster} className="" />
              <h3 className="text-3xl text-red-500">{movies.Title}</h3>
              <h3 className="">{movies.Year}</h3>
            </div>
          ))
        ) : (
          <div className="text-4xl text-red-400">"No Movies found"</div>
        )}
      </div>
    </div>
  );
};

export default Api;
