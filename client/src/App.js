import React, {useEffect,useState} from 'react'
import styled from 'styled-components';
const axios = require('axios');


const Body=styled.div`
  height: 100vh;
  width: 100%;
  text-align: center;
  h1{
    display: inline-block;
  }
`;

const App=()=>{
  const [msg,setMsg]=useState('')
  useEffect(()=> {axios.get('http://localhost:8080/').then((result)=>{
    setMsg(result.data.message);
  });
    },[])
  return (<Body>
  <h1>{msg}</h1>
  </Body>);
}

export default App;
