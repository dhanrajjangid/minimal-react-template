import styled from 'styled-components';

// Table styles
export const TableContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 10px;
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const Thead = styled.thead`
  background-color: #f1f5f9;
`;

export const Th = styled.th`
  padding: 10px;
  font-weight: bold;
  color: #6b7280;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #e5e7eb;
`;

export const EditButton = styled.button`
  padding: 5px 10px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

// Modal styles
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  height: 70vh;
  overflow: auto;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const FormField = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #374151;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d1d5db;
  font-size: 16px;
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d1d5db;
  font-size: 16px;
`;

export const SaveButton = styled.button`
  padding: 10px;
  background-color: #3b82f6;
  color: white;
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;
