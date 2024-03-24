import React from "react";

const App = ()=> {
  return (
      <>
          {/*nested component*/}
          <MyName/>
          <h2 className={"myClass"}>Welcome to React { 4 + 5}</h2>
          <p onClick={()=> alert("message")}>paragraph</p>
          <img src={""} alt={"no img"}/>
        <MyName/>

      </>

  );
}
const MyName = () => {
    return <h1>Vinod bahadur thapa</h1>;
};
// const App = () =>{
//     return React.createElement(
//         "div",
//         {},
//         React.createElement('p',{},"this is a paragraph"),
//         React.createElement('h1',{},"Hello world")
//     );
// }

export default App;
