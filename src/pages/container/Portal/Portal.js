import { debounce, filter, method } from "lodash";
import React, { useCallback } from "react";
import Modal from "../Modal/Modal";
import {
  ActionIcon,
  AddAgency,
  AddButton,
  Button,
  Categories,
  Close,
  ActionButtons,
  Dropdown,
  HeaderSection,
  MiddleSection,
  Icon,
  Input,
  InputItems,
  Label,
  LeftSection,
  List,
  Tr,
  ModalBox,
  ModalContent,
  RightSection,
  UpperSection,
  SearchDivision,
  SearchInput,
  SubmitButton,
  Table,
  Th,
  Wrapper,
  UserInfo,
  UserButton,
  PageCount,
} from "./Portal.styled";

const Portal = ({ setShowActive }) => {
  const [portalData, setPortalData] = React.useState([]);
  const modalRef = React.useRef();
  const btnRef = React.useRef();
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
    UPassword: "",
  });
  const [showModal, setShowModal] = React.useState({
    add: false,
    update: false,
    updateUser: false,
  });
  const [sortBy, setSortBy] = React.useState({
    asc: true,
    icon: "bi bi-arrow-up",
    title: "",
  });

  const [searchBy, setSearchBy] = React.useState("Name");
  const [searchValue, setSearchValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentUser, setCurrentUser] = React.useState({});
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

  const getUserDetails = useCallback(() => {
    const getUser = localStorage.getItem("active");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setCurrentUser(user);
    }
  }, [localStorage.getItem("active")]);

  React.useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

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

  const addAgency = (e) => {
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
  let filteredData = portalData;
  if (searchValue !== "") {
    filteredData = filteredData.filter((record) => {
      return record.fields[searchBy]
        .toLowerCase()
        .startsWith(searchValue.toLowerCase());
    });
  }
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const debouncedSearch = React.useCallback(debounce(handleChange, 300), []);
  const handleLogout = () => {
    setShowActive(false);
    localStorage.removeItem("active");
  };

  const updateUser = (e, details) => {
    e.preventDefault();
    let { name, phone, email, city, country, password } = details;

    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
      if (users[i] !== null && users[i].name === currentUser.name) {
        (users[i].name = name),
          (users[i].phone = phone),
          (users[i].email = email),
          (users[i].city = city),
          (users[i].country = country),
          (users[i].password = password);
      }
    }

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("active", JSON.stringify(details));
    modalRef.current.display = "none";
    setShowModal({ updateUser: false });
  };

  return (
    <Wrapper>
      <LeftSection>
        <Categories>
          {categories.map((category, i) => {
            return (
              <List key={i} category={category}>
                <Icon className={category.icon}></Icon>
                {category.name}
              </List>
            );
          })}
        </Categories>
      </LeftSection>
      <RightSection>
        <UpperSection>
          <UserInfo>
            <i className="bi bi-person-circle" style={{ fontSize: "50px" }}></i>
            <UserButton
              onClick={() => {
                setShowModal({ updateUser: true });
                setTimeout(() => handleModal(), 0);
              }}
            >
              {currentUser.name}
              {console.log(currentUser.name)}
            </UserButton>
          </UserInfo>
          {showModal.updateUser && (
            <Modal
              title="User"
              modalRef={modalRef}
              onUpdate={updateUser}
              currentUser={currentUser}
            />
          )}
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
        </UpperSection>
        <MiddleSection>
          <ActionButtons>
            <AddButton
              onClick={() => {
                setShowModal({ add: true });
                setTimeout(() => handleModal(), 0);
              }}
            >
              Add Agency
            </AddButton>
            <Button onClick={handleLogout} title="Logout">
              Logout
            </Button>
          </ActionButtons>
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
              title="Agency"
              modalRef={modalRef}
              onUpdate={updateAgency}
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
                        <Tr key={field.id}>
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
                        </Tr>
                      );
                    })}
                </tbody>
              </React.Fragment>
            ) : (
              <h3>
                No {searchBy.charAt(0).toLowerCase().concat(searchBy.slice(1))}{" "}
                matches found
              </h3>
            )}
          </Table>
        </MiddleSection>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            ref={btnRef}
            title="Pagination"
            btnRef={btnRef}
          >
            <i className="bi bi-arrow-left"></i>
          </Button>
          <PageCount>{currentPage}</PageCount>
          <Button
            onClick={handleNext}
            ref={btnRef}
            btnRef={btnRef}
            title="Pagination"
            disabled={
              currentPage === Math.ceil(portalData.length / showPerPage)
            }
          >
            <i className="bi bi-arrow-right"></i>
          </Button>
        </div>
      </RightSection>
    </Wrapper>
  );
};

export default Portal;