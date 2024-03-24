import './style.css'
import React, {useEffect, useState} from "react";
const UseEffect = () =>{
    // const initialData =10;
    const [myNumber, setmyNumber] =useState(0);
    console.log(myNumber);
    useEffect(() => {
    document.title = `Chats(${myNumber})`
    });
    return(
        <>
            <div className={"center_div"}>
                <p>{myNumber}</p>
                <div className={"button2"} onClick={()=>setmyNumber(myNumber +1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
            </div>
        </>
    )
}
export default UseEffect;