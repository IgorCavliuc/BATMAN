import AvatarBanner from '../img/litlle-batman.png'
import './stytle.scss'

const Banner = () => {
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
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
        <div class="carousel-item">
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
        <div class="carousel-item">
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
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Banner
