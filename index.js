//    JUST UNCOMMENT ME TO SEE THE TASK. 
    
// NOTE: WE CANT USE JSX due to CDN

// TASK 1:  "Hello world" print in  <h1>
import React from "react";
import ReactDOM from "react-dom/client";

  const element= React.createElement("h1",{class:"text", opacity:0.5},"Hello React!");  //  use React module to create component/element
// Syntax : 
// React.createElement( "type", {props} , "children / content") // . props are like attributes of tag.
//  This props {}  is an object and whatever attributes inside it is applied to 'type' and all other previous attributes are deleted
//  ** read react DOCS




   const root = ReactDOM.createRoot(document.getElementById("root")); // we use ReactDOM module to create root elemetn and insert the h1 inside DOM tree
  
   root.render(element); // add to DOM tree also 

   // Lets try.
   console.log(element) // returns an object ! 
   // read react DOCS



/*
// Task 2:  Write the below HTML in React
// <div id="root">
//  <div id="parent">
//     <div id="child">
//         <h1>Hello Everyone</h1>
//     </div>
// </div>
// </div>

const root = ReactDOM.createRoot(document.getElementById("root"));

const full_html = React.createElement("div" , {id:"parent"}, 
    // Never thing that in 'react'; .createElement will create an {HTML} element named "h1" ; NO ❌
    // This will create an object like seen in console; and the. '.render' method will convert this React Object to HTML and render in DOM tree

React.createElement("div" , {id:"child"}, React.createElement("h1",{},"Hello Everyone")
)
)

root.render(full_html)
console.log(full_html)
// Just inspeact and see it

*/

/*
// Task 3: Extension of prev task: add h2 as sibling to h1 by passing an "array" in children
// Write the below HTML in React
// <div id="root">
//  <div id="parent">
//     <div id="child">
//         <h1>Hello Everyone</h1>
//         <h2> My Name is Tanishq </h2>
//     </div>
// </div>
// </div>

const root = ReactDOM.createRoot(document.getElementById("root"));

const full_html = React.createElement("div" , {id:"parent"}, 
    // Never thing that in 'react'; .createElement will create an {HTML} element named "h1" ; NO ❌
    // This will create an object like seen in console; and the. '.render' method will convert this React Object to HTML and render in DOM tree

React.createElement("div" , {id:"child"},
[ React.createElement("h1",{},"Hello Everyone") , React.createElement("h2",{},"My name is Tanishq") ]
)
)

root.render(full_html)
console.log(full_html)
// Just inspeact and see it

Note : THis render method REPLACES existing HTML (if inside the root element); with the element ; i.e "full_html" we created just see the html file will come to know



// 👉 NEED of JSX: This way of creating element is react is much harder then normal HTML as much length code more time to write...etc; so 
// To avoid this we use JSX {which will learn in EPS-2} 


/* IMPORTANT AND INTERESTING FACTS:

-> If we write the React script of 2 CDN links after link after .js file in html; then we will get an error in the console “React not defined” and the 
react elements will not be rendered properly;
hence order of those scripts tags is important
->


*/

    