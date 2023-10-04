import './App.css';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import Nav from './components/Nav';
import axios from 'axios';




function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rym2-production.up.railway.app/api/character/10?key=pi-marcospissano`)
      .then((response)=> response.data)
      .then(( data ) => { 
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => { 
      const charactersFiltered = characters.filter((character) => 
         character.id !== Number(id))
         setCharacters(charactersFiltered);
   };

   return (
      <div className='App'>
         <Nav onSearch= {onSearch}/>
         <Cards characters={characters} onClose= {onClose}/>
      </div>
   );
}

export default App;

