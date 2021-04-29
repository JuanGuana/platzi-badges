//  const element = document.createElement('h1')
//  element.innerText = 'Hello, sin React JS'

//  const container = document.getElementById('app')

//  container.appendChild(element)

// React -> createElement
/// ReactDOM -> appendChild

import React from 'react';
import ReactDOM from 'react-dom'
import Badge from './components/Badg'
// const jsx = <h1>Hello, React JS!</h1> // esto es jsx de React 
// const element = React.createElement('a',{href:"https://juancguana.com"},'Ir a mi web')

const name = 'Juan C.';

// const element = React.createElement('h1',{},`Hola soy ${name}`)

// const sum = () => 3 + 3;

// const jsx = <h1>Hola soy {sum()}</h1>;

const element = (
  <div>
    <h1>Hola, soy Juan C.</h1> 
    <p>Soy ingeniero Frontend</p> 
  </div>
);

// const element = React.createElement('div',{}, React.createElement('h1',{}, 'Hola soy Juank'), React.createElement('p',{},'Soy ing front'))

const container = document.getElementById('app');

// ReactDOM.render(__que__,__donde__)

ReactDOM.render(<Badge />,container)
