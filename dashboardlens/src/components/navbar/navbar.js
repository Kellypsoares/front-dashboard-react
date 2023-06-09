import logo_labNet from '../../assets/logo_labNet.png';



const navbar = ({sidebarOpen, openSidebar}) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="navbar__img">
            <img src={logo_labNet} alt='logo_labNet'/>
        </div>
       </nav>
  )
}


export default navbar