import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background: #433ef1;
`;
export const LeftSection = styled.div`
  background: #433ef1;
  color: #fff;
  min-width: 15%;
  margin-top: 3%;
`;
export const RightSection = styled.div`
  background: #ccc;
  flex-grow: 1;
  border-radius: 70px 0px 0px 70px;
`;
export const Categories = styled.ul`
  font-size: 25px;
  font-weight: bold;
  padding-left: 0;
  list-style-type: none;
  flex-direction: column;
`;
export const List = styled.li`
  padding: 10% 0;
  :hover {
    display: block;
    background: #ccc;
    color: #433ef1;
    border-radius: 50px 0px 0px 50px;
    width: 100%;
    cursor: pointer;
  }
`;
export const Icon = styled.i`
  margin: 0 20px;
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
`;
export const Th = styled.th`
  color: #433ef1;
  :hover {
    cursor: pointer;
  }
`;
export const PageCount = styled.span`
  display: flex;
  padding: 0 1%;
  align-items: center;
  font-weight: bold;
  height: 50px;
`;
export const AddButton = styled.button`
  border: none;
  width: 150px;
  height: 50px;
  color: #fff;
  font-weight: bold;
  background: #433ef1;
  border-radius: 7px;
  font-size: 15px;
  margin-bottom: 2%;
  :hover {
    cursor: pointer;
    background: #800080;
  }
`;
export const Button = styled.button`
  border: none;
  width: 100px;
  height: 50px;
  color: #fff;
  font-weight: bold;
  background: ${(btnRef) => (btnRef.disabled ? "#000" : "#433ef1")};
  border-radius: 7px;
  font-size: 15px;
  margin-bottom: 2%;
  :hover {
    cursor: ${(btnRef) => (btnRef.disabled ? "" : "pointer")};
    background: ${(btnRef) => (btnRef.disabled ? "" : "#800080")};
  }
`;

export const Dropdown = styled.select`
  border: none;
  width: 100px;
  text-align: center;
  height: 50px;
  color: #fff;
  padding: 10px;
  font-weight: bold;
  background: #433ef1;
  border-radius: 0px 10px 10px 0px;
  font-size: 15px;
  margin-bottom: 2%;
  :hover {
    cursor: pointer;
    background: #800080;
  }
`;

export const ActionIcon = styled.i`
  padding: 3%;
  color: #000;
  font-size: 25px;
  :hover {
    cursor: pointer;
    color: #433ef1;
    transition: 0.3s ease all;
  }
`;
export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const UpperSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  margin: 3% 4%;
`;
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
export const Label = styled.label`
  font-weight: bold;
  color: #433ef1;
  margin-bottom: 1.5%;
`;
export const AddAgency = styled.span`
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

export const MiddleSection = styled.div`
  background: white;
  box-shadow: 0 0 5px #ccc;
  border-radius: 7px;
  height: auto;
  margin: 3%;
  padding: 2%;
  overflow-x: auto;
`;
export const SubmitButton = styled.button`
  width: 100%;
  color: white;
  margin-top: 3%;
  background: #433ef1;
  font-size: 15px;
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transition: 0.3s ease all;
    background: #800080;
  }
`;
export const InputItems = styled.div`
  margin-bottom: 3%;
`;

export const Close = styled.i`
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: #433ef1;
    transition: 0.3s ease all;
  }
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  padding: 0 5px;
  font-size: 15px;
  border-radius: 10px 0px 0px 10px;
  ::placeholder {
    padding-left: 9px;
  }
`;
export const Tr = styled.tr`
  border-bottom: 1px solid #433ef1;
  height: 70px;
  width: 100%;
`;
export const SearchDivision = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  cursor: pointer;
`;
export const UserButton = styled.span`
  padding-left: 10%;
  font-size: 15pt;
  font-weight: bold;
`;
