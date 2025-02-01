import Headname from '/app/components/page/Pageheader'
import FetchData from '/app/components/Fetchdata'
import Articleinfo from '/app/components/home/Article'
import { Suspense } from 'react';
import Loader from '@/app/components/Loader';

const Acticle = async () => {
  const Pagetitlesec = await FetchData('page/all');
  const Article = await FetchData('home/article');
  //console.log(Pagetitlesec.articlepage)
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Headname data={Pagetitlesec.articlepage} />
        <div className="my-5"><Articleinfo data={Article} /></div>
      </Suspense>
    </>
  )
}

export default Acticle 