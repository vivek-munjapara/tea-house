import Headname from '/app/components/page/Pageheader'
import ProductsInfo from '/app/components/home/ProductsInfo'
import FetchData from '/app/components/Fetchdata'

const productspage = async () => {
  const Pagetitlesec =        await FetchData('page/all');
  const Productitems =        await FetchData('home/products');
  return (
    <>
      <Headname data={Pagetitlesec.productpage}/>
       <ProductsInfo data={Productitems}/>
    </>
  )
}

export default productspage