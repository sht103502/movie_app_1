import React from 'react';



const foodLike = [
  { id: "1",
    name: "mando",
    image:"http://www.aeriskitchen.com/wp-content/uploads/2021/01/Flat_Dumplings_01-.jpg"
  },
  { id: "2",
    name: "baechu",
    image:"http://www.aeriskitchen.com/wp-content/uploads/2021/01/Napa_Cabbage_Jeon_01-.jpg"
  },
  { id: "3",
    name: "hoebbang",
    image:"http://www.aeriskitchen.com/wp-content/uploads/2021/01/Steamed_Vegetable_Bun_01-.jpg"
  }
];


function Food({name, picture}){
  return (
    <div>  
      <h2> I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

function App() {
  return (
    <div>
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
      </div>
    
  );
}

export default App;
