import React from "react";
import ReactDOM from "react-dom";
import heading from "./heading";
import footer from "./footer";
import note from "./note";

function app(){
    return( 
    <div>
        <heading/>
    </div>,
    <div>
        <note/>
    </div>,
    <div>
        <footer/>
    </div>
)
}

export default app;




