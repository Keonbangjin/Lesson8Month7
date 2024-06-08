import React, { useState } from 'react';
import { Carousel, Button } from 'antd';
import './Product.css';

const contentStyle = {
  margin: 0,
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#1890ff', // Changed background color back to blue
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Added state for current slide index

  const onChange = (current) => {
    console.log(current);
    setCurrentSlide(current);
  };

  const handleNext = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(2);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Carousel afterChange={onChange} autoplay>
        <div>
          <h3 style={contentStyle}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIvorljoerxcehlYLafth_FaJdWDg2WRL_A&s" alt="london" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src="https://t4.ftcdn.net/jpg/02/57/75/51/360_F_257755130_JgTlcqTFxabsIKgIYLAhOFEFYmNgwyJ6.jpg" alt="bridge" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src="https://t4.ftcdn.net/jpg/02/57/75/51/360_F_257755130_JgTlcqTFxabsIKgIYLAhOFEFYmNgwyJ6.jpg" alt="bridge" />
          </h3>
        </div>
      </Carousel>
      <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
        <Button type="primary" shape="circle" size="large" onClick={handlePrev}>
          Prev
        </Button>
      </div>
      <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
        <Button type="primary" shape="circle" size="large" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Product;
