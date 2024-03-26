// import React,{createContext} from "react";
// import { Data } from "./Data";
// import Lang from "./components/Lang";
// const App=()=>{
//     return(
//         <>
//         <h1>App components is running</h1>
//         {
//             Data.map(function(v){
//                 console.log(v)
//             return <Lang name={v.name} duration={v.duration} fees={v.fees} image={v.img} />
//         })
//        }
//     </> 
//     )
// }
// export default App;

import React from "react";
import Data from './Data';
import Lang from "./components/Lang";


const App=()=>{
    return (
        <>
        {Data.map(function(v){
            return <Lang name={v.name} duration={v.duration} fees={v.fees} />
        })}
        </>
    )

}
export default App;