import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts";
import { useState } from "react";

function App() {
  const [list, setList] = useState(contacts.splice(0, 5));
  const [rest, setRest] = useState(contacts);

  function displayList() {
    return list.map((contact) => {
      return (
        <tr>
          <td>
            <img src={contact.pictureUrl} style={{ width: "8vw" }} />
          </td>
          <td>
            <h5>{contact.name}</h5>
          </td>
          <td>
            <h5>{contact.popularity.toFixed(2)}</h5>
          </td>
        </tr>
      );
    });
  }

  function addRandomContact() {
    let restOfContacts = [...rest];
    let copyOfList = [...list];
    let randomIndex = Math.floor(Math.random() * restOfContacts.length);
    let random = restOfContacts[randomIndex];
    copyOfList.unshift(random);
    setList(copyOfList);
    restOfContacts.splice(randomIndex, 1);
    setRest(restOfContacts);
  }

  function sortName() {
    let nameList = [...list];
    nameList.sort((a, b) => {
      return a.name.localeCompare(b.name);
      // if (a.name < b.name) {
      //   return -1;
      // }
      // if (b.name < a.name) {
      //   return 1;
      // }
      // return 0;
    });
    setList(nameList);
  }

  function sortPopularity() {
    let popularList = [...list].sort((a, b) => b.popularity - a.popularity);
    setList(popularList);
  }

  console.log(list);
  return (
    <div className="App">
      <table>
        <h2>IronContact</h2>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortName}>Sort by name ▲</button>
        <button onClick={sortPopularity}>Sort by popularity ▼</button>
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
