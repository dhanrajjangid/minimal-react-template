import React from 'react';
import styled from 'styled-components';
import { MdDeleteOutline  } from 'react-icons/md';

import {
  CartContainer,
  CartItem,
  ItemInfo,
  ItemImage,
  QuantityContainer,
  ItemDetails,
  ItemName,
  ItemPrice,
  TotalAmount,
  TotalLabel,
  TotalValue,
  CheckoutButton,
  SmallButton,
  QuantityDropdown,
} from './styles';


const Cart = () => {
  const dummyCartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 49.99,
      image: 'https://via.placeholder.com/50',
    },
  ];

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = dummyCartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    console.log('Updated Cart Items:', updatedCartItems);
  };

  const handleDeleteItem = (itemId) => {
    const updatedCartItems = dummyCartItems.filter((item) => item.id !== itemId);
    console.log('Updated Cart Items:', updatedCartItems);
  };

  const calculateTotal = () => {
    return dummyCartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <CartContainer>
      <h2>Your Shopping Cart</h2>
      {dummyCartItems.map((item,) => (
        <CartItem key={item.id}>
          <ItemInfo>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            </ItemDetails>
          </ItemInfo>
          <QuantityContainer>
            <QuantityDropdown
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            >
              {[...Array(10).keys()].map((value) => (
                <option key={value} value={value + 1}>
                  {value + 1}
                </option>
              ))}
            </QuantityDropdown>
          </QuantityContainer>
          <SmallButton  onClick={() => handleDeleteItem(item.id)}>
            <MdDeleteOutline />
          </SmallButton >
        </CartItem>
      ))}
      <TotalAmount>
        <TotalLabel>Total:</TotalLabel>
        <TotalValue>${calculateTotal()}</TotalValue>
      </TotalAmount>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </CartContainer>
  );
};

export default Cart;
