import './sidebar.css';
import logo from '../../assets/logo.png';

const sidebar = ({sidebarOpen, closeSidebar }) => {
  return (
    <div className= {sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
       <div className="sidebar__title">
          <div className="sidebar__img">
            <img src={logo} alt='logo'/>
            <h1>BubuDaGalera</h1>
          </div>

          <i 
          onClick={() => closeSidebar()}
          className = "fa fa-times" 
          id="sidebarIcon"
          aria-hidden= "true"
          ></i>
        </div>

        <div className="sidebar__menu">
            <div className="sidebar__link active_menu_link">
              <i className="fa fa-minus-square"></i>
              <a href='a'>Home</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-file-text"></i>
              <a href='a'>Explicação do projeto</a>
            </div>
            <div className="sidebar__logout">
              <i className="fa fa-power-off"></i>
              <a href='a'>Log out</a>
            </div>
        </div>
      </div>
 )
}

export default sidebar


