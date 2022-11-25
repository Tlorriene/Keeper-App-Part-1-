import React from "react"

function footer(){
    const date = new Date();
    const currentTime = date.getFullYear();

return(
   <p> copyright {date.getFullYear} </p>
); 

}

export default footer;
