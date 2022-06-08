import React from "react";
import styledComponents from "styled-components";
const Wrapper = styledComponents.div`
    display: flex;
    height: 100vh;
    background:navy;
    font-family: 'Noto Sans', sans-serif;
    `;
const LeftSection = styledComponents.div`
    background: navy;
    color: #fff;
    min-width:15%;
    margin-top:3%;
    `;
const RightSection = styledComponents.div`
  background: #ccc;
    flex-grow: 1;
    border-radius: 70px 0px 0px 70px;
    `;
const Categories = styledComponents.ul`
    font-size: 25px;
    font-weight: bold;
    padding-left: 0;
    list-style-type: none;
    flex-direction: column;

    `;
const List = styledComponents.li`
  padding: 10% 0;
    :hover{
        display: block;
        background: #ccc;
        color: navy;
        border-radius: 50px 0px 0px 50px;
        width: 100%;
        cursor: pointer;
    }
    `;
const Icon = styledComponents.i`
    margin: 0 20px;
    `;
const Table = styledComponents.table`

    border-collapse: collapse;
    width: 100%;
    text-align: center;

  `;
const Thead = styledComponents.th`
   color: navy;
  `;
const AddButton = styledComponents.button`
    border: none;
    width: 150px;
    height: 50px;
    font-weight: bold;
    background: #ccc;
    border-radius: 7px;
    font-size: 15px;
    margin-bottom:2%;
    :hover{
      cursor: pointer;
      color: navy;
    }
`;
const Button = styledComponents.button`
    border: none;
    width: 100px;
    height: 50px;
    color: #fff;
    font-weight: bold;
    background: navy;
    border-radius: 7px;
    font-size: 15px;
    margin-bottom:2%;
    :hover{
      cursor: pointer;
    }
`;
const Modal = styledComponents.div`
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
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 15%;

`;
const Input = styledComponents.input `
    width: 100%;
    height: 20px;
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
const Portal = () => {
  const [portalData, setPortalData] = React.useState([]);
  const modalRef = React.useRef();
  const titles = ["#", "Name", "Email", "Phone", "City", "Country"];
  // const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appLAnzH9mo92cmYc/Table%201?maxRecords=3&view=Grid%20view",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer keyORrZt08dnm2627",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setPortalData(data.records));
  }, []);
  const handleModal = () => {
    modalRef.current.style.display = "block";
  };
  const categories = [
    {
      name: "Dashboard",
      icon: "bi bi-house-fill",
    },
    {
      name: "Agency",
      icon: "bi bi-person-lines-fill",
    },
    {
      name: "Clients",
      icon: "bi bi-building",
    },
    {
      name: "Associations",
      icon: "bi bi-collection-fill",
    },
  ];

  return (
    <Wrapper>
      <LeftSection>
        <Categories>
          {categories.map((category, i) => {
            return (
              <List key={i}>
                <Icon className={category.icon}></Icon>
                {category.name}
              </List>
            );
          })}
        </Categories>
      </LeftSection>
      <RightSection>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              marginRight: "3%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <i className="bi bi-person-circle" style={{ fontSize: "30px" }}></i>
            <span>User</span>
          </div>
        </div>
        <div
          style={{
            background: "white",
            boxShadow: "0 0 5px #ccc",
            borderRadius: "7px",
            height: "auto",
            margin: "3%",
            padding: "2%",
            overflowX: "auto",
          }}
        >
          <AddButton onClick={handleModal}>Add Agency</AddButton>
          <Modal ref={modalRef}>
            <ModalContent>
              <span
                onClick={() => (modalRef.current.style.display = "none")}
                style={{ float: "right", cursor: "pointer" }}
              >
                &times;
              </span>
              <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", padding: "3%" }}>
                <form>
                  <label style={{fontWeight: "bold", color: "grey"}}>Name</label>
                  <Input type="text" placeholder="Enter your name" />
                  <label style={{fontWeight: "bold", color: "grey"}}>Email</label>
                  <Input type="email" placeholder="Enter your Email" />
                </form>
              </div>
            </ModalContent>
          </Modal>
          <Table>
            {titles.map((title, i) => {
              return (
                <Thead key={i}>
                  {title} <i className="bi bi-arrow-up"></i>
                </Thead>
              );
            })}

            <tbody>
              {portalData.map((field, i) => {
                return (
                  <tr
                    key={field.id}
                    style={{
                      borderBottom: "1px solid navy",
                      height: "70px",
                      width: "100%",
                    }}
                  >
                    <td>{i + 1}</td>
                    <td>{field.fields.Name}</td>
                    <td>{field.fields.Email}</td>
                    <td>{field.fields.Phone}</td>
                    <td>{field.fields.City}</td>
                    <td>{field.fields.Country}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button>Previous</Button>
          <span
            style={{
              display: "flex",
              padding: "0 1%",
              alignItems: "center",
              height: "50px",
            }}
          >
            1
          </span>
          <Button>Next</Button>
        </div>
      </RightSection>
    </Wrapper>
  );
};

export default Portal;
