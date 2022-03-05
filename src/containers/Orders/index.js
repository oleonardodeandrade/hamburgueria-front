import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import OrderImage from '../../assets/orderImage.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import H1 from '../../components/Title';

import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

import {
  Container,
  Div,
  Image,
  User
} from './styles'

function Orders() {
  // const orders = [];
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3001/order")
      console.log(newOrders)
      setOrders(newOrders);
    }
    fetchOrders()

  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/order/${userId}`)
    const newOrders = orders.filter(user => user.id !== userId)
    setOrders(newOrders)
  }

  function goBackPage() {
    navigate('/')
  }


  return (
    <Container>
      <Image alt="logo-imagem" src={OrderImage} />
      <ContainerItens isBlur={true}>
        <H1>Pedidos</H1>

        <ul>
          {
            orders.map(user => (
              <Div key={user.id}>
                <User>
                  <p>{user.order}</p>
                  <br />
                  <p>{user.clientName}</p>

                </User>
                <button onClick={() => deleteUser(user.id)}>
                    <img alt="lata-de-lixo" src={Trash} />
                  </button>
              </Div>
            ))
          }
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Orders;
