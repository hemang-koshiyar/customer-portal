import React from "react";
import styledComponents from "styled-components";
const ModalBox = styledComponents.div`
  display: none;
  position: fixed;
  top:0;
  left:0;
  overflow:auto;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;
const ModalContent = styledComponents.div`
  border-radius: 10px;
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 20%;

`;
const Input = styledComponents.input`
    height: 20px;
    width: 93%;
    padding: 5% 5%;
    margin: 2% auto;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 3%;
    display: block;
    :hover{
      border: 2px solid #800080;
      ::placeholder{
        color: #800080;
      }
    }
   
`;
const Close = styledComponents.i`
font-size: 20px;
cursor: pointer;
:hover{
    color: #800080;
    transition: 0.3s ease all;
}

`;
const Label = styledComponents.label`
  font-weight: bold;
  color: #800080;
  margin-bottom: 1.5%;
`;
const UpdateAgency = styledComponents.span`
    text-align: center;
    color: #800080;
    font-weight: bold;
    font-size: 20px;
`;

const HeaderSection = styledComponents.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3%;
`;
const UpdateButton = styledComponents.button`
    width:100%;
    color: white;
    margin-top: 3%;
    font-size: 15px;
    background: #800080;
    height: 40px;
    border:none;
    border-radius: 10px;
    cursor: pointer;
    :hover{
      transition: 0.3s ease all;
      background: #433ef1; 
    }

`;
const InputItems = styledComponents.div`
margin-bottom: 3%;
`;
const Modal = ({ modalRef, updateAgency, editData, setEditData }) => {
  return (
    <ModalBox ref={modalRef}>
      <ModalContent>
        <HeaderSection>
          <UpdateAgency>Update Agency</UpdateAgency>

          <span onClick={() => (modalRef.current.style.display = "none")}>
            <Close className="bi bi-x-circle-fill"></Close>
          </span>
        </HeaderSection>
        <hr color="#800080" style={{marginBottom: "5%"}}/>
        <form>
          <InputItems >
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={editData.UName}
              onChange={(e) =>
                setEditData({ ...editData, UName: e.target.value })
              }
            />
          </InputItems>
          <InputItems>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={editData.UEmail}
              onChange={(e) =>
                setEditData({ ...editData, UEmail: e.target.value })
              }
            />
          </InputItems>
          <InputItems>
            <Label>Phone</Label>
            <Input
              type="tel"
              placeholder="Enter your phone"
              value={editData.UPhone}
              onChange={(e) =>
                setEditData({ ...editData, UPhone: e.target.value })
              }
            />
          </InputItems>
          <InputItems>
            <Label>City</Label>
            <Input
              type="text"
              placeholder="Enter your city"
              value={editData.UCity}
              onChange={(e) =>
                setEditData({ ...editData, UCity: e.target.value })
              }
            />
          </InputItems>
          <InputItems>
            <Label>Country</Label>
            <Input
              type="text"
              placeholder="Enter your country"
              value={editData.UCountry}
              onChange={(e) =>
                setEditData({ ...editData, UCountry: e.target.value })
              }
            />
          </InputItems>
          <UpdateButton type="submit" onClick={(e) => updateAgency(e)}>
            Update
          </UpdateButton>
        </form>
      </ModalContent>
    </ModalBox>
  );
};

export default Modal;
