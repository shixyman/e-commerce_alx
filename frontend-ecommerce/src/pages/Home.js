import React from 'react';
import { Container, Row,Form,Button,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div>
        <img src="" className="home-banner" />
        <div className="featured-products-container container mt-4">
            <h2>Last products</h2>
            {/*lasr products here */}
        </div>
        <div>
            <Link to="/category/all" style={{TextAlign:'right',display:'block',textDecoration:"none"}}>See more {">>"}</Link>
        </div>
        {/* sale banner */}
        <div className="sale_banner--container mt-4">
            <img src="" />
        </div>
        <div className="recent-products-container container mt-4">
            <h2>Categories</h2>
            <Row>
                
            </Row>
        </div>
    </div>
  )
}

export default Home