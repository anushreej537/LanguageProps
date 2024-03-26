// import Abc from "./Child";
// import Child from "./Child";
// import {First,Second} from "./Child"
// import About from './components/about'
// const App=()=>{
//   return(
//     <>
//     <h1>this is react</h1>
//     <About/>
//     {/* <Second/> */}
//     {/* <Abc name="anushree" address="ujjian"/> */}
//     </>
//   )
// }
// export default App;

// import React from 'react';
// import Child from './Child';
// const App = () => {
//   return (
//     <>
//     <Child name="ANUSHREE" address="UJJAIN" />
//     </>
//   )
// }
// export default App;
<<<<<<< HEAD

// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios'
// const App = () => {
//   let [data,showdata]=useState([])
//   let [searchdata,searchpro]=useState({name:"",price:0,cat:"",cmp:""})
//   let [send,sendData]=useState({name:"",price:0,cat:"",cmp:""})
//   let [n,updaten]=useState([])
//   let change=(e)=>{
//     sendData({...send,[e.target.name]:e.target.value})
//   }
//   useEffect(()=>{
//     show()
//   })
//   async function show()
//   {
//     var res=await axios.get("https://restapiss.herokuapp.com/product/")
//     showdata(res.data)
//   }
//   async function sendinfo()
//   {
//     var res=await axios.post("https://restapiss.herokuapp.com/product/",send)
//     if(res.status===201)
//     {
//       alert("added successfully")
//     }
//   }
//   async function updateinfo()
//   {
//     var res=await axios.put(`https://restapiss.herokuapp.com/product/${send.id}/`,send)
//     if(res.status===200)
//     {
//       alert("updated")
//     }
//   }
//   async function search()
//   {
//     let res=await axios.get(`https://restapiss.herokuapp.com/product/${n}`)
//     searchpro(res.data)
//   }
//   return (
//     <>
//     <input type="number" value={n} onChange={(e)=>{
//       updaten(e.target.value)
//     }}/><button className='btn btn-success' onClick={search}>Search</button>
//     <h1>{searchdata.name}{searchdata.price}{searchdata.cat}{searchdata.cmp}</h1>
//     <center><h1 style={{backgroundColor:"blue",color:"white"}}>Product</h1></center>
//     <div className='row'>
//     <table className='table table-bordered table-hover text-center'>
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Price</th>
//           <th>Category</th>
//           <th>Company</th>

//         </tr>
//       </thead>
//       <tbody>
//         {data.map((v,i)=>{
//           return(
//             <tr key={v.id}>
//             <td>{v.id}</td>
//             <td>{v.name}</td>
//             <td>{v.price}</td>
//             <td>{v.cat}</td>
//             <td>{v.cmp}</td>
//             <td><button key={v.id} className="btn btn-danger" value={v.id} onClick={(e)=>{
//               async function del()
//               {
//                 var res=await axios.delete(`https://restapiss.herokuapp.com/product/${e.target.value}`)
//                 if(res.status===204)
//                 {
//                   alert("deleted successfully")
//                 }
//               }
//               del()
//             }}>Delete</button></td>
//             <td><button className='btn btn-warning'value={v} onClick={(e)=>{
//               sendData(v)
//             }}>Update</button></td>
//           </tr>
//           )
//         })}
//       </tbody>
//     </table>

//       <h1>{send.name}{send.price}{send.cat}{send.cmp}</h1>
//       <div className='col-sm-4'>
//     <table className='table table-bordered table-hover text-center'>
//         <tr>
//           <td>Name</td>
//           <td><input className='form-controls' type="text" name="name" value={send.name} onChange={change}/></td>
//         </tr>
//         <tr>
//           <td>Price</td>
//           <td><input className='form-controls' type="number" name="price" value={send.price} onChange={change} /></td>
//         </tr>
//         <tr>
//           <td>Category</td>
//           <td><input className='form-controls' type="text" name="cat" value={send.cat} onChange={change}/></td>
//         </tr>
//         <tr>
//           <td>Company</td>
//           <td><input className='form-controls' type="text" name="cmp" value={send.cmp} onChange={change}/></td>
//         </tr>
//         <tr>
//           <button className='btn btn-primary' onClick={sendinfo}>Send data</button>
//           <button className='btn btn-warning' onClick={updateinfo}>Update</button>
//         </tr>  
//     </table>
//     </div>
//     </div>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Comp1 from './components/Comp1'
// const App = () => {
//   let [data,updatedata]=useState("wscube")
//   return (
//     <>
//     <h1>Comp1</h1>
//     <Comp1 data={data}/>
//     </>
//   )
// }

