import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';

// done #12
const showBackground = true;

// done #5
const background = (
   <img 
      className='background'
      alt='ocean'
      src='/images/ocean.jpg'
   />
)

// done #7
const images = [];

for (const animal in animals) {
   images.push(
      <img 
         key={animal}
         className='animal'
         alt={animal}
         src={animals[animal].image}
         ariaLabel={animal}
         role='button'
         onClick={displayFact}
      />
   )
}

// done #9
function displayFact(e) = {
   const selectedAnimal = e.target.alt;
   const animalInfo = animals[selectedAnimal];
   const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

   const funFact = animalInfo.facts[optionIndex];
   document.getElementById('fact').innerHTML = funFact;
}

// done #6
const animalFacts = (
   <div>
      <h1>{title || 'Click an animal for a fun fact'}</h1>
      {showBackground && background}
      <p id='fact'></p>
      <div className='animals'>
         {images}
      </div>
   </div>
);

// done #4 
ReactDOM.render(
   animalFacts, 
   document.getElementById('root')
);