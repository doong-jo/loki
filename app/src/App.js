import React, { useState, useEffect } from 'react';

import { ApiControllerView } from './ApiController';

function App() {
  const [product, setProduct] = useState();
  const [products, setProducts] = useState();
  const [order, setOrder] = useState();
  const [orders, setOrders] = useState();
  const [newOrder, setNewOrder] = useState();

  function loadOrders() {
    fetch('/order/1')
      .then((res) => res.json())
      .then((json) => {
        setOrder(json.order);
      });
    fetch('/order/list')
      .then((res) => res.json())
      .then((json) => {
        setOrders(json.orders);
      });
  }

  useEffect(() => {
    fetch('/product/BNB1')
      .then((res) => res.json())
      .then((json) => {
        setProduct(json.product);
      });
    fetch('/product/list')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products);
      });
    fetch('/order/1')
      .then((res) => res.json())
      .then((json) => {
        setOrder(json.order);
      });
    fetch('/order/list')
      .then((res) => res.json())
      .then((json) => {
        setOrders(json.orders);
      });
    fetch('/order/3', {
      method: 'POST',
      body: 'BNB3',
    })
      .then((res) => res.json())
      .then((json) => {
        setNewOrder(json);
        loadOrders();
      });
  }, []);

  return (
    <div style={{ marginLeft: '24px' }} className="App">
      <ApiControllerView />
      <h1>API TEST</h1>
      <h2>GET /product/:id</h2>
      {product && (
        <ul>
          <li>{product.id}</li>
          <li>{product.name}</li>
        </ul>
      )}
      <h2>GET /product/list</h2>
      {products &&
        products.map((product) => (
          <ul key={product.id}>
            <li>{product.id}</li>
            <li>{product.name}</li>
          </ul>
        ))}
      <h2>POST /order/:id</h2>
      {newOrder && (
        <ul>
          <li>{newOrder.id}</li>
          <li>{newOrder.productId}</li>
        </ul>
      )}
      <h2>GET /order/:id</h2>
      {order ? (
        <ul>
          <li>{order.id}</li>
          <li>{order.productId}</li>
        </ul>
      ) : (
        'pending..'
      )}
      <h2>GET /order/list</h2>
      {orders
        ? orders.map((order) => (
            <ul key={order.id}>
              <li>{order.id}</li>
              <li>{order.productId}</li>
            </ul>
          ))
        : 'pending..'}
    </div>
  );
}

export default App;
