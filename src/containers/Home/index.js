import React, { useState, useRef} from "react";

import {useHistory} from 'react-router-dom'

import axios from 'axios'
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

// import './style.css'  // 1 forma de usar css no react e so importar o arquivo !! 
// 2 forma de usar CSS no react e com (STYLED COMPONENTS)
// JSX O JSX E MISTURAR HTML COM JAVA SCRIPT!! 


import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./style";


const App = () => {

  // No react nao usamos apenas class o nome e CLASSNAME 
  //const users = []
  // NO REACT UM ESTADO E IMUTAVEL! 
  // REACT HOOKS => FERRAMENTAS AUXILIARES 
  // ESTUDAR CONCEITO DE SPREAD OPERATOR (...)

  // REACT HOOKS => ueseEFFECT (Efeito Colateral)
  // Quando minha aplicaçao inicia o useEffect e chamdo !! 
  // Quando um etsado que esta no array de dependencias do useEffect e alterado

  const [users, setUsers] = useState([])  // ISSO E UM REACT HOOKS

  const inputName = useRef()
  const inputAge = useRef()

  const history = useHistory()


  async function addNewUser() {


    const { data: newUser } = await axios.post("http://localhost:3001/users",
      {
        name: inputName.current.value,
        age: inputAge.current.value
      })

    setUsers([...users, newUser])

    history.push('/usuarios')

  }



  return (
    <Container>

      <Image alt="Logo-imagem" src={People} />

      <ContainerItens>
        <H1> Olá </H1>

        <InputLabel> Nome</InputLabel>
        <Input ref={inputName} placeholder="Coloque seu Nome!" />

        <InputLabel> Idade </InputLabel>
        <Input ref={inputAge} placeholder="Sua Idade! " />

        <Button  onClick={addNewUser}> Cadastrar <img alt="seta " src={Arrow} /></Button>

        
      </ContainerItens>

    </Container>

  )
}


export default App