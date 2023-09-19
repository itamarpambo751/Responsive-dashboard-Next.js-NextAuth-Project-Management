import React from 'react';
import Dropdown from './dropdown';

// import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <div className="side-bar">
        <img src="./assets/logo.svg" alt="logo" className="logo"/>
        <div>
            <div className="profile">
                <img src="./assets/faces/face17.jpg" alt="" />
                <div className="user-info">
                    <h5>Henry Klein</h5>
                    <span>Gold Member</span>
                </div>
                <Dropdown/>
            </div>
            <div className="side-bar-navigation">
                <h5>Navigation</h5>
                <nav>
                <ul className="menu">
                    <li className="nav-item">
                    <a>
                        <span className="menu-icon">
                        <i className="mdi mdi-speedometer violet"/>
                        </span>
                        <span className="menu-title">Dashboard</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <span className="menu-icon">
                        <i className="mdi mdi-laptop orange"/>
                        </span>
                        <span className="menu-title">Basic UI Elements</span>
                        <i className="menu-arrow"/>
                    </a>
                    {/* <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> 
                            <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="pages/ui-features/typography.html">Typography</a>
                        </li>
                        </ul>
                    </div> */}
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="pages/forms/basic_elements.html">
                        <span className="menu-icon">
                        <i className="mdi mdi-playlist-play red"/>
                        </span>
                        <span className="menu-title">Form Elements</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="pages/tables/basic-table.html">
                        <span className="menu-icon">
                            <i className="mdi mdi-table-large blue"/>
                        </span>
                        <span className="menu-title">Tables</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="pages/charts/chartjs.html">
                        <span className="menu-icon">
                        <i className="mdi mdi-chart-bar green"/>
                        </span>
                        <span className="menu-title">Charts</span>
                    </a>
                    </li> 
                    <li className="nav-item">
                    <a className="nav-link" href="pages/icons/mdi.html">
                        <span className="menu-icon">
                        <i className="mdi mdi-contacts violet"/>
                        </span>
                        <span className="menu-title">Icons</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                        <span className="menu-icon">
                        <i className="mdi mdi-security orange"/>
                        </span>
                        <span className="menu-title">User Pages</span>
                        <i className="menu-arrow"/>
                    </a>
                    {/* <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                        </ul>
                    </div> */}
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html">
                        <span className="menu-icon">
                        <i className="mdi mdi-file-document-box red"/>
                        </span>
                        <span className="menu-title">Documentation</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;