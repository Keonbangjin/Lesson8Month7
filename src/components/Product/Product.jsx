import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',

};
const Product = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel  afterChange={onChange}>
      <div>
        <h3 style={contentStyle}><img src="https://cdn.pixabay.com/photo/2018/02/21/03/15/bmw-m4-3169357_640.jpg" alt="bmw" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
export default Product;