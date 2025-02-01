"use client"
import WOW from 'react-wow';
import Contactline from '/app/components/home/Contactline'

const Contact = ({ data }) => {
   const contactinfo = data.contact;
   return (
      <div className="mb-5">
         <div className="container-xxl contact py-5">
            <div className="container">
               <WOW animation='fadeInUp' delay="0.1s">
                  <div className="section-title text-center mx-auto " style={{ maxWidth: "500px" }}>
                     <p className="fs-5 fst-italic text-primary">{contactinfo.secname}</p>
                     <h1 className="display-6">{contactinfo.sectitle}</h1>
                  </div>
               </WOW>
               <WOW animation='fadeInUp' delay="0.1s">
                  <div className="row justify-content-center ">
                     <div className="col-lg-8">
                        <p className="text-center mb-5">{contactinfo.secsubtitle}</p>
                        <Contactline data={contactinfo.channel} />
                     </div>
                  </div>
               </WOW>
            </div>
         </div></div>
   )
}

export default Contact