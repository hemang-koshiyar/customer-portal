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
const UpdateTitle = styledComponents.span`
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
const Modal = ({
  modalRef,
  onUpdate,
  editData,
  setEditData,
  title,
  currentUser,
}) => {
  const [details, setDetails] = React.useState(currentUser);
  return (
    <ModalBox ref={modalRef}>
      <ModalContent>
        <HeaderSection>
          <UpdateTitle>Update {title}</UpdateTitle>

          <span onClick={() => (modalRef.current.style.display = "none")}>
            <Close className="bi bi-x-circle-fill"></Close>
          </span>
        </HeaderSection>
        <hr color="#800080" style={{ marginBottom: "5%" }} />
        <form>
          <InputItems>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={title === "Agency" ? editData.UName : details.name}
              onChange={(e) =>
                title === "Agency"
                  ? setEditData({ ...editData, UName: e.target.value })
                  : setDetails({ ...details, name: e.target.value })
              }
            />
          </InputItems>
          <InputItems>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={title === "Agency" ? editData.UEmail : details.email}
              onChange={(e) =>
                title === "Agency"
                  ? setEditData({ ...editData, UEmail: e.target.value })
                  : setDetails({ ...details, email: e.target.value })
              }
            />
          </InputItems>
          <InputItems>
            <Label>Phone</Label>
            <Input
              type="tel"
              placeholder="Enter your phone"
              value={title === "Agency" ? editData.UPhone : details.phone}
              onChange={(e) =>
                title === "Agency"
                  ? setEditData({ ...editData, UPhone: e.target.value })
                  : setDetails({ ...details, phone: e.target.value })
              }
            />
          </InputItems>
          <InputItems>
            <Label>City</Label>
            <Input
              type="text"
              placeholder="Enter your city"
              value={title === "Agency" ? editData.UCity : details.city}
              onChange={(e) =>
                title === "Agency"
                  ? setEditData({ ...editData, UCity: e.target.value })
                  : setDetails({ ...details, city: e.target.value })
              }
            />
          </InputItems>
          <InputItems>
            <Label>Country</Label>
            <Input
              type="text"
              placeholder="Enter your country"
              value={title === "Agency" ? editData.UCountry : details.country}
              onChange={(e) =>
                title === "Agency"
                  ? setEditData({ ...editData, UCountry: e.target.value })
                  : setDetails({ ...details, country: e.target.value })
              }
            />
          </InputItems>
          {title === "User" && (
            <InputItems>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
              />
            </InputItems>
          )}
          <UpdateButton type="submit" onClick={(e) => onUpdate(e, details)}>
            Update
          </UpdateButton>
        </form>
      </ModalContent>
    </ModalBox>
  );
};

export default Modal;
