import Headname from '/app/components/page/Pageheader'
import FetchData from '/app/components/Fetchdata'
import Error from '/app/components/page/Error'

const  Errorpage = async () => {
  const Pagetitlesec =        await FetchData('page/all');
  return (
    <>
    <Headname data={Pagetitlesec.errorpage}/>
    <Error />
    </>
  )
}

export default Errorpage