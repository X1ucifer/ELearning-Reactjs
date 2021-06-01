import React from 'react';
// import "./slider.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <>
        <Carousel {...settings} >
            <Wrap>
                <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TransformersTheLastKnight/41b16352-edaa-4590-b17b-156154f31306._UR3000,600_SX1500_FMwebp_.jpg" alt="home-hero" />
                {/* <div className="bottom"/> */}
            </Wrap>
            <Wrap>
                <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_JustAddMagicMysteryCity/079016c7-9cee-465b-83c3-bb272163d115._UR3000,600_SX1500_FMwebp_.jpg" />
                {/* <div className="bottom"/> */}
            </Wrap>
            <Wrap>
                <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Missionimpossible/53b434a4-5b03-441d-8c9a-d9ddec7883fa._UR3000,600_SX1500_FMwebp_.jpg" />
                {/* <div className="bottom"/> */}
            </Wrap>
            
        </Carousel>
       
        
        </>
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    margin-top: 8px;
    // overflow: hidden;


    .slick-dots li.slick-active button:before {
        color:white !important;
        font-size: 10px;
    }


    .slick-dots li button:before {
        font-size: 10px;
        color:white;
    }


    .slick-list{
        // overflow: visible;
        overflow: hidden;
    }

    .slick-prev {
        left: 3% !important;
        z-index: 1;
        
      }
      .slick-next {
        right: 3% !important;
        z-index: 1;
      }

      
      

    
`

const Wrap = styled.div`
    img{
        max-width: 100%;
        width: 100%;
        height: 100%;
        border-radius: 26px;
        border: 4px solid transparent;
        overflow: hidden;
    }
`

