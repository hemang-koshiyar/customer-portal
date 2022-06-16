import styled from "styled-components";

export const FormBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 500px;
  height: auto;
  background: #fff;
  border-radius: 10px;
  color: #fff;
  box-shadow: 0 0 8px gray;
  padding: 50px;
  margin-bottom: 5%;
`;
export const H1 = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-bottom: 2%;
  color: #433ef1;
  font-size: 35px;
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

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const Button = styled.button`
  border: none;
  width: 45%;
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background: #433ef1;
    color: #fff;
  }
`;
export const BottomText = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 35%;
  color: #433ef1;
  padding: 3% 0;
  font-weight: bold;
  cursor: pointer;
`;
export const InputItems = styled.div`
  margin-bottom: 3%;
  margin-top: 5%;
`;
export const SignupButton = styled.button`
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
export const Label = styled.label`
  font-weight: bold;
  color: #433ef1;
  font-size: 20px;
  margin-bottom: 1.5%;
`;