// export default App

//useRef hook
// import React from 'react'
// import { useEffect } from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

// const App = () => {
//   let [input,setinput]=useState("")
//   let prevState=useRef(0)
//   const formhandle=(e)=>{
//     setinput(e.target.value)
//   }
//   useEffect(()=>{
//     prevState.current=input
//   })
//   return (
//     <>
//     <input value={input} type="text" onChange={formhandle}/>
//     <h1>Application has been randered {prevState.current} times jitni br useState mai change krege counter bdega</h1>
//     </>
//   )
// }
// export default App

// import React, { useState } from 'react'

// const App = () => {
//   let [n,update]=useState(0);
//   const change=()=>{
//     update(n++)
//   }
//   const change1=()=>{
//     update(n--)
//   }
//   return (
//     <>
//     <button onClick={change}>+</button>
//     <input type="number"  value={n}/>
//     <button onClick={change1}>-</button>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   let [n,update]=useState(0)
//   const change=(e)=>{
//     if(e.target.name==="+")
//     {
//       update(n++)
//     }
//     else{
//       update(n--)
//     }
//   }
//   return (
//     <>
//     <button name='+' onClick={change}>+</button>
//     <input type="number" value={n}/>
//     <button name='-' onClick={change}>-</button>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Child from'./components/Child'
// const App = () => {
//   let name="anushree"
//   return (
//     <>
//     <Child name={name}/>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import { createContext } from 'react';
// import Comp1 from './components/Comp1'
// let name;
// let course;
// const App = () => {
//     name=createContext()
//     course=createContext()
//   return (
//     <div>
//         <name.Provider value="ppoint">
//             <course.Provider value="pp">
//              <Comp1/>
//             </course.Provider>
//         </name.Provider>

//     </div>
//   )
// }
// export {name,course}
// export default App


// import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// const App = () => {
//   return (
//     <>
//     <table className='table table-bordered table-hover text-center table-primary'>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Course</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>Anushree</td>
//                 <td>Developer</td>
//             </tr>
//             <tr>
//                 <td>Anushree</td>
//                 <td>Developer</td>
//             </tr>
//             <tr>
//                 <td>Anushree</td>
//                 <td>Developer</td>
//             </tr>
//             <tr>
//                 <td>Anushree</td>
//                 <td>Developer</td>
//             </tr>
//             <tr>
//                 <td>Anushree</td>
//                 <td>Developer</td>
//             </tr>

//         </tbody>
//     </table>
//     </>
//   )
// }
// export default App


// import React, { useState } from 'react'
// const App = () => {
//     let [n, npro]=useState([]);
//     let [s, spro]=useState();
//     const del = (e) => {
//         console.log(e.target.value);
//     }
//   return (
//     <>
//     {n.map((v,i)=>{
//         return(
//             <>
//             <div key={i}>{v} <button key={i} value={v} onClick={del}>delete</button></div>
//             </>
//         )
//     })}
//     <input type="text" onChange={(e)=>{
//         spro(e.target.value)
//     }}/>
//     <button onClick={()=>{
//         npro([...n,s])
//         console.log(n)
//         localStorage.setItem('name',n)
//     }}>ADD</button>
//     </>
//   )
// }
// export default App


// import { useMemo } from 'react';
// import { useState } from 'react'
// // import '../App.css'

// function App(){
//     const [count,setcount]=useState(0);
//     const [name,setname]=useState('');
//     const expensivecalcu=(num)=>{
//         for(let i=0;i<100000000000;i++){}
//         return num;
//     }

//     const calculation=useMemo(()=>
//     expensivecalcu(count)
//     ,[name])
//     return (
//         <>
//         <button onClick={()=>setcount(count +1)}>increment</button>
//         <h1>count:{count}</h1>
//         <input onChange={(e)=>setname(e.target.value)}/>
//         <h1>Name:{name}</h1>
//         </>
//     )
// }
// export default App;

// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from "axios"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// const App = () => {
//     let [data,showdata]=useState([])
//     let [n,updaten]=useState()
//     let [send,senddata]=useState({name:"",price:0,cat:"",cmp:""})
//     useEffect(()=>{
//         show()
//     })
//     const change=(e)=>{
//         senddata({...send,[e.target.name]:e.target.value})
//     }
//     async function show()
//     {
//         var res=await axios.get("https://restapiss.herokuapp.com/product/")
//         console.log(res)
//         showdata(res.data);
//     }
//     async function sendinfo()
//     {
//         var res=await axios.post("https://restapiss.herokuapp.com/product/",send)
//         if(res.status===201)
//         {
//             alert("added successfully")
//         }
//     }
//     async function updateinfo()
//     {
//         console.log(send.id)
//         let res=await axios.put(`https://restapiss.herokuapp.com/product/${send.id}/`,send)
//         if(res.status===200)
//         {
//             alert("updated")
//         }
//     }
//   return (
//     <>
//     <h1 align="center">Products</h1>
//     <input type="number" value={n} onChange={(e)=>{
//         updaten(e.target.value)
//     }}/>``
//     <table className='table table-bordered table-hover table-striped'>
//         <thead className='bg-primary fw-border fs-3'>
//             <tr>
//                 <th>Id</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Category</th>
//                 <th>Company</th>
//             </tr>
//         </thead>
//         <tbody>
//             {data.map((v,i)=>{
//                 return(
//                 <tr key={v.id}>
//                     <td>{v.id}</td>
//                     <td>{v.name}</td>
//                     <td>{v.price}</td>
//                     <td>{v.cat}</td>
//                     <td>{v.cmp}</td>
//                     <td><button key={v.id} className="btn btn-danger" value={v.id} onClick={(e)=>{
//                         async function del()
//                         {
//                             var res=await axios.delete(`https://restapiss.herokuapp.com/product/${e.target.value}`)
//                             if(res.status===204)
//                             {
//                                 alert("deleted successfully")
//                             }
//                         }
//                         del()
//                     }}>Delete</button></td>
//                     <td><button key={v} className="btn btn-warning" onClick={(e)=>{
//                         senddata(v)
//                     }}>Update</button></td>
//                 </tr>
//                 )
//             })}
//         </tbody>
//     </table>
//     <div className='row'>
//         <h1>{send.name}{send.price}{send.cat}{send.cmp}</h1>
//         <div className='col-sm-4'>
//             <table className='table table-bordered table-hover text-center'>
//                 <tr>
//                     <td>Name</td>
//                     <td><input className='form-control' type="text" name="name" value={send.name} onChange={change}/></td>
//                 </tr>
//                 <tr>
//                     <td>Price</td>
//                     <td><input className='form-control' type="text" name="price" value={send.price} onChange={change}/></td>
//                 </tr>
//                 <tr>
//                     <td>Category</td>
//                     <td><input className='form-control' type="text" name="cat" value={send.cat} onChange={change}/></td>
//                 </tr>
//                 <tr>
//                     <td>Company</td>
//                     <td><input className='form-control' type="text" name="cmp" value={send.cmp} onChange={change}/></td>
//                 </tr>
//                 <tr>
//                 <button className='btn btn-primary' onClick={sendinfo}>send data</button>
//                 <button className='btn btn-warning' onClick={updateinfo}>update</button>
//                 </tr>
//             </table>

//         </div>
//     </div>
//     </>
//   )
// }

// export default App

// import React from 'react'
// const App = () => {
//     let name="anushree"
//   return (
//     <>
//     <h1>{name}</h1>
//     </>
//   )
// }
// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// import React from 'react'
// import Child from './components/Child'
// const App = () => {
//   return (
//     <>
//     <h1>App component is running</h1>
//     <h1><Child/></h1>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Child from './components/Child'
// const App = () => {
//   return (
//     <>
//     <Child name="anushree" fees={69999} course="python" />

//     </>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//     let [n,updaten]=useState(0)
//     const change=()=>{
//         updaten(n++)
//     }
//     const change1=()=>{
//         updaten(n--)
//     }
//   return (
//     <>
//     <button onClick={change}>+</button>
//     <input type="number" value={n}/>
//     <button onClick={change1}>-</button>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//     let [n,updaten]=useState(0)
//     const change=(e)=>{
//         if(e.target.name==="+")
//         {
//             updaten(n++)
//         }
//         else{
//             updaten(n--)
//         }
//     }
//   return (
//     <>
//     <button name="+" onClick={change}>+</button>               
//     <input type="number" value={n}/>
//     <button name="-" onClick={change}>-</button>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//     let [n,updaten]=useState()
//     let [r,updater]=useState(0)
//     let [e,updatee]=useState()
//     const change=(e)=>{
//         if(e.target.name==="name")
//         {
//             updaten(e.target.value)
//         }
//         else if(e.target.name==="roll")
//         {
//             updater(e.target.value)
//         }
//         else{
//             updatee(e.target.value)
//         }
//     }
//   return (
//     <>
//     <h1>{n} {r} {e}</h1>
//     Name<input type="text" onChange={change} name="name" value={n}/>
//     Roll<input type="number" onChange={change} name="roll" value={r}/>
//     Email<input type="email" onChange={change} name="email" value={e}/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Comp1 from './components/Comp1'
// import { createContext } from 'react';
// let name;
// let course;
// const App = () => {
// name=createContext()
// course=createContext()
//   return (
//     <>
//     <name.Provider value="point">
//         <course.Provider value="dev">
//             <Comp1/>
//         </course.Provider>
//     </name.Provider>
//     </>
//   )
// }
// export {name,course}
// export default App

