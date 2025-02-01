import Headname from '/app/components/page/Pageheader'
import FetchData from '/app/components/Fetchdata'
import Onlinestore from '/app/components/home/Onlinestore'

const  Storepage = async () => {
  const Pagetitlesec =        await FetchData('page/all');
  const Onlinestoreinfo =    await FetchData('home/store');
  return (
    <>
      <Headname data={Pagetitlesec.storepage}/>
      <div className="mb-5"><Onlinestore data={Onlinestoreinfo} /></div>
    </>
  )
}

export default Storepage 