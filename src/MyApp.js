import React from 'react'
import Table from './Table'

function MyApp() { 
    return ( 
      <div className='container'>
        <Table characterData={characters}/>
      </div> 
    );  
}   

const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
];

export default MyApp