// import React from 'react'
// // import Child from './components/Child'
// import Child from './components/Child'
// const App = () => {
//   return (
//     <>
//     <Child data="anushree"/>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import './App.css'
// const App = () => {
//   let [n,updaten]=useState(0);
//   return (
//     <>
//     <h1>{n}</h1>
//     <button onClick={()=>{updaten(n++)}}>increment</button>
//     </>
//   )
// }
// export default App


// import React,{useEffect, useState} from 'react'

// const App = () => {
//   let [n,updaten]=useState(0)
//   // useEffect(()=>{
//   //   document.title=n;//run on every render
//   // })

//   useEffect(()=>{
//     document.title=n; //run only first time
//   },[n])
//   return (
//     <>
//     <h1>{n}</h1>
//     <button onClick={()=>{updaten(n++)}}>+</button>
//     <button  onClick={()=>{updaten(n--)}}>-</button>

//     </>
//   )
// }

// export default App


//project size of the window
// import React, { useState } from 'react'
// import './App.css'
// const App = () => {
//   const [widthcount,updatewidth]=useState(0)
//   return (
//     <>
//       <div className='container'>
//         <h1>My window size is <span>{widthcount}</span></h1>
//       </div>
//     </>
//   )
// }

// export default App;

// import React from 'react'
// import './App.css'
// import { useEffect } from 'react';
// import { useState } from 'react'

// const App = () => {
//     let [winwidth,updatewinwid]=useState(window.screen.width);

//     const windowScreenWidth=()=>{
//         updatewinwid(()=> window.innerWidth)
//     }

//     useEffect(()=>{
//         window.addEventListener('resize',windowScreenWidth);
//         return()=>{
//             window.removeEventListener('resize',windowScreenWidth)
//         }
//     })
//   return (
//     <>
//     <div className='container'>
//         <h2>The size of the window is {winwidth}</h2>
//     </div>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import { useReducer } from 'react'
// import reducer from './reducer'
// const intialvalue=0;
// const App = () => {
//     let [count,dispatch]=useReducer(reducer,intialvalue)
//   return (
//     <>
//     <div className='container'>
//         <button onClick={()=>dispatch({type:'INC'})}>+</button>
//         <h1>{count}</h1>
//         <button onClick={()=>dispatch({type:'DEC'})}>-</button>
//     </div>
//     </>
//   )
// }

// export default App

// import React from "react";
// import { useReducer } from "react";
// import reducer from "./reducer";
// const initialValue = 0;

// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialValue);

//   return (
//     <>

//         <div className="container">
//           <button onClick={() => dispatch({ type: "INC" })}>
//             +
//           </button>
//           <h1>{count}</h1>
//           <button onClick={() => dispatch({ type: "DEC" })}>
//             -
//           </button>
//         </div>
//     </>
//   );
// };
// export default App;


// Today  26 march
// import About from './components/about'
// import Home from './components/home'
// const App=()=>{
//     return(
//         <>
//         <h1>heyy..</h1>
//         <About/>
//         <Home/>
//         </>
//     )
// }

// export default App;

// import React from "react";
// import CompA from "./CompA";

// const App =()=>{
//     return (
//         <>
//         <CompA/>
//         </>
//     )
// }
// export default App;

// ContextAPI
// import React, { createContext } from 'react'
// import CompA from './CompA'

// const firstName=createContext();
// const lastName=createContext();
// const App = () => {
//   return (
//     <>
//     <firstName.Provider value={'anushree'}>
//       <lastName.Provider value={'joshi'}>
//         <CompA/>
//       </lastName.Provider>
//     </firstName.Provider>

//     </>
//   )
// }
// export {firstName,lastName};
// export default App;

// import React, {createContext} from "react";
// import CompA from "./CompA";

// const fname = createContext();
// const lname = createContext();
// const App =()=>{
//     return (
//         <>
//         <fname.Provider value={'Anushree'}>
//             <lname.Provider value={'joshi'}>
//                 <CompA/>
//             </lname.Provider>
//         </fname.Provider>
//         </>
//     )
// }

