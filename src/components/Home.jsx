//import { useState } from "react"

{/*export default function Home (props){
    return (
        <>

        <h2>Home page</h2>
       __ <h3>wellcome {props.name} {props.age}</h3>
            <ul>
                <li>Login in</li>
                <li>Sign up</li>

            </ul>
        </>
    )
}*/}

// export default function Home (){
//     return (
//         <>

//         <h2>Home page</h2>
//             <ul>
//                 <li>Login in</li>
//                 <li>Sign up</li>

//             </ul>
//         </>
//     )
// }
import { useState } from "react"
export default function Home(){
    // const [count,setcount] =useState(0)
    // const incCount = () => {
    //     setcount((prev) => prev + 1) 
    //      setcount((prev) => prev + 1) 
    //       setcount((prev) => prev + 1) 
    //       // setcount( count + 1) 
    //        // setcount( count + 1) 
    //         // setcount( count + 1) 
    //         //worng way
    //          // setcount( count++)
    //          // // setcount( count += 1)  
   

   // }
    const [isShow,setShow] = useState(true)

    return (
        <>
        {/* <h1>useState - Hook </h1>
        <h3>{count}</h3>
        <button onClick={incCount}>Inc</button> */}
        <h1>useState - Hook </h1>
         <button onClick={()=> setShow(!isShow)}>
            {isShow ? "Hide" : "show"}
         </button>
         <h1>{isShow && "Holo"}</h1>
        </>
    )
}