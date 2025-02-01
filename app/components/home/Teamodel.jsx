"use client"
import { FaCheck } from 'react-icons/fa'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import WOW from 'react-wow'


const Teamodel = ({data}) => {
  const teamodelinfo = data.teamodal;
  const [videoSrc, setVideoSrc] = useState(teamodelinfo.medialink);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setVideoSrc(`${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`)
  }

  return (
    <>
      <div className="container-fluid video my-5">
        <div className="container">
          <div className="row g-0">
            <WOW animation='fadeIn' delay="0.1s">
              <div className="col-lg-6 py-5 ">
                <div className="py-5">
                  <h1 className="display-6 mb-4" dangerouslySetInnerHTML={{ __html: teamodelinfo.sectitle }}></h1>
                  <h5 className="fw-normal lh-base text-white mb-5">{teamodelinfo.secsubtitle}</h5>
                  <div className="row g-4 mb-5">
                    {teamodelinfo.benifits.map((item, i) =>
                      <div className="col-sm-6" key={i}>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 btn-lg-square bg-white text-primary rounded-circle me-3">
                            <FaCheck />
                          </div>
                          <span className="text-dark">{item.li}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <Link className="btn btn-light rounded-pill py-3 px-5" href="/blog-article">{teamodelinfo.seccta}</Link>
                </div>
              </div>
            </WOW>
            <WOW animation='fadeIn' delay="0.5s">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100 d-flex align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                  <Button className="btn-play" variant="primary" onClick={handleShow} ><span></span></Button>
                </div>
              </div>
            </WOW>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Youtube Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="ratio ratio-16x9">
            <iframe className="embed-responsive-item" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </Modal.Body>
      </Modal>
  
    </>
  )
}

export default Teamodel