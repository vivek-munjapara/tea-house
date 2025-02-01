import Navmenu from "./Nav"

async function navdata() {
  const res = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + `api/header`, { next: { revalidate: 10 } });
  const nav = await res.json();
  return nav;
}

const Header = async () => {
  const navmenu = await navdata();
  return (
    <header className="container-fluid bg-white sticky-top">
      <Navmenu data={navmenu} />
    </header>
  )
}

export default Header