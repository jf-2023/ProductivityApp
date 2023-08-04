import React from "react";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BsPlusCircleFill, BsDashCircle } from "react-icons/bs";

export default function Practice() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function Increase1() {
    setCount1(count1 + 1);
  }

  function Decrease1() {
    setCount1(count1 === 0 ? 0 : count1 - 1);
  }

  function Increase2() {
    setCount2(count2 + 1);
  }

  function Decrease2() {
    setCount2(count2 ===0 ? 0: count2 - 1);
  }

  const generalAd = 28 * count1;
  const earlyAd = 10 * count2;
  const subTotal = generalAd + earlyAd;
  const fee = ((count1 + count2) * 3.49).toFixed(2);
  const totalPrice = (parseFloat(subTotal) + parseFloat(fee)).toFixed(2);

  return (
    <div className="container">
      <Row>
        <Col>
          <a href="" className="custom-link">
            <FaArrowLeftLong />&nbsp; 
            Continue shopping
          </a>
          <hr class="my-2"></hr>
            <div>
                <h6>Available Tickets</h6>
                <p>There are 2 tickets group(s) for you to choose from.</p>
            </div>
            <div className="card" style={{ width: "24rem" }}>
                <div className="card-body">
                    <h5 className="card-title">General Admission</h5>
                        <button onClick={Decrease1} className="icon-button">
                            <BsDashCircle />
                        </button>
                        <strong> {count1} </strong>
                        <button onClick={Increase1} className="icon-button">
                            <BsPlusCircleFill />
                        </button>
                    <hr></hr>
                    <div>
                        <strong>$28</strong>
                    </div>
                    <div>
                        <small className="text-muted">+ $2.99</small>
                    </div>
                    <div>
                        <small className="text-muted">Sale ends on Jul 23, 2023</small>
                    </div>
                </div>
            </div>
            <div className="card" style={{ width: "24rem", marginTop: "20px" }}>
                <div className="card-body">
                    <h5 className="card-title">Early Bird Admission</h5>
                        <button onClick={Decrease2} className="icon-button">
                            <BsDashCircle />
                        </button>
                    <strong> {count2} </strong>
                        <button onClick={Increase2} className="icon-button">
                            <BsPlusCircleFill />
                        </button>
                    <hr></hr>
                    <div>
                        <strong>$10</strong>
                    </div>
                    <div>
                        <small className="text-muted">+ $2.99</small>
                    </div>
                    <div>
                        <small className="text-muted">Sale ends on Jul 23, 2023</small>
                    </div>
                </div>
            </div>
        </Col>
        <Col>
          <div className="card mb-3" style={{ width: "20rem", marginTop: "35px"  }}>
            <div class="card bg-dark text-black">
              <img class="card-img-top"
                src="https://gifdb.com/images/high/anime-dance-umaru-chan-party-lt3zld52zk3pke7m.gif" alt="Card image cap"></img>
              <div class="card-img-overlay">
                <h1 class="card-title">ILLUMINATED</h1>
                <h3 class="card-title">BLACK LIGHT party</h3>
                <h4 class="card-title">JULY 22ND</h4>
              </div>
            </div>
            <div class="card-body">
              <h6 class="card-subtitle">
                <small>Order Summary:</small>
              </h6>
              <p class="card-text">
                <Row>
                    <Col md={8}><strong> x{count1} General Admission </strong></Col>
                    <Col><strong> ${generalAd} </strong></Col>
                </Row>
              </p>
              <p class="card-text">
              <Row>
                    <Col md={8}><strong> x{count2} Early Bird Admission </strong></Col>
                    <Col><strong> ${earlyAd} </strong></Col>
                </Row>
              </p>
              <hr />
              <p class="card-text">
                <small class="text-muted">
                    <Row>
                        <Col md={8}>Subtotal</Col>
                        <Col>${subTotal}</Col>
                    </Row>
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                    <Row>
                        <Col md={8}>Fee</Col>
                        <Col>${fee}</Col>
                    </Row>
                </small>
              </p>
              <p class="card-text">
                <strong class="text-muted">
                    <Row>
                        <Col md={8}>Total</Col>
                        <Col>${totalPrice}</Col>
                    </Row>
                </strong>
              </p>
              <button type="button" className="btn btn-warning btn-lg" style={{ width: '100%' }}>
                <Row>
                    <Col md={6}>Checkout</Col>
                    <Col><FaArrowRightLong /></Col>
                </Row>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
