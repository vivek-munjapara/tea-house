"use client"
import WOW from 'react-wow';
import Contactline from '/app/components/home/Contactline'

const Contacttitle = ({data}) => {
  return (
   <WOW animation='fadeInUp' delay="0.1s">
     <div className="section-title text-center mx-auto " style={{maxWidth : "500px"}}>
        <p className="fs-5  fst-italic text-primary">{data.secname}</p>
        <h1 className="display-6">{data.sectitle}</h1>
     </div>
     </WOW>
  )
}

export default Contacttitle