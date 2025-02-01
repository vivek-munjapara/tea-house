import Headname from '/app/components/page/Pageheader'
import FetchData from '/app/components/Fetchdata'
import Contacttitle from '/app/components/contact/Contacttitle'
import Contactline from '/app/components/home/Contactline'
import Contactform from '/app/components/contact/Contactform'

const Contactpage = async () => {
   const Pagetitlesec = await FetchData('page/all');
   const contactdata = await FetchData('page/contact');
   const Contactinfo =  await FetchData('home/contact');

   return (
      <>
         <Headname data={Pagetitlesec.contactpage} />
         
         <div className="container-xxl contact py-5">
            <div className="container">
               <Contacttitle data={contactdata.contactpage} />               
               <div className="mb-5"><Contactline data={Contactinfo.contact.channel}/></div>    
               <Contactform data={contactdata.contactpage}/>
            </div>
         </div>
      </>
   )
}

export default Contactpage