"use client"
import Image from "next/image"
import Link from "next/link"
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
//import LoadingPage from '../../loading';
//import React, { useState, useEffect } from 'react'



const Heroslider = ({data}) => {
   const slideinfo = data.slideitem;
	// const [slideinfo , setSlideinfo] = useState(null);
	// //const [loading, setLoading] = useState(true);

   // useEffect(async () => {
   //    const res = await fetch('http://localhost:3000/api/home/corosual');
   //    const slider = await res.json();
   //    setSlideinfo(slider.slideitem);
   //    //setLoading(false);
   // }, []);
   // console.log(slideinfo)
	// if (loading) {
	// 	return <LoadingPage />;
	//  }	
	return (
		<div className="container-fluid px-0 mb-5">
			<div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
				<div className="carousel-inner">
               {/* {console.log(slideinfo)} */}
					<Carousel> 
                  {slideinfo.map((item, i) =>
							<Carousel.Item className="" key={i}>
								<Image className="w-100" src={item.slideimg} width={1520} height={855} alt="Image" loading = 'lazy' />
								<Carousel.Caption>
									<Container>
										<div className="row justify-content-center">
											<div className="col-lg-8 text-center">
												<p className="fs-4 text-white animated zoomIn"  dangerouslySetInnerHTML={{ __html: item.toptitle}}></p>
												<h1 className="display-1 text-dark mb-4 animated zoomIn">{item.slidetitle}</h1>
												<Link href="/store" className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">{item.buttontxt}</Link>
											</div> 
										</div>
									</Container>
								</Carousel.Caption>
							</Carousel.Item>
						)}
					</Carousel> 
				</div>
			</div>
		</div>
	)
}

export default Heroslider