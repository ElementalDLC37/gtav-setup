import axios from 'axios';
import { useState, useEffect } from 'react';

function Conn() {

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <h1>oi</h1>
  )
}

export default Conn;