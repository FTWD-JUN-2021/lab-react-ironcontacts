import logo from './logo.svg';
import './App.css';
import contacts from './contacts';
import {useState} from 'react';

function App() {
  const [list, setList] = useState(contacts.splice(0,5));

  function displayList() {
    return list.map((contact) => {
      return (
        <tr>
          <td>
            <img 
              src={contact.pictureUrl}
              style={{ width: "8vw" }} 
            />
          </td>
          <td><h5>{contact.name}</h5></td>
          <td><h5>{contact.popularity.toFixed(2)}</h5></td>
        </tr>
      )
    })
  }


  console.log(list);
  return (
    <div className="App">
      <table>
      <h2>IronContact</h2>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {displayList()}
      </table>
    </div>
  );
}

export default App;
