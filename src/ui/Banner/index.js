import AvatarBanner from '../img/litlle-batman.png'
import './stytle.scss'



const Banner = () => {
   return(
       <div className='batman-store__banner'>
           <div className="batman-store__banner_container">
               <h3>Artificial Intelligence for Marketing</h3>
               <p>Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations.</p>
               <button>Learn now</button>
           </div>
           <img src={AvatarBanner} alt="AvatarBanner"/>
       </div>
  )
}

export default Banner