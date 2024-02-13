import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo2 from "./../../assets/logo2.png"
import './navs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import "./navs"

const Nav2 = () => {
    return (
        <Nav style={{width:"2000px",height:"115px",position:"absolute",marginRight:"50px",marginLeft:"20px",left:"0px",top:"80px"}}fill variant="" defaultActiveKey="/home" className="custom-nav">
            <Nav.Item>
                <div className="coming-soon-container">
                    <span className="span1">Coming Soon</span>
                    <Nav.Link eventKey="link-4" className="nav-link">Tranding</Nav.Link>
                </div>
            </Nav.Item>
            <div className="separator"></div>
            <Nav.Item>
                <div className="coming-soon-container">
                    <span className="span1">Coming Soon</span>
                    <Nav.Link eventKey="link-1" className="nav-link">Automation</Nav.Link>
                </div>
            </Nav.Item>
            <div className="separator"></div>
            <Nav.Item>
                <div className="coming-soon-container">
                    <span className="span1">Coming Soon</span>
                    <Nav.Link eventKey="link-2" className="nav-link">Portfolio</Nav.Link>
                </div>
            </Nav.Item>
            <div className="separator"></div>
            <Nav.Item>
                <div className="coming-soon-container">
                    <Nav.Link eventKey="link-3" className="nav-link">Alerts</Nav.Link>
                </div>
            </Nav.Item>
            <div className="separator"></div>
            <Nav.Item>
                <div className="coming-soon-container">
                    <Nav.Link eventKey="link-4" className="nav-link">Trending</Nav.Link>
                </div>
            </Nav.Item>
        </Nav>
    );
}

export default Nav2;