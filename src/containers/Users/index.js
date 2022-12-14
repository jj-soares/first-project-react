import React, { useState,  useEffect } from "react";
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Tin from '../../assets/trash.png'


import { Container, H1, Image, ContainerItens, Button, User } from "./style";


const Users = () => {

  const [users, setUsers] = useState([])  // ISSO E UM REACT HOOKS
  const history = useHistory()

useEffect(() => {

  async function fetchUsers() {
  const {data: newUsers} = await axios.get ("http://localhost:3001/users")

setUsers(newUsers)
  }

  fetchUsers()
},[ ]) 



  async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/users/${userId}`)


    const newUser = users.filter((user) => user.id !== userId)

    setUsers(newUser)


  }

  function goGbackPage() {
    history.push('/')
  }

  return (
    <Container>

      <Image alt="Logo-imagem" src={ Avatar} />

      <ContainerItens>
        <H1> Usuários </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}> <img alt="Lat-de-lixo" src={Tin} /></button>
            </User>

          ))}
        </ul>

        
        <Button onClick={goGbackPage}> <img alt="seta " src={Arrow} /> Voltar  </Button>



      </ContainerItens>

    </Container>

  )
}


export default Users;