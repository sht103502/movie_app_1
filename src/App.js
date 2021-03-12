import React from 'react';

function Food({name, picture}){
  return <div>
   <h2> I like {name}</h2>
  <img src={picture} />
  </div>
}

const foodLike = [
  {
    name: "mando",
    image:"http://www.aeriskitchen.com/wp-content/uploads/2021/01/Flat_Dumplings_01-.jpg"
  },
  {
    name: "baechu",
    image:"http://www.aeriskitchen.com/wp-content/uploads/2021/01/Napa_Cabbage_Jeon_01-.jpg"
  },
  {
    name: "hoebbang",
    image:"http://www.aeriskitchen.com/wp-content/uploads/2021/01/Steamed_Vegetable_Bun_01-.jpg"
  }
];


function App() {
  return (
    <div>
      {foodLike.map(dish => ( 
      <Food name={dish.name} picture={dish.image}/>
      ))}
      </div>
  );
}

export default App;
