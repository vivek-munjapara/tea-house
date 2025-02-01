"use client"
import Image from 'next/image'
import WOW from 'react-wow'
import "slick-carousel/slick/slick.css"
import "../../style/slick-theme.css"
import Slider from "react-slick"


const Testimonial = ({ data }) => {
  const testimonial = data.tetimonials;
  const settings = {
    arrows: false,
    autoplay: false,
    speed: 1000,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="testimonial">
      <div className="py-5 my-5">
        <div className="container-fluid py-5 mb-5">
          <div className="container py-5">
            <WOW animation='fadeInUp' delay="0.1s">
              <div className="section-title text-center mx-auto " style={{ maxWidth: "500px" }}>
                <p className="fs-5  fst-italic text-primary secname">{testimonial.secname}</p>
                <h1 className="display-6">{testimonial.sectitle}</h1>
              </div>
            </WOW>
            <WOW animation='fadeInUp' delay="0.5s">
              <div className="owl-carousel testimonial-carousel">
                <Slider {...settings}>
                  {testimonial.clientwords.map((item, index) =>
                    <div className="testimonial-item p-4 p-lg-5 d-block" key={index}>
                      <p className="mb-4">{item.discription}</p>
                      <div className="d-flex align-items-center justify-content-center">
                        <Image className="img-fluid flex-shrink-0" src={item.image} alt="" width={60} height={60} />
                        <div className="text-start ms-3">
                          <h5>{item.name}</h5>
                          <span className="text-primary">{item.post}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </Slider>
              </div>
            </WOW>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial