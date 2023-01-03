import {NavigationItem} from '../index'
import './stytle.scss'
import {useState, FC} from "react";
import {INavigationType} from '../../type'
import {dataNavigation} from "../../server";
// import HomeIco from '../img/home.svg'

interface CurrentNavigation{
    dataNavigation: INavigationType[]
}


const NavigationList = () => {
  return(
      <nav className="batman-store__header-container_navigation">
          <ul className='batman-store__header-container_navigation-list'>

              {dataNavigation?.map((item) => {
                  return <NavigationItem key={item?.id} item={item}/>
              })}

          </ul>
      </nav>
  )
}

export default NavigationList