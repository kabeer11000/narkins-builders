import { useEffect, useRef, useState } from 'react'

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{
        __html: `
            .parallax {
                overflow-x: hidden;
                perspective: 1px;
          }
            .parallax-layer {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
          }
            body {
                background: white;
                -background-image: radial-gradient(black 1px, transparent 0);
                background-size: 40px 40px;
                background-position: -19px -19px;
                font-family: "Jost", Sans-serif !important;
                font-weight: 600;
          }
            .scrollbox {
                overflow: auto;
                background-image: linear-gradient(to right, white, white), linear-gradient(to right, white, white), linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.5)), linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.5));
                background-position: left center, right center, left center, right center;
                background-repeat: no-repeat;
                background-color: white;
                background-size: 20px 100%, 20px 100%, 10px 100%, 10px 100%;
              /* Opera doesn't support this in the shorthand */
                background-attachment: local, local, scroll, scroll;
          }
            .scrollbox ul {
                max-width: 200%;
          }
            .scrollbox li {
                background-color: red;
                display: table-cell;
                padding: 1em;
                border: 1px solid #bebebe;
      }`}} type="text/css" />
      {/* Modal */}
      <meta data-rh="true" name="theme-color" content="#000000" />
      <div
        className="modal fade"
        id="get-more-information"
        tabIndex={-1}
        aria-labelledby="get-more-info"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-1">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <iframe
                src="https://narkinsbuilders.com/embedded-contact-form/"
                loading="lazy"
                style={{ height: "80vh", width: "100%" }}
                frameBorder={0}
              />
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
      <div className="parallax">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <div
          style={{
            height: "80%",
            paddingBottom: "15rem",
            width: "100vw",
            backgroundPosition: "center top",
            background:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://narkinsbuilders.com/wp-content/uploads/2024/04/WhatsAppVideo2024-04-21at4.39.55AM-ezgif.com-video-to-webp-converter.webp")',
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-white">
                <nav
                  className="navbar bg-dark navbar-sticky navbar-expand-lg text-white bg-transparent"
                  style={{}}
                  data-bs-theme="dark"
                >
                  <div className="container-fluid">
                    <div className="navbar-brand" href="#">
                      <img
                        src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Narkins-Logo.png"
                        style={{ width: "5rem", height: "5rem" }}
                      />
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarScroll"
                      aria-controls="navbarScroll"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                      <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Current Projects
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="https://narkinsbuilders.com/narkins-boutique-residency/"
                              >
                                Narkins Boutique Residency
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="https://narkinsbuilders.com/hill-crest-residency/"
                              >
                                Hill Crest Residency
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/completed-projects">
                            Completed Projects
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/about-us">
                            About Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div
                className="col-md-12 text-center text-white"
                style={{ marginTop: "10rem" }}
              >
                <p className="caption">
                  <strong>Welcome to</strong>
                </p>
                <h2 className="display-4">Narkins Builders</h2>
                <div className="text-gray">Creating Iconic Living Experiences.</div>
                <br />
                <div
                  className="d-flex"
                  style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
                >
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#get-more-information"
                  >
                    Get more information
                  </button>
                  <button type="button" className="btn btn-outline-light d-none">
                    Light
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page section example for content below the video header */}
      <section
        className="text-white"
        style={{
          display: "flex",
          maxHeight: "40rem",
          overflow: "hidden",
          background: "black"
        }}
        c="#E85431;"
      >
        <div
          className="d-none d-lg-block d-xl-block d-md-block"
          style={{ height: "auto", width: "50vw" }}
        >
          <div
            id="nbr-s"
            className="carousel carousel-dark slide h-100"
            data-bs-interval={2500}
            data-bs-touch="true"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active border-rounded">
                <img
                  src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-32.jpg"
                  className="d-block"
                  style={{ height: "auto" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item  border-rounded">
                <img
                  src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-33.jpg"
                  className="d-block"
                  style={{ height: "auto" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item  border-rounded">
                <img
                  src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-34.jpg"
                  className="d-block"
                  style={{ height: "auto" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item  border-rounded">
                <img
                  src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-35.jpg"
                  className="d-block"
                  style={{ height: "auto" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item  border-rounded">
                <img
                  src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-36.jpg"
                  className="d-block"
                  style={{ height: "auto" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item  border-rounded">
                <img
                  src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-37.jpg"
                  className="d-block"
                  style={{ height: "auto" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item  border-rounded">
                <img
                  src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-38.jpg"
                  className="d-block"
                  style={{ height: "auto" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item  border-rounded">
                <img
                  src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-39.jpg"
                  className="d-block"
                  style={{ height: "auto" }}
                  alt="..."
                />
              </div>{" "}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#nbr-s"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#nbr-s"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="py-5 container">
          <div className="row">
            <div className="col-md-6 d-lg-none d-xl-none">
              <div
                id="nbr"
                className="carousel carousel-dark slide"
                data-bs-touch="true"
                data-bs-interval={2500}
                data-bs-ride="carousel"
              >
                <div
                  className="carousel-inner rounded-1"
                  style={{ maxHeight: "30rem" }}
                >
                  <div className="carousel-item rounded-1 active border-rounded">
                    <img
                      src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-32.jpg"
                      className="d-block rounded-1"
                      style={{ width: "100%", height: "auto" }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item rounded-1  border-rounded">
                    <img
                      src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-33.jpg"
                      className="d-block rounded-1"
                      style={{ width: "100%", height: "auto" }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item rounded-1  border-rounded">
                    <img
                      src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-34.jpg"
                      className="d-block rounded-1"
                      style={{ width: "100%", height: "auto" }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item rounded-1  border-rounded">
                    <img
                      src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-35.jpg"
                      className="d-block rounded-1"
                      style={{ width: "100%", height: "auto" }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item rounded-1  border-rounded">
                    <img
                      src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-36.jpg"
                      className="d-block rounded-1"
                      style={{ width: "100%", height: "auto" }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item rounded-1  border-rounded">
                    <img
                      src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-37.jpg"
                      className="d-block rounded-1"
                      style={{ width: "100%", height: "auto" }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item rounded-1  border-rounded">
                    <img
                      src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-38.jpg"
                      className="d-block rounded-1"
                      style={{ width: "100%", height: "auto" }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item rounded-1  border-rounded">
                    <img
                      src="https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-39.jpg"
                      className="d-block rounded-1"
                      style={{ width: "100%", height: "auto" }}
                      alt="..."
                    />
                  </div>{" "}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#nbr"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#nbr"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              className="col-md-6 mx-auto py-4"
              style={{
                display: "flex",
                height: "100%",
                paddingTop: "5rem",
                flexDirection: "column"
              }}
            >
              <div style={{ flexGrow: "1 1 auto" }} />
              <p className="caption d-none">
                <strong>Welcome to</strong>
              </p>
              <h2 className="display-4">Narkin Boutique Residency</h2>
              <div className="text-gray">
                Conveniently situated just two minutes from the main gate of Bahria
                Town Karachi, presents a selection of luxurious 2, 3, and 4-bedroom
                apartments. Schedule your free tour today and experience refined
                living at its finest!
                <br />
                <a
                  type="button"
                  href="https://narkinsbuilders.com/narkins-boutique-residency/"
                  className="btn btn-warning my-4"
                >
                  Project Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page section example for content below the video header */}
      <section
        className="text-white"
        style={{
          height: "40rem",
          display: "flex",
          backgroundPosition: "center top",
          background:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://narkinsbuilders.com/wp-content/uploads/2024/04/HCR-elevation-from-drone-scaled.webp)",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="py-5 container">
          <div className="row">
            <div
              className="col-md-6 mx-auto py-4"
              style={{
                display: "flex",
                height: "100%",
                paddingTop: "5rem",
                flexDirection: "column"
              }}
            >
              <div style={{ flexGrow: "1 1 auto" }} />
              <p className="caption d-none">
                <strong>Welcome to</strong>
              </p>
              <h2 className="display-4">Hill Crest Residency</h2>
              <div className="text-gray">
                Conveniently situated just two minutes from the main gate of Bahria
                Town Karachi, presents a selection of luxurious 2, 3, and 4-bedroom
                apartments. Schedule your free tour today and experience refined
                living at its finest!
                <br />
                <a
                  type="button"
                  href="https://narkinsbuilders.com/hill-crest-residency/"
                  className="btn btn-warning my-4"
                >
                  Project Details
                </a>
              </div>
            </div>
            <div className="col-md-6 d-block d-lg-none d-xl-none">
              <img
                src="https://narkinsbuilders.com/wp-content/uploads/2024/04/HCR-elevation-from-drone-scaled.webp"
                className="rounded-1"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
        <div
          className="d-none d-lg-block d-xl-block d-md-block"
          style={{ maxWidth: "50vw" }}
        >
          <img
            className=""
            style={{ width: "100%", minHeight: "100%" }}
            src="https://narkinsbuilders.com/wp-content/uploads/2024/04/HCR-elevation-from-drone-scaled.webp"
          />
        </div>
      </section>
      <section style={{ backgroundColor: "#f3f2f2" }} className="bg-sm-black">
        <div className="py-5 container">
          <div className="row">
            <div
              className="col-md-12 mx-auto py-4 text-center"
              style={{
                display: "flex",
                height: "100%",
                paddingTop: "5rem",
                flexDirection: "column"
              }}
            >
              <div style={{ flexGrow: "1 1 auto" }} />
              <p className="caption d-none">
                <strong>Welcome to</strong>
              </p>
              <h2 className="display-4">Completed Projects</h2>
              <div className="text-gray">We always delivered what we promised.</div>
            </div>
            <div
              className="col-md-8 mx-auto py-4"
              style={{
                display: "flex",
                height: "100%",
                paddingTop: "5rem",
                flexDirection: "column"
              }}
            >
              <div
                id="carouselExampleCaptions1"
                className="rounded-circle parallax-layer carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a href="https://narkinsbuilders.com/completed-projects/">
                      <img
                        src="https://narkinsbuilders.com/wp-content/uploads/2024/04/al-arz-home-scaled.webp"
                        className="d-block rounded-2 w-100"
                        alt="..."
                      />
                    </a>
                    <div className="carousel-caption d-none -d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <a href="https://narkinsbuilders.com/completed-projects/">
                      <img
                        src="https://narkinsbuilders.com/wp-content/uploads/2024/04/al-arz-residency-scaled.webp"
                        className="d-block rounded-2 w-100"
                        alt="..."
                      />
                    </a>
                    <div className="carousel-caption d-none -d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <a href="https://narkinsbuilders.com/completed-projects/">
                      <img
                        src="https://narkinsbuilders.com/wp-content/uploads/2024/04/palm-residency-scaled.webp"
                        className="d-block rounded-2 w-100"
                        alt="..."
                      />
                    </a>
                    <div className="carousel-caption d-none -d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions1"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions1"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "black", color: "white!important" }}>
        <div className="py-5 container">
          <div className="row">
            <div
              className="col-md-12 mx-auto py-4 text-center"
              style={{
                display: "flex",
                height: "100%",
                paddingTop: "5rem",
                flexDirection: "column"
              }}
            >
              <div style={{ flexGrow: "1 1 auto" }} />
              <p className="caption d-none">
                <strong>Welcome to</strong>
              </p>
              <h2 className="display-4">Trusted Partners</h2>
              <div className="text-gray"></div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                    .trusted-partners {\n                    -ms-overflow-style: none;  /* Internet Explorer 10+ */\n                    scrollbar-width: none;  /* Firefox */\n                    }\n                    .trusted-partners::-webkit-scrollbar { \n                    display: none;  /* Safari and Chrome */\n                    }\n                "
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                    .scroll-container {\n                    position: relative;\n                    overflow-x: scroll;\n                    width: 100%; background:black;\n                    }\n                    .scroll-containe-r::before,\n                    .scroll-containe-r::after {\n                    content: "";\n                    position: absolute;\n                    top: 0;\n                    width: 20px; /* Adjust the width of the shadow as needed */\n                    height: 100%;\n                    pointer-events: none;\n                    }\n                    .scroll-containe-r::before {\n                    left: 0;\n                    background: linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1) 90%);\n                    }\n                    .scroll-containe-r::after {\n                    right: 0;\n                    background: linear-gradient(to left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1) 90%);\n                    }\n                '
              }}
            />
            <div
              className="col-md-8 scrollbox trusted-partners mx-auto py-4 d-flex scroll-container"
              style={{ gap: "1rem", scrollSnapType: "x mandatory" }}
            >
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-02-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-03-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-01-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/02/Trusted-Partners-08-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/02/Trusted-Partners-09-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-06-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-05-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-04-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-02-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-03-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-01-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/02/Trusted-Partners-08-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/02/Trusted-Partners-09-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-06-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-05-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-04-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-02-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />
              <img
                src="https://gromotions.com/narkin/wp-content/uploads/2024/01/Trusted-Partners-03-320x202.png"
                className="rounded-2 border"
                style={{
                  display: "inline-block",
                  scrollSnapAlign: "start",
                  width: "10rem",
                  height: "auto"
                }}
              />{" "}
            </div>
          </div>
        </div>
      </section>
      <section style={{ color: "#000" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
              <h3 className="display-4 mb-4">Testimonials</h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0"></p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <h5 className="font-weight-bold">Saad Arshad</h5>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt fa-sm text-info" />
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />
                    Highly committed to delivering in timelines, I wholeheartedly
                    recommend considering investment in projects by Narkin’s
                    Builders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <h5 className="font-weight-bold">Arsalan</h5>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />
                    Smooth booking experience, very transparent throughout the
                    process.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <h5 className="font-weight-bold">Umair Iqrar</h5>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-info" />
                    </li>
                    <li>
                      <i className="far fa-star fa-sm text-info" />
                    </li>
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2" />I decided to invest
                    during the initial launch phase, and after just two years, I’ve
                    seen substantial returns. It’s been a fantastic investment
                    opportunity!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="bootstrap" viewBox="0 0 118 94">
          <title>Bootstrap</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
            fill="white"
          />
        </symbol>
        <symbol id="facebook" viewBox="0 0 16 16">
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            fill="white"
          />
        </symbol>
        <symbol id="instagram" viewBox="0 0 16 16">
          <path
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            fill="white"
          />
        </symbol>
        <symbol id="twitter" viewBox="0 0 16 16">
          <path
            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            fill="white"
          />
        </symbol>
        <symbol id="linkedin" viewBox="0 0 16 16">
          <path
            d="M12.6667 2C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667ZM12.3333 12.3333V8.8C12.3333 8.2236 12.1044 7.6708 11.6968 7.26322C11.2892 6.85564 10.7364 6.62667 10.16 6.62667C9.59333 6.62667 8.93333 6.97333 8.61333 7.49333V6.75333H6.75333V12.3333H8.61333V9.04667C8.61333 8.53333 9.02667 8.11333 9.54 8.11333C9.78754 8.11333 10.0249 8.21167 10.2 8.3867C10.375 8.56173 10.4733 8.79913 10.4733 9.04667V12.3333H12.3333ZM4.58667 5.70667C4.88371 5.70667 5.16859 5.58867 5.37863 5.37863C5.58867 5.16859 5.70667 4.88371 5.70667 4.58667C5.70667 3.96667 5.20667 3.46 4.58667 3.46C4.28786 3.46 4.00128 3.5787 3.78999 3.78999C3.5787 4.00128 3.46 4.28786 3.46 4.58667C3.46 5.20667 3.96667 5.70667 4.58667 5.70667ZM5.51333 12.3333V6.75333H3.66667V12.3333H5.51333Z"
            fill="white"
          />
        </symbol>
        <symbol id="youtube" viewBox="0 0 16 16">
          <path
            d="M6.85775 10.5578L10.3177 8.55778L6.85775 6.55778V10.5578ZM14.5644 5.33778C14.6511 5.65111 14.7111 6.07111 14.7511 6.60445C14.7977 7.13778 14.8177 7.59778 14.8177 7.99778L14.8577 8.55778C14.8577 10.0178 14.7511 11.0911 14.5644 11.7778C14.3977 12.3778 14.0111 12.7644 13.4111 12.9311C13.0977 13.0178 12.5244 13.0778 11.6444 13.1178C10.7777 13.1644 9.98441 13.1844 9.25108 13.1844L8.19108 13.2244C5.39775 13.2244 3.65775 13.1178 2.97108 12.9311C2.37108 12.7644 1.98441 12.3778 1.81775 11.7778C1.73108 11.4644 1.67108 11.0444 1.63108 10.5111C1.58441 9.97778 1.56441 9.51778 1.56441 9.11778L1.52441 8.55778C1.52441 7.09778 1.63108 6.02445 1.81775 5.33778C1.98441 4.73778 2.37108 4.35111 2.97108 4.18445C3.28441 4.09778 3.85775 4.03778 4.73775 3.99778C5.60441 3.95111 6.39775 3.93111 7.13108 3.93111L8.19108 3.89111C10.9844 3.89111 12.7244 3.99778 13.4111 4.18445C14.0111 4.35111 14.3977 4.73778 14.5644 5.33778Z"
            fill="white"
          />
        </symbol>
      </svg>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .bd-placeholder-img {\n            font-size: 1.125rem;\n            text-anchor: middle;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            user-select: none;\n            }\n            @media (min-width: 768px) {\n            .bd-placeholder-img-lg {\n            font-size: 3.5rem;\n            }\n            }\n            .b-example-divider {\n            width: 100%;\n            height: 3rem;\n            background-color: rgba(0, 0, 0, .1);\n            border: solid rgba(0, 0, 0, .15);\n            border-width: 1px 0;\n            box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n            }\n            .b-example-vr {\n            flex-shrink: 0;\n            width: 1.5rem;\n            height: 100vh;\n            }\n            .bi {\n            vertical-align: -.125em;\n            fill: currentColor;\n            }\n            .nav-scroller {\n            position: relative;\n            z-index: 2;\n            height: 2.75rem;\n            overflow-y: hidden;\n            }\n            .nav-scroller .nav {\n            display: flex;\n            flex-wrap: nowrap;\n            padding-bottom: 1rem;\n            margin-top: -1px;\n            overflow-x: auto;\n            text-align: center;\n            white-space: nowrap;\n            -webkit-overflow-scrolling: touch;\n            }\n            .btn-bd-primary {\n            --bd-violet-bg: #712cf9;\n            --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n            --bs-btn-font-weight: 600;\n            --bs-btn-color: var(--bs-white);\n            --bs-btn-bg: var(--bd-violet-bg);\n            --bs-btn-border-color: var(--bd-violet-bg);\n            --bs-btn-hover-color: var(--bs-white);\n            --bs-btn-hover-bg: #6528e0;\n            --bs-btn-hover-border-color: #6528e0;\n            --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n            --bs-btn-active-color: var(--bs-btn-hover-color);\n            --bs-btn-active-bg: #5a23c8;\n            --bs-btn-active-border-color: #5a23c8;\n            }\n            .bd-mode-toggle {\n            z-index: 1500;\n            }\n            .bd-mode-toggle .dropdown-menu .active .bi {\n            display: block !important;\n            }\n        "
        }}
      />
      <footer className="py-5 mt-5 bg-black text-white">
        <div className="container">
          <div className="row">
            <ul className="nav col-md-3 justify-content-start list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="https://www.instagram.com/narkinsbuilders/&ved=2ahUKEwjm_dfDzNOFAxWcVfEDHVtLDiEQjjh6BAgREAE&usg=AOvVaw2nXeQp104b03-X7rNMqVEb"
                >
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="https://www.facebook.com/narkinsbuilders/&ved=2ahUKEwjH-bT2zNOFAxUzVvEDHZBSDdsQFnoECBQQAQ&usg=AOvVaw33Otucjv2l2nO_9kuG_Gvc"
                >
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="https://www.linkedin.com/company/narkins-builders-and-developers?originalSubdomain=pk"
                >
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#linkedin" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="https://youtu.be/tT7kkMM0pz0?si=YNTU-xPd-Dy7NoZn"
                >
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#youtube" />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="col-9 col-md-4 mb-3">
              <h5>Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 -text-body-secondary">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 -text-body-secondary">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 -text-body-secondary">
                    Hill Crest Residency
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 -text-body-secondary">
                    Narkins Boutique Residency
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 d-none mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-warning" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <div className="col-md-6" />
              <div className="col-md-6- rounded-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7231.128353179299!2d67.31886!3d25.014921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34bad638fbbb1%3A0x4aa67ba370e4667b!2sNarkins%20Boutique%20Residency!5e0!3m2!1sen!2s!4v1713640558555!5m2!1sen!2s"
                  style={{ border: 0, height: "20rem", width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>
              © Narkins,{" "}
              <a href="https://www.linkedin.com/in/imossaidqadri/">
                Developed by Ossaid Qadri
              </a>
              . All rights reserved.
            </p>
            <ul className="list-unstyled d-none">
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="https://www.instagram.com/narkinsbuilders/&ved=2ahUKEwjm_dfDzNOFAxWcVfEDHVtLDiEQjjh6BAgREAE&usg=AOvVaw2nXeQp104b03-X7rNMqVEb"
                >
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="https://www.facebook.com/narkinsbuilders/&ved=2ahUKEwjH-bT2zNOFAxUzVvEDHZBSDdsQFnoECBQQAQ&usg=AOvVaw33Otucjv2l2nO_9kuG_Gvc"
                >
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="https://www.linkedin.com/company/narkins-builders-and-developers?originalSubdomain=pk"
                >
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#linkedin" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-body-emphasis"
                  href="https://youtu.be/tT7kkMM0pz0?si=YNTU-xPd-Dy7NoZn"
                >
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#youtube" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
