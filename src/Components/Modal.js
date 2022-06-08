import React from 'react'
import styledComponents from 'styled-components';
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
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 3%;
    display: block;
    :hover{
      border: 2px solid navy;
      ::placeholder{
        color: navy;
      }
    }
   
`;
const Label = styledComponents.label`
  font-weight: bold;
  color: navy;
`;
const UpdateAgency = styledComponents.span`
    text-align: center;
    color: navy;
    font-weight: bold;
    font-size: 20px;
`;

const HeaderSection = styledComponents.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3%;
`;
const SubmitButton = styledComponents.button`
    width:100%;
    color: white;
    margin-top: 3%;
    background: navy;
    height: 30px;
    border:none;
    border-radius: 10px;
    cursor: pointer;
    :hover{
      transition: 0.3s ease all;
      background: #478aaf; 
    }

`;
const Modal = ({modalRef, updateAgency, editData, userData, setUserData }) => {
  return (
    <ModalBox ref={modalRef}>
    <ModalContent>
      <HeaderSection>
        <UpdateAgency>Update Agency</UpdateAgency>

        <span onClick={() => (modalRef.current.style.display = "none")}>
          <i
            className="bi bi-x-circle-fill"
            style={{ fontSize: "15px", cursor: "pointer" }}
          ></i>
        </span>
      </HeaderSection>
      <hr color="navy" />
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-evenly",
          }}
        >
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={editData.UName}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={editData.UEmail}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div>
            <Label>Phone</Label>
            <Input
              type="tel"
              placeholder="Enter your phone"
              value={editData.UPhone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </div>
          <div>
            <Label>City</Label>
            <Input
              type="text"
              placeholder="Enter your city"
              value={editData.UCity}
              onChange={(e) =>
                setUserData({ ...userData, city: e.target.value })
              }
            />
          </div>
          <div>
            <Label>Country</Label>
            <Input
              type="text"
              placeholder="Enter your country"
              value={editData.UCountry}
              onChange={(e) =>
                setUserData({ ...userData, country: e.target.value })
              }
            />
          </div>
          <SubmitButton type="submit" onClick={updateAgency}>
            Update
          </SubmitButton>
        </div>
      </form>
    </ModalContent>
  </ModalBox>
  )
}

export default Modal