import React from "react";
import "./carousell.css"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousell = () => {
  return (
    <div className="caraousel">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={3}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}><img width={"1000px"} src="https://blog.hubspot.com/hubfs/Site%20owners%20building%20carousel%20slider%20in%20Bootstrap%20CSS.jpg" alt="img"/></Slide>
          <Slide index={1}><img width={"1000px"} src="https://3.imimg.com/data3/GY/RI/MY-1811026/training-programme-500x500.jpeg" alt="img"/></Slide>
          <Slide index={2}><img  width={"1000px"} src="https://imageio.forbes.com/specials-images/imageserve/613ceac81c5a20aa3a0110ff/0x0.jpg?format=jpg&width=1200" alt="img"/></Slide>
        </Slider>
        
      </CarouselProvider>
    </div>
  );
};

export default Carousell;
