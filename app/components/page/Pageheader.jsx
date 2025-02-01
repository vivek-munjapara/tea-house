"use client"
import Link from 'next/link'
import WOW from 'react-wow'
import Image from "next/image"  

const Pageheader = ({ data }) => {
   return (
      <WOW animation='fadeInUp' delay="0.1s">
         <div className="container-fluid page-header py-5 position-relative">
         <Image src="/carousel-1.jpg" alt="" className="secbgimg objimg" fill/>
            <div className="container text-center py-5">
               <WOW animation='slideInUp' delay="0.2s">
                  <h1 className="display-2 text-dark mb-4">{data.pagename}</h1>
               </WOW>
               <WOW animation='slideInUp' delay="0.4s">
                  <nav aria-label="breadcrumb ">
                     <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                        <li className="breadcrumb-item text-dark" aria-current="page">{data.pagebrad}</li>
                     </ol>
                  </nav>
               </WOW>
            </div>
         </div>
      </WOW>
   )
}

export default Pageheader
