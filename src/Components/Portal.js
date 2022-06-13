import { debounce } from "lodash";
import React from "react";
import styledComponents from "styled-components";
import Modal from "./Modal";

const Wrapper = styledComponents.div`
    display: flex;
    height: 100vh;
    background:#800080;
    
    `;
const LeftSection = styledComponents.div`
    background: #800080;
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
        color: #800080;
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
const Th = styledComponents.th`
   color: #800080;
   :hover{
     cursor: pointer;
   }
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
      color: #800080;
    }
`;
const Button = styledComponents.button`
    border: none;
    width: 100px;
    height: 50px;
    color: #fff;
    font-weight: bold;
    background: #800080;
    border-radius: 7px;
    font-size: 15px;
    margin-bottom:2%;
    :hover{
      cursor: pointer;
      background: #433ef1;

    }
`;

const Dropdown = styledComponents.select`
border: none;
width: 100px;
text-align: center;
height: 50px;
color: #fff;
padding: 10px;
font-weight: bold;
background: #800080;
border-radius: 0px 10px 10px 0px;
font-size: 15px;
margin-bottom:2%;
:hover{
  cursor: pointer;
  background: #433ef1;

}
`;

const ActionIcon = styledComponents.i`
padding: 3%;
color: #000;
font-size: 25px;
:hover{
cursor: pointer;
color: #800080;
transition: 0.3s ease all;
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
const Label = styledComponents.label`
  font-weight: bold;
  color: #800080;
  margin-bottom: 1.5%;
`;
const AddAgency = styledComponents.span`
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
const SubmitButton = styledComponents.button`
    width:100%;
    color: white;
    margin-top: 3%;
    background: #800080;
    font-size: 15px;
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

const Close = styledComponents.i`
font-size: 20px;
cursor: pointer;
:hover{
    color: #800080;
    transition: 0.3s ease all;
}
`;

const SearchInput = styledComponents.input`
width: 300px;
height: 50px;
border: none;
padding: 0 5px;
font-size: 15px;
border-radius: 10px 0px 0px 10px;
::placeholder{
  padding-left: 9px;
}
`;

const SearchDivision = styledComponents.div`
display: flex;
justify-content: flex-end;
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
  const [sortBy, setSortBy] = React.useState({
    asc: true,
    icon: "bi bi-arrow-up",
    title: "",
  });

  const [searchBy, setSearchBy] = React.useState("Name");
  const [searchValue, setSearchValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const [showPerPage] = React.useState(4);
  const [pagination, setPagination] = React.useState({
    startIndex: 0,
    endIndex: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ startIndex: start, endIndex: end });
  };
  React.useEffect(() => {
    const value = showPerPage * currentPage;
    onPaginationChange(value - showPerPage, value);
  }, [currentPage]);

  const fetchData = async () => {
    return await fetch(
      `https://api.airtable.com/v0/appLAnzH9mo92cmYc/customers?view=Grid%20view`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer keyORrZt08dnm2627",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPortalData(data.records);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handlePrevious = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  let length = portalData.length;
  const addAgency = (e) => {
    length++;
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userData.Name === "") {
      alert("Please add name!");
    } else if (userData.Email === "") {
      alert("Please enter your email!");
    } else if (!emailRegex.test(userData.Email)) {
      alert("Please enter valid email!");
    } else if (userData.Phone === "") {
      alert("Please enter mobile no!");
    } else if (userData.City === "") {
      alert("Please enter your city!");
    } else if (userData.Country === "") {
      alert("Please enter your country!");
    } else {
      fetch("https://api.airtable.com/v0/appLAnzH9mo92cmYc/customers", {
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
                Id: length,
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
        .then((data) => {
          setPortalData([...portalData, ...data]);
          fetchData();
        })
        .catch((err) => console.log(err));

      modalRef.current.style.display = "none";
      setShowModal({ add: false });
      setUserData({
        Name: "",
        Email: "",
        Phone: "",
        City: "",
        Country: "",
      });
    }
  };

  const deleteAgency = (id) => {
    length--;
    fetch(`https://api.airtable.com/v0/appLAnzH9mo92cmYc/customers/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer keyORrZt08dnm2627",
      },
    }).then((res) => res.status === 200 && fetchData());
  };

  const updateAgencyData = (data) => {
    setEditData({
      id: data.id,
      UName: data.fields.Name,
      UEmail: data.fields.Email,
      UPhone: data.fields.Phone,
      UCity: data.fields.City,
      UCountry: data.fields.Country,
    });
  };

  const updateAgency = (e) => {
    e.preventDefault();
    fetch("https://api.airtable.com/v0/appLAnzH9mo92cmYc/customers", {
      method: "PATCH",
      headers: {
        Authorization: "Bearer keyORrZt08dnm2627",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            id: editData.id,
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
    }).then((res) => res.status === 200 && fetchData());

    modalRef.current.style.display = "none";
    setShowModal({ update: false });
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
  let filteredData = portalData;
  const handleSortBy = async (sort) => {
    if (sort === "#") {
      sort = "Id";
    }
    return await fetch(
      `https://api.airtable.com/v0/appLAnzH9mo92cmYc/customers?sort%5B0%5D%5Bfield%5D=${sort}&sort%5B0%5D%5Bdirection%5D=${
        sortBy.asc ? "asc" : "desc"
      }`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer keyORrZt08dnm2627",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPortalData(data.records);
      });
  };

  if (searchValue !== "") {
    filteredData = portalData.filter((record) => {
      return record.fields[searchBy]
        .toLowerCase()
        .startsWith(searchValue.toLowerCase());
    });
  }
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const debouncedSearch = React.useCallback(debounce(handleChange, 300), []);

  return (
    <Wrapper>
      <LeftSection>
        <Categories>
          {categories.map((category, i) => {
            return (
              <List
                key={i}
                style={{
                  background: category.name === "Agency" ? "#ccc" : "",
                  color: category.name === "Agency" ? "#800080" : "",
                  borderRadius:
                    category.name === "Agency" ? "50px 0px 0px 50px" : "",
                }}
              >
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
            justifyContent: "space-between",
            height: "40px",
            alignItems: "center",
            margin: "3% 4%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <i className="bi bi-person-circle" style={{ fontSize: "50px" }}></i>
            <span style={{ paddingLeft: "20%", fontSize: "15pt" }}>User</span>
          </div>
          <SearchDivision>
            <SearchInput
              type="text"
              placeholder={`Search By ${searchBy}`}
              onChange={debouncedSearch}
            />
            <Dropdown onClick={(e) => setSearchBy(e.target.value)}>
              <option value="Name">Name</option>
              <option value="Email">Email</option>
              <option value="City">City</option>
              <option value="Country">Country</option>
            </Dropdown>
          </SearchDivision>
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
              setShowModal({ add: true });
              setTimeout(() => handleModal(), 0);
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
                      onChange={(e) =>
                        setUserData({ ...userData, Name: e.target.value })
                      }
                      required
                    />
                  </InputItems>
                  <InputItems>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      onChange={(e) =>
                        setUserData({ ...userData, Email: e.target.value })
                      }
                      required
                    />
                  </InputItems>
                  <InputItems>
                    <Label>Phone</Label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone"
                      onChange={(e) =>
                        setUserData({ ...userData, Phone: e.target.value })
                      }
                      maxLength={10}
                      required
                    />
                  </InputItems>
                  <InputItems>
                    <Label>City</Label>
                    <Input
                      type="text"
                      placeholder="Enter your city"
                      onChange={(e) =>
                        setUserData({ ...userData, City: e.target.value })
                      }
                      required
                    />
                  </InputItems>
                  <InputItems>
                    <Label>Country</Label>
                    <Input
                      type="text"
                      placeholder="Enter your country"
                      onChange={(e) =>
                        setUserData({ ...userData, Country: e.target.value })
                      }
                      required
                    />
                  </InputItems>
                  <SubmitButton type="submit" onClick={(e) => addAgency(e)}>
                    Submit
                  </SubmitButton>
                </form>
              </ModalContent>
            </ModalBox>
          ) : showModal.update ? (
            <Modal
              modalRef={modalRef}
              updateAgency={updateAgency}
              editData={editData}
              setEditData={setEditData}
            />
          ) : (
            ""
          )}
          <Table>
            {filteredData.length !== 0 ? (
              <React.Fragment>
                <thead>
                  {titles.map((title, i) => (
                    <Th
                      key={i}
                      onClick={() => {
                        handleSortBy(title);
                        setSortBy({ asc: !sortBy.asc, title: title });
                      }}
                    >
                      {title}
                      <i
                        className={
                          sortBy.icon ||
                          `bi bi-arrow-${
                            sortBy.asc && title === sortBy.title ? "down" : "up"
                          }`
                        }
                      ></i>
                    </Th>
                  ))}
                  <Th>Action</Th>
                </thead>
                <tbody>
                  {filteredData
                    .slice(pagination.startIndex, pagination.endIndex)
                    .map((field) => {
                      return (
                        <tr
                          key={field.id}
                          style={{
                            borderBottom: "1px solid #800080",
                            height: "70px",
                            width: "100%",
                          }}
                        >
                          <td>{field.fields.Id}</td>
                          <td>{field.fields.Name}</td>
                          <td>{field.fields.Email}</td>
                          <td>{field.fields.Phone}</td>
                          <td>{field.fields.City}</td>
                          <td>{field.fields.Country}</td>
                          <td>
                            <ActionIcon
                              className="bi bi-pencil-square"
                              onClick={() => {
                                setShowModal({ update: true });
                                setTimeout(() => handleModal(), 0);
                                updateAgencyData(field);
                              }}
                            ></ActionIcon>
                            <ActionIcon
                              className="bi bi-trash"
                              onClick={() => deleteAgency(field.id)}
                            ></ActionIcon>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </React.Fragment>
            ) : (
              <h3>No matches found</h3>
            )}
          </Table>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handlePrevious} disabled={currentPage === 1}>
            Previous
          </Button>
          <span
            style={{
              display: "flex",
              padding: "0 1%",
              alignItems: "center",
              height: "50px",
            }}
          >
            {currentPage}
          </span>
          <Button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(length / showPerPage)}
          >
            Next
          </Button>
        </div>
      </RightSection>
    </Wrapper>
  );
};

export default Portal;
