import './stytle.scss'
const AvatarBanner = require('../img/litlle-batman.png')
const TeamIco = require('../img/comand.png')
const OfficeManIco = require('../img/avatar-man.png')

const Banner = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-touch="true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <div className="batman-store__banner w-100">
            <div className="batman-store__banner_container">
              <h3>Artificial Intelligence for Marketing</h3>
              <p>
                Learn how artificial intelligence is reshaping the way marketing
                is done at both large and small organizations.
              </p>
              <button>Learn now</button>
            </div>
            <img src={AvatarBanner} alt="AvatarBanner" />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <div className="batman-store__banner batman-store__banner--orange  w-100">
            <div className="batman-store__banner_container">
              <h3>Artificial Intelligence for Marketing</h3>
              <p>
                Learn how artificial intelligence is reshaping the way marketing
                is done at both large and small organizations.
              </p>
              <button>Learn now</button>
            </div>
            <img src={TeamIco} alt="TeamIco" />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <div className="batman-store__banner batman-store__banner--yellow w-100">
            <div className="batman-store__banner_container">
              <h3>Artificial Intelligence for Marketing</h3>
              <p>
                Learn how artificial intelligence is reshaping the way marketing
                is done at both large and small organizations.
              </p>
              <button>Learn now</button>
            </div>
            <img src={OfficeManIco} alt="AvatarBanner" />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">{"<"}</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"> {">"}</span>
      </button>
    </div>

    // <div id="carouselExample" className="carousel slide carousel-fade">
    //   <div className="carousel-inner">
    // <div className="carousel-item active" data-interval="10000">
    //   <div className="batman-store__banner w-100">
    //     <div className="batman-store__banner_container">
    //       <h3>Artificial Intelligence for Marketing</h3>
    //       <p>
    //         Learn how artificial intelligence is reshaping the way marketing
    //         is done at both large and small organizations.
    //       </p>
    //       <button>Learn now</button>
    //     </div>
    //     <img src={AvatarBanner} alt="AvatarBanner" />
    //   </div>
    // </div>
    // <div className="carousel-item" data-interval="2000">
    //   <div className="batman-store__banner batman-store__banner--orange  w-100">
    //     <div className="batman-store__banner_container">
    //       <h3>Artificial Intelligence for Marketing</h3>
    //       <p>
    //         Learn how artificial intelligence is reshaping the way marketing
    //         is done at both large and small organizations.
    //       </p>
    //       <button>Learn now</button>
    //     </div>
    //     <img src={TeamIco} alt="TeamIco" />
    //   </div>
    // </div>
    // <div className="carousel-item">
    //   <div className="batman-store__banner batman-store__banner--yellow w-100">
    //     <div className="batman-store__banner_container">
    //       <h3>Artificial Intelligence for Marketing</h3>
    //       <p>
    //         Learn how artificial intelligence is reshaping the way marketing
    //         is done at both large and small organizations.
    //       </p>
    //       <button>Learn now</button>
    //     </div>
    //     <img src={OfficeManIco} alt="AvatarBanner" />
    //   </div>
    // </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExample"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExample"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  )
}

export default Banner