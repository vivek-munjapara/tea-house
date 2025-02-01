"use client"
import Link from 'next/link'
import WOW from 'react-wow';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaAngleRight } from 'react-icons/fa';
import Loader from '../Loader';
import ScrollToTop from '../page/ScrolltopTop';

const Footer = ({ data }) => {
   const footerinfo = data.footer;
   return (
      <>
         {/* <Loader /> */}
         <WOW animation='fadeIn' delay="0.1s">
            <div className="container-fluid bg-dark footer py-5 ">
               <div className="container py-5">
                  <div className="row g-5">
                     <div className="col-lg-3 col-md-6">
                        <h4 className="text-primary mb-4">{footerinfo.one.title}</h4>
                        {footerinfo.one.contact.map((item, index) => {
                           let diricon = index == 0 ? <FaMapMarkerAlt className='text-primary me-3' /> : index == 1 ? <FaPhoneAlt className='text-primary me-3' /> : index == 2 ? <FaEnvelope className='text-primary me-3' /> : "";
                           return (
                              <p className="mb-2" key={index}>
                                 {item.link ?
                                    (<Link href={item.link} className='copyright'>{diricon} {item.directory}</Link>) :
                                    (<>{diricon}  {item.directory}</>)}
                              </p>
                           )
                        }
                        )}

                        <div className="d-flex pt-3">
                           {footerinfo.one.social.map((item, index) => {
                              let soscialico = index == 0 ? <FaTwitter /> : index == 1 ? <FaFacebookF /> : index == 2 ? <FaYoutube /> : index == 3 ? <FaLinkedinIn /> : "";
                              return (
                                 <Link className="btn btn-square btn-primary rounded-circle me-2 footercocial" href={item.link} key={index}>{soscialico}</Link>)
                           }
                           )}

                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <h4 className="text-primary mb-4">{footerinfo.two.title}</h4>
                        {/* {console.log(footerinfo.two.links)} */}
                        {footerinfo.two.links.map((item, i) =>
                           <Link className="btn btn-link" href={item.url} key={i}><FaAngleRight />{item.name}</Link>
                        )}

                     </div>
                     <div className="col-lg-3 col-md-6">
                        <h4 className="text-primary mb-4">{footerinfo.three.title}</h4>
                        {footerinfo.three.timing.map((item, i) =>
                           <div key={i}>
                              <p className="mb-1">{item.day}</p>
                              <h6 className="text-light">{item.time}</h6>
                           </div>
                        )}

                     </div>
                     <div className="col-lg-3 col-md-6">
                        <h4 className="text-primary mb-4">{footerinfo.four.title}</h4>
                        <p>{footerinfo.four.discription}</p>
                        <div className="position-relative w-100">
                           <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                           <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </WOW>
         <ScrollToTop />
      </>
   )
}

export default Footer
