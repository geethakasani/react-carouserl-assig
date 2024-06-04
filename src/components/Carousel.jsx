import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

 
  nextSlide() {
    const { currentIndex } = this.state;
    const length = images.length;
    let nextIndex = currentIndex + 1;
    if (nextIndex > length - 1) {
      nextIndex = 0;
    }
    this.setState({
      currentIndex: nextIndex,
    });
  }

  previousSlide() {
    const { currentIndex } = this.state;
    const length = images.length;
    let nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
      nextIndex = length - 1;
    }
    this.setState({
      currentIndex: nextIndex,
    });
  }

  render() {
    const { currentIndex } = this.state;
    return (
      <div className="carousel-container">
        <div className="arrow-button-left">
          <ArrowBackIosIcon onClick={this.previousSlide} style={{ fontSize: 36, color: 'white', cursor: 'pointer' }} />
        </div>
        <div className="carousel-slider">
          <div
            className="carousel-slide-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
            {images.map((image, index) => (
              <div
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                key={index}
              >
                <img src={image.img} alt={image.title} />
                <div className="carousel-content">
                  <h2>{image.title}</h2>
                  <p>{image.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="arrow-button-right">
              <ArrowForwardIosIcon onClick={this.nextSlide} style={{ fontSize: 36, color: 'white', cursor: 'pointer' }} />
            </div>
      </div>
    );
  }
}

export default Carousel;