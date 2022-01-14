import React, {useState, useEffect} from 'react';
import Table from './Table';
import Form from './Form';
import axios from 'axios';

function MyApp() { 
  const [characters, setCharacters] = useState([]);
  
  function deleteFromTable(index){
    const updated = characters.filter((character, i) => {
      return i !== index
    });
    setCharacters(updated);
  }

  async function removeOneCharacter(index){
    var url = 'http://localhost:5000/users/';
    url += characters[index].id;
    try{
      deleteFromTable(index);
      const response = await axios.delete(url);
      return response;
    }
    catch(error){
      console.log(error);
      return false;
    }
  }

  function updateList(person){
    setCharacters([...characters, person]);
  }
  
  useEffect(() => {
    fetchAll().then( result => {
       if (result)
          setCharacters(result);
     });
  }, [] );

  async function fetchAll(){
    try{
      const response = await axios.get('http://localhost:5000/users');
      return response.data.users_list;
    }
    catch(error){
      //We're not handling erors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  async function makePostCall(person){
    try{
      const response = await axios.post('http://localhost:5000/users', person);
      return response;
    }
    catch(error){
      console.log(error);
      return false;
    }
  }

  function updateList(person){
    makePostCall(person).then( result => {
      if(result && result.status===201)
        person['id'] = result.data;
        setCharacters([...characters, person]);
    });
  }

  return ( 
    <div className='container'>
      <Table characterData={characters} removeCharacter = {removeOneCharacter}/>
      <Form handleSubmit = {updateList}/>
    </div> 
  );  
}   




export default MyApp