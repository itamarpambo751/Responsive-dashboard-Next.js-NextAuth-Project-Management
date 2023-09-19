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
                    <span>
                        <span className="menu-icon">
                        <i className="mdi mdi-speedometer violet"/>
                        </span>
                        <span className="menu-title">Dashboard</span>
                    </span>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="ui-basic">
                        <span className="menu-icon">
                        <i className="mdi mdi-laptop orange"/>
                        </span>
                        <span className="menu-title">Basic UI Elements</span>
                        <i className="menu-arrow"/>
                    </span>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link">
                        <span className="menu-icon">
                        <i className="mdi mdi-playlist-play red"/>
                        </span>
                        <span className="menu-title">Form Elements</span>
                    </span>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link">
                        <span className="menu-icon">
                            <i className="mdi mdi-table-large blue"/>
                        </span>
                        <span className="menu-title">Tables</span>
                    </span>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link">
                        <span className="menu-icon">
                        <i className="mdi mdi-chart-bar green"/>
                        </span>
                        <span className="menu-title">Charts</span>
                    </span>
                    </li> 
                    <li className="nav-item">
                    <span className="nav-link">
                        <span className="menu-icon">
                        <i className="mdi mdi-contacts violet"/>
                        </span>
                        <span className="menu-title">Icons</span>
                    </span>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link" data-toggle="collapse" aria-expanded="false" aria-controls="auth">
                        <span className="menu-icon">
                        <i className="mdi mdi-security orange"/>
                        </span>
                        <span className="menu-title">User Pages</span>
                        <i className="menu-arrow"/>
                    </span>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link">
                        <span className="menu-icon">
                        <i className="mdi mdi-file-document-box red"/>
                        </span>
                        <span className="menu-title">Documentation</span>
                    </span>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;