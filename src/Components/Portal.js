import React from "react";
import styledComponents from "styled-components";
import Modal from "./Modal";
const Wrapper = styledComponents.div`
    display: flex;
    height: 100vh;
    background:navy;
    
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

const ActionButton = styledComponents.button`
width: 70px; 
height: 70px
font-weight: bold;
border: none;
padding: 3%;
background: navy;
color: #fff;
border-radius: 7px;
font-size: 15px;
:hover{
cursor: pointer;
}
`;

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
const AddAgency = styledComponents.span`
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
const Portal = () => {
  const [portalData, setPortalData] = React.useState([]);
  const modalRef = React.useRef();
  const titles = ["#", "Name", "Email", "Phone", "City", "Country"];
  const [userData, setUserData] = React.useState({
    Name: "",
    Email: "",
    Phone: "",
    City: "",
    Country: "",
  });
  const [editData, setEditData] = React.useState({
    UName: "",
    UEmail: "",
    UPhone: "",
    UCity: "",
    UCountry: "",
  });
  const [showModal, setShowModal] = React.useState({
    add: false,
    update: false,
  });

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
  }, [portalData]);

  const addAgency = (e) => {
    e.preventDefault();
    // const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (userData.Name === "") {
    //   alert("Please add name!");
    // } else if (userData.Email === "") {
    //   alert("Please enter your email!");
    // } else if (!emailRegex.test(userData.Email)) {
    //   alert("Please enter valid email!");
    // } else if (userData.Phone === "") {
    //   alert("Please enter mobile no!");
    // } else if (userData.Phone.length < 10) {
    //   alert("Please enter valid mobile number!");
    // } else if (userData.City === "") {
    //   alert("Please enter your city!");
    // } else if (userData.Country === "") {
    //   alert("Please enter your country!");
    // } else {
    fetch("https://api.airtable.com/v0/appLAnzH9mo92cmYc/Table%201", {
      method: "POST",
      headers: {
        Authorization: "Bearer keyORrZt08dnm2627",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: userData.Name,
              Email: userData.Email,
              Phone: userData.Phone,
              City: userData.City,
              Country: userData.Country,
            },
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => setPortalData([...portalData, ...data]));

    modalRef.current.style.display = "none";
    // }
  };

  const deleteAgency = (id) => {
    fetch(`https://api.airtable.com/v0/appLAnzH9mo92cmYc/Table%201/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer keyORrZt08dnm2627",
      },
    });
  };

  const updateAgency = (data) => {
    setEditData({
      UName: data.fields.Name,
      UEmail: data.fields.Email,
      UPhone: data.fields.Phone,
      UCity: data.fields.City,
      UCountry: data.fields.Country,
    });
    fetch(
      `https://api.airtable.com/v0/appLAnzH9mo92cmYc/Table%201/${data.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer keyORrZt08dnm2627",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: editData.UName,
                Email: editData.UEmail,
                Phone: editData.UPhone,
                City: editData.UCity,
                Country: editData.UCountry,
              },
            },
          ],
        }),
      }
    )
      .then((res) => res.json())
      .then((data) =>
        setPortalData((prevData) => {
          let filteredData = prevData.filter((field) => field.id !== data.id);
          return filteredData;
        })
      );
  };
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: "40px",
            alignItems: "center",
            margin: "1% 4%",
          }}
        >
          <i className="bi bi-person-circle" style={{ fontSize: "30px" }}></i>
          <span style={{ paddingLeft: "0.5%" }}>User</span>
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
          <AddButton
            onClick={() => {
              setShowModal({ ...showModal, add: true });
              handleModal();
            }}
          >
            Add Agency
          </AddButton>
          {showModal.add ? (
            <ModalBox ref={modalRef}>
              <ModalContent>
                <HeaderSection>
                  <AddAgency>Add Agency</AddAgency>

                  <span
                    onClick={() => (modalRef.current.style.display = "none")}
                  >
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
                        onChange={(e) =>
                          setUserData({ ...userData, Name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) =>
                          setUserData({ ...userData, Email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone"
                        onChange={(e) =>
                          setUserData({ ...userData, Phone: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>City</Label>
                      <Input
                        type="text"
                        placeholder="Enter your city"
                        onChange={(e) =>
                          setUserData({ ...userData, City: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Country</Label>
                      <Input
                        type="text"
                        placeholder="Enter your country"
                        onChange={(e) =>
                          setUserData({ ...userData, Country: e.target.value })
                        }
                      />
                    </div>
                    <SubmitButton type="submit" onClick={(e) => addAgency(e)}>
                      Submit
                    </SubmitButton>
                  </div>
                </form>
              </ModalContent>
            </ModalBox>
          ) : showModal.update ? (
            <Modal
              modalRef={modalRef}
              updateAgency={updateAgency}
              editData={editData}
              userData={userData}
              setUserData={setUserData}
            />
          ) : (
            ""
          )}
          <Table>
            <thead>
              {titles.map((title, i) => (
                <Thead key={i}>
                  {title} <i className="bi bi-arrow-up"></i>
                </Thead>
              ))}
              <Thead>Action</Thead>
            </thead>
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
                    <td>
                      <ActionButton
                        onClick={() => {
                          setShowModal({ ...showModal, update: true });
                          updateAgency(field);
                          handleModal();
                        }}
                      >
                        Edit
                      </ActionButton>
                      |
                      <ActionButton onClick={() => deleteAgency(field.id)}>
                        Delete
                      </ActionButton>
                    </td>
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
