import React, { useReducer } from "react";
import "./style.css";

const UseReducer = () => {
    const reducer = (state, action) => {
        if (action.type === "INCR") {
            return state + 1;
        }
        if (state > 0 && action.type === "DECR") {
            return state - 1;
        }
        return state;
    };

    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData);

    return (
        <>
            <div className={"center_div"}>
                <p>{state}</p>
                <div className={"button2"} onClick={() => dispatch({ type: "INCR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className={"button2"} onClick={() => dispatch({ type: "DECR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    );
};

export default UseReducer;
