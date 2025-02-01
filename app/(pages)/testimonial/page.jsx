import Headname from '/app/components/page/Pageheader'
import FetchData from '/app/components/Fetchdata'
import Testimonial from '/app/components/home/Testimonial'

const  Testimonialpage = async () => {
  const Pagetitlesec =        await FetchData('page/all');
  const Testimonialdata =    await FetchData('home/testimonial');
  return (
    <>
    <Headname data={Pagetitlesec.testimonialpage}/>
    <Testimonial data={Testimonialdata} />  
    </>
  )
}

export default Testimonialpage 