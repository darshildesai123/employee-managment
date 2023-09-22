import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import styled from "styled-components";

function Header() {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser?.email);
    });
  }, []);

  function onLogout() {
    signOut(auth);
    navigate("/login");
  }

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link className="text-white text-decoration-none" to={"/"}>
            Navbar
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="text-white text-decoration-none" to={"/"}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link
            className="text-white text-decoration-none"
            href="/favorite"
          >
            Favorite
          </Nav.Link>
          <Nav.Link
            className="text-white text-decoration-none"
            href="/portfolio"
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            className="text-white text-decoration-none"
            href="/employee"
          >
            Employee
          </Nav.Link>
          <Nav.Link
            className="text-white text-decoration-none"
            href="/register"
          >
            Register
          </Nav.Link>
          <Nav.Link className="text-white text-decoration-none" href="/login">
            Login
          </Nav.Link>
        </Nav>
        {currentUser && (
          <Navbar className="justify-content-end">
            <Profile>
              {currentUser?.at(0)}
              <div className="profile-modal">
                <span onClick={onLogout}>Logout</span>
              </div>
            </Profile>
          </Navbar>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;

const Profile = styled.div`
  height: 40px;
  line-height: 40px;
  width: 40px;
  background: green;
  color: white;
  border-radius: 50%;
  text-transform: uppercase;
  cursor: pointer;

  .profile-modal {
    position: absolute;
    left: 0;
    bottom: -31px;
    padding: 5px 10px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    display: none;
    align-items: center;
  }
  &:hover {
    .profile-modal {
      display: block;
    }
  }
`;
