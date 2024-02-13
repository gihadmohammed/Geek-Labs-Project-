import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo2 from "./../../assets/logo2.png"
import ICON from "./../../assets/Icon.png"
import avatar from "./../../assets/avatar.png"
import down from "./../../assets/chevron-down.png"

import './navs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navs =()=>{
    return(
        <Navbar className="navbar" style={{width:"2000px",position:"absolute",left:"0px"}}>
          <Navbar.Brand href="#home">
            <img
              src={logo2}
              width="300"
              height="300"
    
              className=""
              alt="React Bootstrap logo"
            />

          </Navbar.Brand>
     
       <Container fluid  className="search" style={{}}>
        <Form inline>
          <Row>
            <Col xs="auto">

              <Form.Control
                type="text"
                placeholder="Search"
                className="nm"
              style={{borderRadius:"40px",width:"388px"}}/>
              
            </Col>
            
                  </Row>
        </Form>
        <div className="sp"></div>

        <Container className="avatarContainer" >
            <row>
        <img
              src={ICON}
              width="30"
              height="30"
    
              className="icon"
              alt="React Bootstrap logo"
            /> 
          
            <img
              src={avatar}
              width="30"
              height="30"
            
              className="avatar"
              alt="React Bootstrap logo"
            />  
            <tr  style={{marginRight:"30px"}}>
  <td style={{marginRight:"30px"}}>
    <span style={{marginLeft:"30px",fontWeight:"700",fontSize:"14px",color:"#404040"}}>Moni Roy</span>
    <br/>
    <span style={{marginLeft:"30px",fontWeight:"600",fontSize:"12px",color:"#565656"}}>Admin</span>
  </td>
</tr>
<img
              src={down}
              width="7"
              height="7"
            className="av1"
              alt="React Bootstrap logo"
            /> 
</row>

            </Container>
        </Container> 
        
      </Navbar>
      
    )
}
export default Navs;