// export {fname,lname};
// export default App;


//PROPS
import React from "react";
import CompA from './CompA';
const App = () => {
    let name ='anushree'
        return (
            <>
            <CompA name={name}/>
            </>
        )
}

export default App;
=======

// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios'
// const App = () => {
//   let [data,showdata]=useState([])
//   let [searchdata,searchpro]=useState({name:"",price:0,cat:"",cmp:""})
//   let [send,sendData]=useState({name:"",price:0,cat:"",cmp:""})
//   let [n,updaten]=useState([])
//   let change=(e)=>{
//     sendData({...send,[e.target.name]:e.target.value})
//   }
//   useEffect(()=>{
//     show()
//   })
//   async function show()
//   {
//     var res=await axios.get("https://restapiss.herokuapp.com/product/")
//     showdata(res.data)
//   }
//   async function sendinfo()
//   {
//     var res=await axios.post("https://restapiss.herokuapp.com/product/",send)
//     if(res.status===201)
//     {
//       alert("added successfully")
//     }
//   }
//   async function updateinfo()
//   {
//     var res=await axios.put(`https://restapiss.herokuapp.com/product/${send.id}/`,send)
//     if(res.status===200)
//     {
//       alert("updated")
//     }
//   }
//   async function search()
//   {
//     let res=await axios.get(`https://restapiss.herokuapp.com/product/${n}`)
//     searchpro(res.data)
//   }
//   return (
//     <>
//     <input type="number" value={n} onChange={(e)=>{
//       updaten(e.target.value)
//     }}/><button className='btn btn-success' onClick={search}>Search</button>
//     <h1>{searchdata.name}{searchdata.price}{searchdata.cat}{searchdata.cmp}</h1>
//     <center><h1 style={{backgroundColor:"blue",color:"white"}}>Product</h1></center>
//     <div className='row'>
//     <table className='table table-bordered table-hover text-center'>
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Price</th>
//           <th>Category</th>
//           <th>Company</th>

//         </tr>
//       </thead>
//       <tbody>
//         {data.map((v,i)=>{
//           return(
//             <tr key={v.id}>
//             <td>{v.id}</td>
//             <td>{v.name}</td>
//             <td>{v.price}</td>
//             <td>{v.cat}</td>
//             <td>{v.cmp}</td>
//             <td><button key={v.id} className="btn btn-danger" value={v.id} onClick={(e)=>{
//               async function del()
//               {
//                 var res=await axios.delete(`https://restapiss.herokuapp.com/product/${e.target.value}`)
//                 if(res.status===204)
//                 {
//                   alert("deleted successfully")
//                 }
//               }
//               del()
//             }}>Delete</button></td>
//             <td><button className='btn btn-warning'value={v} onClick={(e)=>{
//               sendData(v)
//             }}>Update</button></td>
//           </tr>
//           )
//         })}
//       </tbody>
//     </table>

//       <h1>{send.name}{send.price}{send.cat}{send.cmp}</h1>
//       <div className='col-sm-4'>
//     <table className='table table-bordered table-hover text-center'>
//         <tr>
//           <td>Name</td>
//           <td><input className='form-controls' type="text" name="name" value={send.name} onChange={change}/></td>
//         </tr>
//         <tr>
//           <td>Price</td>
//           <td><input className='form-controls' type="number" name="price" value={send.price} onChange={change} /></td>
//         </tr>
//         <tr>
//           <td>Category</td>
//           <td><input className='form-controls' type="text" name="cat" value={send.cat} onChange={change}/></td>
//         </tr>
//         <tr>
//           <td>Company</td>
//           <td><input className='form-controls' type="text" name="cmp" value={send.cmp} onChange={change}/></td>
//         </tr>
//         <tr>
//           <button className='btn btn-primary' onClick={sendinfo}>Send data</button>
//           <button className='btn btn-warning' onClick={updateinfo}>Update</button>
//         </tr>  
//     </table>
//     </div>
//     </div>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Comp1 from './components/Comp1'
// const App = () => {
//   let [data,updatedata]=useState("wscube")
//   return (
//     <>
//     <h1>Comp1</h1>
//     <Comp1 data={data}/>
//     </>
//   )
// }

// export default App

//useRef hook
// import React from 'react'
// import { useEffect } from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

