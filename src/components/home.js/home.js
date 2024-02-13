import React from "react";
import Navs from "../Navs/navs";
import Nav2 from "../Navs/nav2";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import FilterForm from "./filter";
import Col from "react-bootstrap/esm/Col";
const Home = () =>{
    return(
        <Container>
        <Row>
        <Navs/>
        <Nav2/></Row>
       
        <FilterForm/>
        <FilterForm/>
        </Container>
        
    )
}
export default Home;