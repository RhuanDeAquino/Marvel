import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Content = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff6600;
`

const BoxContent = styled.div`
  text-align: center;
  max-width: 900px;
  width: 80%;
  height: 40vh;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  border-radius: 12px;
  border: 3px solid black;

  >img {
    width: 200px;
    position: absolute;
    top: -5rem;
    right: 0;
  }
`

const Title = styled.h1`
  font-size: 2.2rem;
  margin-top: -4rem;
`

const Text = styled.p`
  font-weight: 600;
  height: 3rem;
`

const Button = styled.a`
  background: red;
  position: absolute;
  bottom: -7%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 1rem 0;
  border-radius: 12px;
  text-decoration: none;
  color: #fff;  
  cursor: pointer;
  border: 3px solid black;
`

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Content>
      <BoxContent>
        <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt='' />
        <Title>Frases do Chuck Norris</Title>
        <Text>{joke}</Text>
        <Button onClick={fetchJoke}>Gerar</Button>
      </BoxContent>
    </Content>
  );
};

export default ChuckNorrisJoke;
