import styled from "styled-components";
export const ModalBox = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  z-index: 1;
  width: 100%;
  height: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalContent = styled.div`
  border-radius: 10px;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 20%;
`;
export const Input = styled.input`
  height: 20px;
  width: 93%;
  padding: 5% 5%;
  margin: 2% auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 3%;
  display: block;
  :hover {
    border: 2px solid #433ef1;
    ::placeholder {
      color: #433ef1;
    }
  }
`;
export const Close = styled.i`
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: #433ef1;
    transition: 0.3s ease all;
  }
`;
export const Label = styled.label`
  font-weight: bold;
  color: #433ef1;
  margin-bottom: 1.5%;
`;
export const UpdateTitle = styled.span`
  text-align: center;
  color: #433ef1;
  font-weight: bold;
  font-size: 20px;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
`;
export const UpdateButton = styled.button`
  width: 100%;
  color: white;
  margin-top: 3%;
  font-size: 15px;
  background: #433ef1;
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transition: 0.3s ease all;
    background: #433ef1;
  }
`;
export const InputItems = styled.div`
  margin-bottom: 3%;
`;

export const Profile = styled.label`
  display: flex;
  font-size: 40px;
  justify-content: center;
  cursor: pointer;
`;

export const ProfileInput = styled.input`
  opacity: 0;
`;
