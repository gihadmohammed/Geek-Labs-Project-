import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Container from "react-bootstrap/esm/Container";
import './filter.css'
import InputGroup from 'react-bootstrap/InputGroup';
import layer from "./../../assets/layer.png"
import down from "./../../assets/chevron-down.png"
import ticker from "./../../assets/ticker.png"
import contract from "./../../assets/contract.png"
import volume from "./../../assets/volume.png"
import risk from "./../../assets/risk.png"

import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';

const FilterForm = () => {
  const handleFilterSubmit = (event) => {
    event.preventDefault();
    // Handle filter submission logic here
  };

  return (
    <Container fluid className="form">
        
        <Row  >
        <Col>
      <Form onSubmit={handleFilterSubmit} className="filter-form">
        <h2 className="form-title">Filter</h2>

        <Form.Group className="mb-3" style={{border:"1px",borderBlockColor:"grey",padding:"10px" }}>
          <Form.Label htmlFor="disabledSelect" style={{color:"white",fontFamily:"Poppins",fontWeight:"semibold"}} >Industrey</Form.Label>
          <Form.Select class="d1" id="disabledSelect" style={{color:"white" ,backgroundColor:"#212121"}}>
            
            <option className="op" style={{color:"#D6D6D6" ,fontSize:"14px",fontFamily:"Poppins "}}> Health care.</option>
            <option className="op" style={{color:"#D6D6D6" ,fontSize:"14px",fontFamily:"Poppins "}}> Health care.</option>
            <option className="op" style={{color:"#D6D6D6" ,fontSize:"14px",fontFamily:"Poppins "}}>   Health care.</option>
          </Form.Select>
          <div style={{color:"#6B6B6B",fontFamily:"Poppins "}}>    Choose something.</div>
          <Form.Text className="text-muted">
            This is a disabled select menu.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" style={{border:"1px",borderBlockColor:"grey", padding:"10px"}}>
          <Form.Label htmlFor="disabledSelect" style={{color:"white",fontFamily:"Poppins "}} >Market Cap</Form.Label>
          <Form.Select class="d1" id="disabledSelect" style={{color:"white" ,backgroundColor:"#212121"}}>
            
            <option className="op" style={{fontFamily:"Poppins ",color:"#D6D6D6" ,fontSize:"14px"}}>Large-cap</option>
            <option className="op" style={{color:"#D6D6D6",fontFamily:"Poppins" ,fontSize:"14px"}}>Large-cap</option>
            <option className="op" style={{color:"#D6D6D6",fontFamily:"Poppins " ,fontSize:"14px"}}>Large-cap</option>
          </Form.Select>
          <div style={{color:"#6B6B6B",fontFamily:"Poppins"}}>    Press Apply to see changes.</div>
          <Form.Text className="text-muted">
            This is a disabled select menu.
          </Form.Text>
        </Form.Group>
      

        <Form.Group className="mb-3" style={{border:"1px",borderBlockColor:"grey",padding:"10px" }}>
        <Form.Label htmlFor="disabledSelect" style={{color:"white",fontFamily:"Poppins "}} >Risk</Form.Label>
        <Form.Select class="d1" id="disabledSelect" style={{color:"white" ,backgroundColor:"#212121"}}>
        <option className="op" style={{color:"#D6D6D6" ,fontSize:"14px",fontFamily:"Poppins ",marginBottom:"20px"}}>  Low Risk </option>
       <option className="op" style={{color:"#D6D6D6" ,fontSize:"14px",fontFamily:"Poppins "}}>   Mid Risk</option>
<option className="op" style={{color:"#D6D6D6" ,fontSize:"14px",fontFamily:"Poppins "}}>   High Risk</option>
          </Form.Select>
          <div style={{color:"#6B6B6B"}}>    Press Apply to see changes..</div>

          <Form.Text className="text-muted">
            This is a disabled select menu.
          </Form.Text>
        </Form.Group>
        <Button style={{height:"70.43px",width:"320.42px",backgroundColor:"#554DB7 ",Height:"70.43px !important",
top:"914.89px !important",
left:"102.78px !important",marginBottom:"20px",marginLeft:"20px",marginTop:"20px",
radius:"14px !important"}}variant="primary" type="submit">
          Add Filter
        </Button>
      </Form>
      </Col>
      <Col style={{backgroundColor:"#212121",marginLeft:"-940px",marginRight:"100px",Width:"800px !important",marginBottom:""}}>
      <div style={{   background: "linear-gradient(287.84deg, rgba(102, 126, 234, 0.231) 44.52%, rgba(144, 75, 162, 0) 71.09%), linear-gradient(0deg, #121213, #121213)",
  position:"relative",top:"20px",height:"auto",
         alignItems:"center",borderRadius:"10px",  border: "1px solid #D5D5D5 "

      }}> 
     <Row>
      <Col>
        <div style={{alignItems:"center",paddingleft:"80px", backgroundColor: "linear-gradient(287.84deg, rgba(102, 126, 234, 0.231) 44.52%, rgba(144, 75, 162, 0) 71.09%) linear-gradient(0deg, #D5D5D5, #D5D5D5) !important"}}>
          <img style={{ display:"inline-block",width: "41.8px", height: "33.66px",top: "420.16px", left: "733.61px",marginLeft:"20px" }}
          src={ticker}/>
          <p  style={{ display:"inline-block",fontSize:"20px",fontWeight:"400", paddingTop:"20px",color:"white"}}>$TSLA</p>
        </div>
      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        <div className="separator"></div>
      </Col>
      <Col>
      <div style={{alignItems:"center",paddingleft:"80px"}}>
          <img style={{ display:"inline-block",width: "41.8px", height: "33.66px",top: "420.16px", left: "733.61px",marginLeft:"20px" }}
          src={contract}/>
          <p  style={{ display:"inline-block",fontSize:"20px",fontWeight:"400", paddingTop:"20px",left:"20px",color:"white"}}>12.2%</p>
        </div>
      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        <div className="separator"></div>
      </Col>
      <Col>
      <div style={{alignItems:"center",paddingleft:"80px"}}>
          <img style={{ display:"inline-block",width: "41.8px", height: "33.66px",top: "420.16px", left: "733.61px",marginLeft:"20px" }}
          src={volume}/>
          <p  style={{ display:"inline-block",fontSize:"20px",fontWeight:"400", paddingTop:"20px",left:"20px",color:"white"}}>12.2%</p>
        </div>
      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        <div className="separator"></div>
      </Col>
      <Col>
      <div style={{alignItems:"center",paddingleft:"80px"}}>
          <img style={{ display:"inline-block",width: "41.8px", height: "33.66px",top: "420.16px", left: "733.61px",marginLeft:"20px" }}
          src={risk}/>
          <p  style={{ display:"inline-block",fontSize:"20px",fontWeight:"400", paddingTop:"20px",left:"20px",color:"white"}}>High Risk</p>
        </div>
      </Col>
    </Row>
        <p style={{padding:"20px",fontFamily:"Nunito Sans",fontWeight:"400",fontSize:"24px",lineHeight:"32px",color:"#FFFFFF"}}>
        Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.</p></div>
        
      <div style={{ backgroundColor:"#121213",position:"relative",top:"20px",height:"auto",
         alignItems:"center",borderRadius:"10px",  border: "1px solid #D5D5D5 "

      }}> 
        <p style={{padding:"20px",fontFamily:"Nunito Sans",fontWeight:"400",fontSize:"24px",lineHeight:"32px",color:"#FFFFFF"}}>
        X company released a short report on $XYZ, High IV option sales opps</p></div>
        
        <div style={{marginTop:"10px", backgroundColor:"#121213",position:"relative",top:"20px",height:"auto",
         alignItems:"center",borderRadius:"10px",  border: "1px solid #D5D5D5"

      }}> 
        <p style={{padding:"20px",fontWeight:"400",fontSize:"24px",lineHeight:"32px",color:"#FFFFFF"}}>
        $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.</p></div>
        <div style={{ backgroundColor:"#121213",position:"relative",top:"20px",height:"auto",
         alignItems:"center",borderRadius:"10px",  border: "1px solid #D5D5D5         "

      }}> 
        <p style={{padding:"20px",fontFamily:"Nunito Sans",fontWeight:"400",fontSize:"24px",lineHeight:"32px",color:"#FFFFFF"}}>
        $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails. </p></div>
        <div style={{ backgroundColor:"#121213",position:"relative",top:"20px",height:"auto",
         alignItems:"center",borderRadius:"10px",  border: "1px solid #D5D5D5         "

      }}> 
        <p style={{padding:"20px",fontFamily:"Nunito Sans",fontWeight:"400",fontSize:"24px",lineHeight:"32px",color:"#FFFFFF"}}>
        $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails. </p></div>
        
      </Col>
      </Row>
    </Container>
  );
};

export default FilterForm;