"use client"
import Link from 'next/link'
import WOW from 'react-wow';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
const Contactline = ({data}) => {
  return (
   <div className="row g-5">
   {data.map((item, i) =>
      <WOW animation='fadeInUp' delay={`0.${i + 3}s`}  key={i}>
         <div className="col-md-4 text-center ">
            <div className="btn-square mx-auto mb-3">
               {i == 0 ? <FaEnvelope className='contactico fa-2x text-white' /> : i == 1 ? <FaPhone className='contactico fa-2x text-white' /> :
                  i == 2 ? <FaMapMarkerAlt className='contactico fa-2x text-white' /> : ""}
            </div>
            {item.onelink ?
               <p className="mb-2"><Link className="text-dark" href={item.onelink}>{item.first}</Link></p> :
               <p className="mb-2">{item.first}</p>
            }
            {item.twolink ? <p className="mb-0"><Link className="text-dark" href={item.twolink}>{item.second}</Link></p> :
               <p className="mb-0">{item.second}</p>
            }
         </div>
      </WOW>
   )}

</div>
  )
}

export default Contactline