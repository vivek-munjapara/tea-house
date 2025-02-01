import Image from "next/image"

async function abouthomedata() {
	const res = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + "api/home/about", { next: { revalidate: 10 } });
	//const res = await fetch("https://nextjstea.vercel.app/api/home/about", { next: { revalidate: 10 } });
	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`)
	}
	const abouthomeifo = await res.json();
	
	return abouthomeifo;
}

const Abouthome = async () => {
	const abouthome = await abouthomedata();
	return (
		<div className="container-xxl py-5">
			<div className="container">
				<div className="row g-5">

					<div className="col-lg-6">
						<div className="row g-3">
							{abouthome.abouthome_media.map((item, index) =>
								<div className={"col-6 " + (index == 0 ? "text-end" : "")} key={index}>
									{item.boximg.map((img, childindex) =>
										<Image
											className={"img-fluid bg-white mb-3 wow fadeIn " +
												(index == 0 ? 
													(childindex % 2 === 0 ? "w-100" : "w-50") :
													(childindex % 2 === 0 ? "w-50" : "w-100"))}
											data-wow-delay={`0.${index + 1}s`}
											src={img.mediaimg}
											alt="" width={298} height={372} key={childindex} />
									)}
								</div>
							)}
						</div>
					</div>
					<div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
						<div className="section-title">
							<p className="fs-5  fst-italic text-primary">{abouthome.abouthome_info.secname}</p>
							<h1 className="display-6">{abouthome.abouthome_info.sectitle}</h1>
						</div>
						{abouthome.abouthome_info.aboutitem.map((item, index) =>
							<div className={"row g-3 " + (index == 0 ? "mb-4" : "d-flex flex-row-reverse mt-4 pt-2 border-top")} key={index}>
								<div className="col-sm-4">
									<Image className="img-fluid bg-white w-100" src={item.aboutitemimg} alt="" width={193} height={128} />
								</div>
								<div className="col-sm-8">
									<h5>{item.aboutitemtitle}</h5>
									<p className="mb-0">{item.aboutitemtxt}</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Abouthome