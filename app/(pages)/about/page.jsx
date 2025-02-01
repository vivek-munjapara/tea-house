import Headname from '/app/components/page/Pageheader'
import FetchData from '/app/components/Fetchdata'
import Abouthome from '/app/components/home/Abouthome';


const  Aboutpage = async () => {
  const Pagetitlesec =        await FetchData('page/all');
  return (
    <>
      <Headname data={Pagetitlesec.aboutpage}/>
      <div className="mt-5"><Abouthome /></div>
    </>
  )
}

export default Aboutpage 