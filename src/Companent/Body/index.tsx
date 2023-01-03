import './style/index.scss'
 import { Banner} from '../../ui'


const Body = () => {


    return(
        <div className='batman-store__container'>
            <p>Hi toda,</p>
            <h1>What will you learn today?</h1>
            <div className="batman-store__container_banner">
                <Banner/>
            </div>


        </div>
    )

}


export default Body