import React, {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Burguer from '../../assets/burguer.svg'
import Arrow from '../../assets/arrow.svg'

import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

import {
  Container,
  Image,
  Input,
  InputLabel,
} from './styles'

function App() {
  // const orders = [];
  const [ orders, setOrders ] = useState([]);
  const navigate = useNavigate()
  const inputName = useRef()
  const inputPedido = useRef()

  async function addNewUser(){

   const { data: newUser } = await axios.post("http://localhost:3001/order", {
    order: inputName.current.value,
     clientName: inputPedido.current.value
    });

  setOrders([
    ...orders,
    newUser
  ]);

  navigate('/usuarios')


  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Burguer} />
      <ContainerItens>
        <H1>Faça seu pedido</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputName} placeholder="Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputPedido} placeholder="Nome do Cliente" />

        <Button onClick={addNewUser}>
          Novo Pedido <img alt="seta" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default App;
