
"use client"
import Image from 'next/image'
import Link from 'next/link'
import WOW from 'react-wow';

const Article = ({data}) => {
    const articleinfo = data.article;
  return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <WOW animation="fadeIn" delay="0.1s">
                        <div className="col-lg-5">
                            <Image className="img-fluid" src={articleinfo.media} alt="" width={502} height={502} />
                        </div>
                    </WOW>
                    <WOW animation="fadeIn" delay="0.5s">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <p className="fs-5  fst-italic text-primary">{articleinfo.secname}</p>
                            <h1 className="display-6">{articleinfo.sectitle}</h1>
                        </div>
                        <div className="secdisc" dangerouslySetInnerHTML={{ __html: articleinfo.secdisc }}></div>
                        <Link href={'/store'} className="btn btn-primary rounded-pill py-3 px-5 text-capitalize">{articleinfo.seccta}</Link>
                    </div>
                </WOW>
            </div>
        </div>
    </div >
  )
}

export default Article