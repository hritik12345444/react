function customRender(reactElement,container){   // called function

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;


    // some time through error these two lines so we can use another things
    /*
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    */

    // is  loop se hmm arrtibutes set krr rhe hai 
    for(const prop in reactElement.props){
        if(prop === `children`) continue;   // old time me ye condition use krte the kyuki wha props ke andar hi children declear hota tha abbb iska jarurat nahi hai but hmne yesse hi likh diye hai
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement ={
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}


const mainContainer = document.querySelector("#root");  // html se ek element to utha liye

customRender(reactElement,mainContainer); //calling