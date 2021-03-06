import styled from "styled-components";

export const InputItems = styled.div`
  margin-bottom: 3%;
  margin-top: 5%;
`;
export const LoginButton = styled.button`
  width: 100%;
  background: #433ef1;
  color: #fff;
  margin-top: 3%;
  border: none;
  font-weight: bold;
  font-size: 20px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 3%;
  :hover {
    background: #800080;
  }
`;
export const Input = styled.input`
  height: 20px;
  width: 93%;
  padding: 5% 5%;
  margin: 2% auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 3%;
  font-size: 20px;
  display: block;
  :hover {
    border: 2px solid #433ef1;
    ::placeholder {
      color: #433ef1;
    }
  }
`;
export const Label = styled.label`
  font-weight: bold;
  color: #433ef1;
  font-size: 20px;
  margin-bottom: 1.5%;
`;
