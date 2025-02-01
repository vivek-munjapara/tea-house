import Headname from '/app/components/page/Pageheader'
import FetchData from '/app/components/Fetchdata'
import Teamodel from '/app/components/home/Teamodel'

const  Features = async () => {
  const Pagetitlesec =        await FetchData('page/all');
  const Teamodalinfo =       await FetchData('home/teamodel');
  return (
    <>
    <Headname data={Pagetitlesec.featurespage}/>
    <div className="py-5"><Teamodel data={Teamodalinfo} /></div>
    </>
  )
}

export default Features 