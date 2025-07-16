import React from "react";
import Container from 'react-bootstrap/Container';  
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
import img4 from '../image/img4.jpg';
import { TfiAngleDoubleRight } from "react-icons/tfi";




function Image() {

    return (
    
      <div className="xl p-5 text-white bg-secondary">  
      <Container>
        <Row>
            
          <div className="container bg-img">
            <h1>
              <span className="welcom">Try Our Latest  </span>
              <span>Dosa Varieties!</span>
            </h1>

            <h3>
                <span className="">New Flavors, </span>
                <span className="">New Experience</span>
                <span className="">|</span>
            </h3>
        <br /><br />
            <div className="d-flex justify-content-between text-center gap-3 p-3">
        
            <span className="bg-img rounded img-thumbnail">
                <img src={img1} alt="" className="wit-img"/>
            </span>
            <span className="bg-img rounded img-thumbnail">
                 <img src={img2} alt="" className="wit-img" />
            </span>
            <span className="bg-img rounded img-thumbnail">
                 <img src={img3} alt="" className="wit-img"/>
            </span>
            <span className="bg-img rounded img-thumbnail">
                 <img src={img4} alt="" className="wit-img"/>
            </span>
        </div>
        </div>
        </Row>


        <Row className="bg-dark p-5 text-white">
            <Col>
              
                <div className="welcom fs-m">
                    <h4>after massive success in surat </h4>
                </div>
                <div>
                  <h1 className="d-flex flex-column align-items-center">
                    <span className="welcom fs-s">We have  </span>
                    <span className="fst-italic">launched</span>
                  </h1>
                </div>
                <div className="fs-5"> 
					our new location in  Nana Varachha Dhal , <br />Piplod Dumas Road , Vesu main road								
                </div>
                <div className="mt-3 d-flex justify-content-center ">
                  <button className="rounded p-3 bg-col text-white fw-bold"> VIEW MORE <TfiAngleDoubleRight /></button>
                </div>
              
            </Col>
            <Col>
                <img src="https://dosacharcoal.com/wp-content/uploads/2022/05/masala-dosa2-removebg-preview-e1651476144971.png" alt="" />
            </Col>
        </Row>
      


      <Row>
        <Col className="bg-col">
            
              <div className="p-5 fst-italic">
              <h1>
                <span className="text-black ">Our</span>
                <span> Menu</span>
              </h1>
            </div>
        </Col>
      </Row> 


      <Row className="bg-col text-white p-2">
        <Col>
          <div className="bg-col bg-dark">
            <span className="fs-3">Traditional & <br /> Fancy Paper</span>
          </div>
            <div className="text-black p-5 d-grid">
              <ul className="list-unstyled fs-5 ">
                <li><a href=""></a> Butter Paper  </li>
                <li><a href=""></a> Nylon paper  </li>
                <li><a href=""></a> Baby Paper </li>
                <li><a href=""></a> Garlic paper  </li>  
                <li><a href=""></a> Paneer Paper </li>
                <li><a href=""></a> Masala Paper  </li>
                <li><a href=""></a> Cheese Paper  </li>
                <li><a href=""></a> Garlic Cheese Paper </li>
                <li><a href=""></a> Chocolate Paper  </li>
                <li><a href=""></a> Mukhwas Paper  </li>
                <li><a href=""></a> Cheese Chilli Silencer Paper </li>
              </ul>
            </div>
        </Col>
        <Col>
            <div className="bg-col bg-dark">
              <span className="fs-3">Traditional Dosa, <br />Salad & Bevrages</span>
            </div>
            <div className="text-black p-5 d-grid justify-content-center">
              <table className="table-borderless">
                <ul className="list-unstyled fs-5 0 00">
                <li><a href=""></a> Masala Dosa </li>
                <li><a href=""></a> Paneer Masala dosa  </li>
                <li><a href=""></a> Cheese Masala Dosa </li>
                <li><a href=""></a> sweetcorn paneer dosa </li>  
                <li><a href=""></a> sweetcorn cheese dosa </li>
                <li><a href=""></a> palak paneer dosa </li>
                <li><a href=""></a> cheese palak dosa  </li>
                <li><a href=""></a> Gini Roll  </li>
                <li><a href=""></a> Butter Milk </li>
                <li><a href=""></a> Mineral water </li>
                <li><a href=""></a> Cold Drink (200 ML) </li>
              </ul>
              </table>
            </div>
        </Col>
      </Row>
      </Container>

    </div>
  );
}



export default Image;