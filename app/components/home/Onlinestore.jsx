"use client"
import Link from 'next/link'
import Image from 'next/image'
import WOW from 'react-wow'
import {FaStar}  from 'react-icons/fa'

const Onlinestore = ({data}) => {
  const storeinfo= data.store; 
  return (
    <div className="container-xxl py-5">
        <div className="container">
        <WOW animation='fadeInUp' delay={`0.1s`}>
            <div className="section-title text-center mx-auto" style={{maxWidth:"500px"}}>
                <p className="fs-5  fst-italic text-primary">{storeinfo.secname}</p>
                <h1 className="display-6">{storeinfo.sectitle}</h1>
            </div>
            </WOW>
            <div className="row g-4">
          {storeinfo.storeproduct.map((item, i) =>
            <WOW animation='fadeInUp' delay={`0.${i+1}s`} key={i}>
              <div className="col-lg-4 col-md-6 " >
                <div className="store-item position-relative text-center">
                  <Image className="img-fluid" src={item.image} alt="" width={408} height={272}/>
                    <div className="p-4">
                      <div className="text-center mb-3">
                        {item.star.map((star,i) =>
                          <FaStar className=" text-primary" key={i}/>
                        )}
                      </div>
                      <h4 className="mb-3">{item.name}</h4>
                      <p>{item.discription}</p>
                      <h4 className="text-primary">{item.price}</h4>
                    </div>
                    <div className="store-overlay">
                      <a href="/store" className="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i className="fa fa-arrow-right ms-2"></i></a>
                      <a href="/store" className="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i className="fa fa-cart-plus ms-2"></i></a>
                    </div>
                </div>
              </div>
            </WOW>
          )}
                {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="store-item position-relative text-center">
                        <img className="img-fluid" src="img/store-product-2.jpg" alt="">
                        <div className="p-4">
                            <div className="text-center mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                            <h4 className="mb-3">Green tea tulsi</h4>
                            <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                            <h4 className="text-primary">$19.00</h4>
                        </div>
                        <div className="store-overlay">
                            <a href="" className="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i className="fa fa-arrow-right ms-2"></i></a>
                            <a href="" className="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i className="fa fa-cart-plus ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="store-item position-relative text-center">
                        <img className="img-fluid" src="img/store-product-3.jpg" alt="">
                        <div className="p-4">
                            <div className="text-center mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                            <h4 className="mb-3">Instant tea premix</h4>
                            <p>Aliqu diam amet diam et eos. Clita erat ipsum lorem erat ipsum lorem sit sed</p>
                            <h4 className="text-primary">$19.00</h4>
                        </div>
                        <div className="store-overlay">
                            <a href="" className="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i className="fa fa-arrow-right ms-2"></i></a>
                            <a href="" className="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i className="fa fa-cart-plus ms-2"></i></a>
                        </div>
                    </div>
                </div> */}
                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <Link href={'/store'} className="btn btn-primary rounded-pill py-3 px-5">{storeinfo.seccta}</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Onlinestore