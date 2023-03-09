import './style/index.scss'


interface MainTitle{
children:string
}

const MainTitle  = ({children}:MainTitle)=>{
    return(
        <div className="batman-ui__main-title"> <p>{children}</p></div>
    )
}

export default MainTitle