// const App = () => {
//   let [input,setinput]=useState("")
//   let prevState=useRef(0)
//   const formhandle=(e)=>{
//     setinput(e.target.value)
//   }
//   useEffect(()=>{
//     prevState.current=input
//   })
//   return (
//     <>
//     <input value={input} type="text" onChange={formhandle}/>
//     <h1>Application has been randered {prevState.current} times jitni br useState mai change krege counter bdega</h1>
//     </>
//   )
// }
// export default App

// import React, { useState } from 'react'

// const App = () => {
//   let [n,update]=useState(0);
//   const change=()=>{
//     update(n++)
//   }
//   const change1=()=>{
//     update(n--)
//   }
//   return (
//     <>
//     <button onClick={change}>+</button>
//     <input type="number"  value={n}/>
//     <button onClick={change1}>-</button>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   let [n,update]=useState(0)
//   const change=(e)=>{
//     if(e.target.name==="+")
//     {
//       update(n++)
//     }
//     else{
//       update(n--)
//     }
//   }
//   return (
//     <>
//     <button name='+' onClick={change}>+</button>
//     <input type="number" value={n}/>
//     <button name='-' onClick={change}>-</button>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Child from'./components/Child'
// const App = () => {
//   let name="anushree"
//   return (
//     <>
//     <Child name={name}/>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import { createContext } from 'react';
// import Comp1 from './components/Comp1'
// let name;
// let course;
// const App = () => {
//     name=createContext()
//     course=createContext()
//   return (
//     <div>
//         <name.Provider value="ppoint">
//             <course.Provider value="pp">
//              <Comp1/>
//             </course.Provider>
//         </name.Provider>

//     </div>
//   )
// }
// export {name,course}
// export default App


// import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// const App = () => {
//   return (
//     <>
//     <table className='table table-bordered table-hover text-center table-primary'>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Course</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>Anushree</td>
//                 <td>Developer</td>
//             </tr>
//             <tr>
//                 <td>Anushree</td>
//                 <td>Developer</td>
//             </tr>
//             <tr>
//                 <td>Anushree</td>
//                 <td>Developer</td>
//             </tr>
//             <tr>
//                 <td>Anushree</td>
//                 <td>Developer</td>
//             </tr>
//             <tr>
//                 <td>Anushree</td>
//                 <td>Developer</td>
//             </tr>

//         </tbody>
//     </table>
//     </>
//   )
// }
// export default App


// import React, { useState } from 'react'
// const App = () => {
//     let [n, npro]=useState([]);
//     let [s, spro]=useState();
//     const del = (e) => {
//         console.log(e.target.value);
//     }
//   return (
//     <>
//     {n.map((v,i)=>{
//         return(
//             <>
//             <div key={i}>{v} <button key={i} value={v} onClick={del}>delete</button></div>
//             </>
//         )
//     })}
//     <input type="text" onChange={(e)=>{
//         spro(e.target.value)
//     }}/>
//     <button onClick={()=>{
//         npro([...n,s])
//         console.log(n)
//         localStorage.setItem('name',n)
//     }}>ADD</button>
//     </>
//   )
// }
// export default App


// import { useMemo } from 'react';
// import { useState } from 'react'
// // import '../App.css'

// function App(){
//     const [count,setcount]=useState(0);
//     const [name,setname]=useState('');
//     const expensivecalcu=(num)=>{
//         for(let i=0;i<100000000000;i++){}
//         return num;
//     }

//     const calculation=useMemo(()=>
//     expensivecalcu(count)
//     ,[name])
//     return (
//         <>
//         <button onClick={()=>setcount(count +1)}>increment</button>
//         <h1>count:{count}</h1>
//         <input onChange={(e)=>setname(e.target.value)}/>
//         <h1>Name:{name}</h1>
//         </>
//     )
// }
// export default App;

// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from "axios"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// const App = () => {
//     let [data,showdata]=useState([])
//     let [n,updaten]=useState()
//     let [send,senddata]=useState({name:"",price:0,cat:"",cmp:""})
//     useEffect(()=>{
//         show()
//     })
//     const change=(e)=>{
//         senddata({...send,[e.target.name]:e.target.value})
//     }
//     async function show()
//     {
//         var res=await axios.get("https://restapiss.herokuapp.com/product/")
//         console.log(res)
//         showdata(res.data);
//     }
//     async function sendinfo()
//     {
//         var res=await axios.post("https://restapiss.herokuapp.com/product/",send)
//         if(res.status===201)
//         {
//             alert("added successfully")
//         }
//     }
//     async function updateinfo()
//     {
//         console.log(send.id)
//         let res=await axios.put(`https://restapiss.herokuapp.com/product/${send.id}/`,send)
//         if(res.status===200)
//         {
//             alert("updated")
//         }
//     }
//   return (
//     <>
//     <h1 align="center">Products</h1>
//     <input type="number" value={n} onChange={(e)=>{
//         updaten(e.target.value)
//     }}/>``
//     <table className='table table-bordered table-hover table-striped'>
//         <thead className='bg-primary fw-border fs-3'>
//             <tr>
//                 <th>Id</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Category</th>
//                 <th>Company</th>
//             </tr>
//         </thead>
//         <tbody>
//             {data.map((v,i)=>{
//                 return(
//                 <tr key={v.id}>
//                     <td>{v.id}</td>
//                     <td>{v.name}</td>
//                     <td>{v.price}</td>
//                     <td>{v.cat}</td>
//                     <td>{v.cmp}</td>
//                     <td><button key={v.id} className="btn btn-danger" value={v.id} onClick={(e)=>{
//                         async function del()
//                         {
//                             var res=await axios.delete(`https://restapiss.herokuapp.com/product/${e.target.value}`)
//                             if(res.status===204)
//                             {
//                                 alert("deleted successfully")
//                             }
//                         }
//                         del()
//                     }}>Delete</button></td>
//                     <td><button key={v} className="btn btn-warning" onClick={(e)=>{
//                         senddata(v)
//                     }}>Update</button></td>
//                 </tr>
//                 )
//             })}
//         </tbody>
//     </table>
//     <div className='row'>
//         <h1>{send.name}{send.price}{send.cat}{send.cmp}</h1>
//         <div className='col-sm-4'>
//             <table className='table table-bordered table-hover text-center'>
//                 <tr>
//                     <td>Name</td>
//                     <td><input className='form-control' type="text" name="name" value={send.name} onChange={change}/></td>
//                 </tr>
//                 <tr>
//                     <td>Price</td>
//                     <td><input className='form-control' type="text" name="price" value={send.price} onChange={change}/></td>
//                 </tr>
//                 <tr>
//                     <td>Category</td>
//                     <td><input className='form-control' type="text" name="cat" value={send.cat} onChange={change}/></td>
//                 </tr>
//                 <tr>
//                     <td>Company</td>
//                     <td><input className='form-control' type="text" name="cmp" value={send.cmp} onChange={change}/></td>
//                 </tr>
//                 <tr>
//                 <button className='btn btn-primary' onClick={sendinfo}>send data</button>
//                 <button className='btn btn-warning' onClick={updateinfo}>update</button>
//                 </tr>
//             </table>

//         </div>
//     </div>
//     </>
//   )
// }

// export default App

// import React from 'react'
// const App = () => {
//     let name="anushree"
//   return (
//     <>
//     <h1>{name}</h1>
//     </>
//   )
// }
// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// import React from 'react'
// import Child from './components/Child'
// const App = () => {
//   return (
//     <>
//     <h1>App component is running</h1>
//     <h1><Child/></h1>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Child from './components/Child'
// const App = () => {
//   return (
//     <>
//     <Child name="anushree" fees={69999} course="python" />

//     </>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//     let [n,updaten]=useState(0)
//     const change=()=>{
//         updaten(n++)
//     }
//     const change1=()=>{
//         updaten(n--)
//     }
//   return (
//     <>
//     <button onClick={change}>+</button>
//     <input type="number" value={n}/>
//     <button onClick={change1}>-</button>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//     let [n,updaten]=useState(0)
//     const change=(e)=>{
//         if(e.target.name==="+")
//         {
//             updaten(n++)
//         }
//         else{
//             updaten(n--)
//         }
//     }
//   return (
//     <>
//     <button name="+" onClick={change}>+</button>               
//     <input type="number" value={n}/>
//     <button name="-" onClick={change}>-</button>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//     let [n,updaten]=useState()
//     let [r,updater]=useState(0)
//     let [e,updatee]=useState()
//     const change=(e)=>{
//         if(e.target.name==="name")
//         {
//             updaten(e.target.value)
//         }
//         else if(e.target.name==="roll")
//         {
//             updater(e.target.value)
//         }
//         else{
//             updatee(e.target.value)
//         }
//     }
//   return (
//     <>
//     <h1>{n} {r} {e}</h1>
//     Name<input type="text" onChange={change} name="name" value={n}/>
//     Roll<input type="number" onChange={change} name="roll" value={r}/>
//     Email<input type="email" onChange={change} name="email" value={e}/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Comp1 from './components/Comp1'
// import { createContext } from 'react';
// let name;
// let course;
// const App = () => {
// name=createContext()
// course=createContext()
//   return (
//     <>
//     <name.Provider value="point">
//         <course.Provider value="dev">
//             <Comp1/>
//         </course.Provider>
//     </name.Provider>
//     </>
//   )
// }
// export {name,course}
// export default App

