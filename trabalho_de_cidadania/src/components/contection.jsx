import axios from 'axios';
import { useState, useEffect } from 'react';

function Conn() {

  useEffect(() => {
    axios.get('https://trabalho-de-cidadania-4554.vercel.app/')
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