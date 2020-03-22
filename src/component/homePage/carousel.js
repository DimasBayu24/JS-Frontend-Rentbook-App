import React from 'react'
// import './carousel.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
const CarouselComponent = () => {
    return (
        <div>
            <Carousel centered
                infinite
                arrows
                slidesPerPage={2}>
                {/* eslint-disable-next-line  */}
                <img width='600px' height='400px' src='https://vetstreet.brightspotcdn.com/dims4/default/3701901/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F38%2Facd450a7fd11e0a0d50050568d634f%2Ffile%2FSaluki-3-645mk-62811.jpg' />
                {/* eslint-disable-next-line  */}
                <img width='600px' height='400px' src='https://foodevolution.com.ph/wp-content/uploads/2019/02/Maya-the-Polar-Bear.jpg' />
                {/* eslint-disable-next-line  */}
                <img width='600px' height='400px' src='https://hellobark.com/wp-content/uploads/venus-chihuahua-1.jpg' />
                {/* <div className="card-carousel-wrapper js-flickity"
                data-flickity-options='{ "freeScroll": true, "wrapAround": true }'>
                <div className="carousel-card">
                    <a href="index-collection.html" className="carousel-image-card">
                        <img src={require("./storageImg/carousel1.png")} alt=""/>
                    </a>
                    <div className="carousel-text">
                        <h2>Dilan 1990</h2>
                        <p>Pidi Baiq</p>
                    </div>

                </div>

                <div className="carousel-card">
                    <div className="carousel-image-card">
                        <img src={require("./storageImg/carousel2.png")} alt=""/>

                    </div>
                    <div className="carousel-text">
                        <h2>Ubur-Ubur Lembur</h2>
                        <p>Raditya Dika</p>

                    </div>
                </div>

                <div className="carousel-card">
                    <div className="carousel-image-card">
                        <img src={require("./storageImg/carousel1.png")} alt=""/>

                    </div>
                    <div className="carousel-text">
                        <h2>Laskar Pelangi</h2>
                        <p>Andrea hirata</p>
                    </div>
                </div>

            </div> */}
            </Carousel>
        </div>
    )
}

export default CarouselComponent