// import React from 'react'
// // import Child from './components/Child'
// import Child from './components/Child'
// const App = () => {
//   return (
//     <>
//     <Child data="anushree"/>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import './App.css'
// const App = () => {
//   let [n,updaten]=useState(0);
//   return (
//     <>
//     <h1>{n}</h1>
//     <button onClick={()=>{updaten(n++)}}>increment</button>
//     </>
//   )
// }
// export default App


// import React,{useEffect, useState} from 'react'

// const App = () => {
//   let [n,updaten]=useState(0)
//   // useEffect(()=>{
//   //   document.title=n;//run on every render
//   // })

//   useEffect(()=>{
//     document.title=n; //run only first time
//   },[n])
//   return (
//     <>
//     <h1>{n}</h1>
//     <button onClick={()=>{updaten(n++)}}>+</button>
//     <button  onClick={()=>{updaten(n--)}}>-</button>

//     </>
//   )
// }

// export default App


//project size of the window
// import React, { useState } from 'react'
// import './App.css'
// const App = () => {
//   const [widthcount,updatewidth]=useState(0)
//   return (
//     <>
//       <div className='container'>
//         <h1>My window size is <span>{widthcount}</span></h1>
//       </div>
//     </>
//   )
// }

// export default App;

// import React from 'react'
// import './App.css'
// import { useEffect } from 'react';
// import { useState } from 'react'

// const App = () => {
//     let [winwidth,updatewinwid]=useState(window.screen.width);

//     const windowScreenWidth=()=>{
//         updatewinwid(()=> window.innerWidth)
//     }

//     useEffect(()=>{
//         window.addEventListener('resize',windowScreenWidth);
//         return()=>{
//             window.removeEventListener('resize',windowScreenWidth)
//         }
//     })
//   return (
//     <>
//     <div className='container'>
//         <h2>The size of the window is {winwidth}</h2>
//     </div>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import { useReducer } from 'react'
// import reducer from './reducer'
// const intialvalue=0;
// const App = () => {
//     let [count,dispatch]=useReducer(reducer,intialvalue)
//   return (
//     <>
//     <div className='container'>
//         <button onClick={()=>dispatch({type:'INC'})}>+</button>
//         <h1>{count}</h1>
//         <button onClick={()=>dispatch({type:'DEC'})}>-</button>
//     </div>
//     </>
//   )
// }

// export default App

// import React from "react";
// import { useReducer } from "react";
// import reducer from "./reducer";
// const initialValue = 0;

// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialValue);

//   return (
//     <>

//         <div className="container">
//           <button onClick={() => dispatch({ type: "INC" })}>
//             +
//           </button>
//           <h1>{count}</h1>
//           <button onClick={() => dispatch({ type: "DEC" })}>
//             -
//           </button>
//         </div>
//     </>
//   );
// };
// export default App;


// Today  26 march
// import About from './components/about'
// import Home from './components/home'
// const App=()=>{
//     return(
//         <>
//         <h1>heyy..</h1>
//         <About/>
//         <Home/>
//         </>
//     )
// }

// export default App;

// import React from "react";
// import CompA from "./CompA";

// const App =()=>{
//     return (
//         <>
//         <CompA/>
//         </>
//     )
// }
// export default App;

// ContextAPI
// import React, { createContext } from 'react'
// import CompA from './CompA'

// const firstName=createContext();
// const lastName=createContext();
// const App = () => {
//   return (
//     <>
//     <firstName.Provider value={'anushree'}>
//       <lastName.Provider value={'joshi'}>
//         <CompA/>
//       </lastName.Provider>
//     </firstName.Provider>

//     </>
//   )
// }
// export {firstName,lastName};
// export default App;

// import React, {createContext} from "react";
// import CompA from "./CompA";

// const fname = createContext();
// const lname = createContext();
// const App =()=>{
//     return (
//         <>
//         <fname.Provider value={'Anushree'}>
//             <lname.Provider value={'joshi'}>
//                 <CompA/>
//             </lname.Provider>
//         </fname.Provider>
//         </>
//     )
// }

// export {fname,lname};
// export default App;
>>>>>>> 5fe5f1996c41762a044648557f131812db6ef6cf
