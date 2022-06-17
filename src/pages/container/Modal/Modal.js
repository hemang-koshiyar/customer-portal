import React from "react";
import {
  Close,
  HeaderSection,
  Input,
  InputItems,
  Label,
  ModalBox,
  ModalContent,
  UpdateButton,
  UpdateTitle,
} from "./Modal.styled";

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
        <hr color="#433ef1" style={{ marginBottom: "5%" }} />
        <form>
          {/* {title === "User" && (
            <Profile>
              <input type="file" />
            </Profile>
          )} */}
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
              maxLength={10}
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
