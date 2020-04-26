const desc = 'I just learned how to create a React node and render it to the' +
    ' DOM';

//React uses camel casing for attribute names in JSX
//Turns it from JSX attribute into an HTML attribute
const myTitleID = 'main-title';
const name = 'Sophie';

const header = (
    <header>
        <h1 id={myTitleID}>{name}'s First React Element</h1>
        <p>{desc}</p>
    </header>
);

//this manages what gets rendered to the DOM. Interprets element objects
//creates DOM nodes out of components
ReactDOM.render(
    header,
    document.getElementById('root')
);
console.log(title);