import Abouthome from "./components/home/Abouthome";
import Homeslider from "./components/home/Carousel";
import ProductsInfo from "./components/home/ProductsInfo";
import Articleinfo from "./components/home/Article";
import Teamodel from "./components/home/Teamodel";
import Onlinestore from "./components/home/Onlinestore";
import Testimonial from "./components/home/Testimonial";
import Contact from "./components/home/Contact";
import FetchData from "./components/Fetchdata";

export const metadata = {
  title: "Nextjs Demo By ",
};

export default async function Home() {
  const Topsliderdata = await FetchData("home/corosual");
  const Productitems = await FetchData("home/products");
  const Article = await FetchData("home/article");
  const Teamodalinfo = await FetchData("home/teamodel");
  const Onlinestoreinfo = await FetchData("home/store");
  const Testimonialdata = await FetchData("home/testimonial");
  const Contactinfo = await FetchData("home/contact");

  return (
    <main>
      <Homeslider data={Topsliderdata} />
      <Abouthome />
      <ProductsInfo data={Productitems} />
      <Articleinfo data={Article} />
      <Teamodel data={Teamodalinfo} />
      <Onlinestore data={Onlinestoreinfo} />
      <Testimonial data={Testimonialdata} />
      <Contact data={Contactinfo} />
    </main>
  );
}
