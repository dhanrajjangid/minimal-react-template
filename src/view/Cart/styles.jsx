// styles.js
import styled from 'styled-components';

export const CartContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  color: #333; /* Dark grey text color */
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.h4`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

export const ItemPrice = styled.span`
  font-size: 14px;
  color: #777;
`;

export const TotalAmount = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  margin-top: 20px;
`;

export const TotalLabel = styled.span`
  font-size: 18px;
  color: #333;
`;

export const TotalValue = styled.span`
  font-size: 18px;
  color: #3498db; /* Blue total value color */
`;

export const CheckoutButton = styled.button`
  background-color: #4a4a4a;
  color: #fff;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2077b1;
  }
`;

export const SmallButton = styled.button`
  background-color: #EB5C66;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  margin: 0 5px;
`;

export const QuantityDropdown = styled.select`
  padding: 4px;
  font-size: 14px;
  cursor: pointer;
`;
