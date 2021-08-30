import {useState} from "react";

// const Hello = () => {
//     function showName() {
//         console.log('mike')
//     }
//     function showAge(age){
//         console.log(age)
//     }
//     function showText(txt){
//         console.log(txt)
//     }
//     return (
//         <>
//             <h1>Hello</h1>
//             <button onClick={showName}>Show name</button>
//             <button onClick={()=>{
//                 showAge(34);
//             }}>Show age</button>
//             <input type="text" onChange={(e)=>{
//                 const txt = e.target.value;
//                 showText(txt);
//             }}/>
//         </>
//     )
// };

const Hello = () => {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(anonymous => anonymous + 1);
    }
    const onDecrease = () => {
        setNumber(anonymous => anonymous - 1);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default Hello;
