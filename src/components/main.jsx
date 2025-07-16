import React from "react";
import Container from 'react-bootstrap/Container';  
import img4 from '../image/New-Project-22.png';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import App from "../App.css";
import { TfiAngleDoubleRight } from "react-icons/tfi";


function MainDiv() {
  return (
    <div className="xl bg-dark text-white p-4">
      <div className="container">
        <Container className="my-5">
      <Row>
        <Col> 
          <img src={img4}  alt="Third slide" className="d-block w-100" />
        </Col>
        <Col className="align-items-center justify-content-center "> 
          <h1 className="text-center ">
            <span className="welcom">Welcome</span>
            <span> to Dosa Charcoal Restaurant</span>
          </h1>
          <br /><br />
          <div className="welcom">An authentic Multi-Cuisine and dining experience</div>
          <div>
            <p>novations has created an admired empire in the field of food and hospitality industry. It operates under the brand name &nbsp;
              <strong>"DOSA CHARCOAL"</strong>
              &nbsp;  also known as  &nbsp;
              <strong>DC</strong>
              &nbsp;  across Gujarat. It is headed by  &nbsp;
              <strong>Mr.Bharat Gangani</strong>
              &nbsp; , the very dynamic founder   &nbsp;
              <strong>chairman and managing director</strong>
              &nbsp;  of the group, who is also the sole promoter of vegetarian concept. The company is also headed by his brothers,  &nbsp;
              <strong>Mr. Paresh Gangani </strong>
              &nbsp; and  &nbsp;
              <strong>Mr. Mukesh Gangani </strong>
              &nbsp;  who lead the company as  &nbsp;
             <strong>executive directors.</strong>
              
            </p>
            </div>

            <div className="d-flex justify-content-center text-center">
              <button className="rounded p-3 bg-col text-white fw-bold">VIEW MORE <TfiAngleDoubleRight /></button>
            </div>
        </Col>
      </Row>
    </Container>


    
      </div>
    </div>
  );
}

export default MainDiv;