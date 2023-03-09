


import './style/index.scss'

interface MainTitleProps {
  children: string;
}

const MainTitle = ({ children }: MainTitleProps) => (
  <div className={`batman-ui__main-title`}>
    <p>{children}</p>
  </div>
);

export default MainTitle;
