import React from "react";
import ReactDOM from "react-dom";

const element = (
  <div
    style={{
      backgroundColor: "darkblue",
      color: "white",
      width: "100%",
      height: "3000px",
      marginTop: "-80px",
      backgroundImage: "url(" + "./images/react-logo.svg" + ")",
    }}
  >
    <div style={{ marginTop: "100px" }}>
      <h1
        style={{
          fontSize: "100px",
        }}
      >
        Say Hello to
        <br />
        React
      </h1>
      <p
        style={{
          fontSize: "50px",
        }}
      >
        You will learn a Frontend<br></br>
        framework from scratch,to<br></br>
        become an Ninka Developer
      </p>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
