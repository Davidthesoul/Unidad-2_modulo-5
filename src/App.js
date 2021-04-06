
import React from 'react';


export default function App() {
  const vector = [
    { url: 'https://placeimg.com/80/80/people?id=1', title: 'Titulo 1', description:
    'Descripcion imagen 1'},
    { url: 'https://placeimg.com/80/80/people?id=2', title: 'Titulo 2', description:
    'Descripcion imagen 2'},
    { url: 'https://placeimg.com/80/80/people?id=3', title: 'Titulo 3', description:
    'Descripcion imagen 3'},
    { url: 'https://placeimg.com/80/80/people?id=4', title: 'Titulo 4', description:
    'Descripcion imagen 4'}
    ]
  return (
    <div>
      {vector.map((item, index) => {
        return (
          <div>
            <div class="card">
              
              <img class="card_img" src={item.url} alt={item.url} />
                <div class="card_column">
                <h1 class="card_name">{item.title}</h1>
                <h1 class="card_desc">{item.description}</h1>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

