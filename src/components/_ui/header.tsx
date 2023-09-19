import React, { useState } from 'react';

// import { Container } from './styles';

const Header: React.FC = () => {
  const [state, setState] = useState(false)
  return (
    <header>
        <div className='navbar-left-side'>
            <img src="./assets/logo-mini.svg" className="logo-mini" />
            <button className="navbar-toggler">
                <i className="mdi mdi-menu"/>
            </button>
            <input type="text" placeholder='Search for product'/>
        </div>
        <div className='navbar-right-side'>
            <button className="create-new-button" onClick={() => console.log("Create new project")}>+ Create New Project</button>
            <div className='navbar-icons-group'>
                <button>
                  <i className="mdi mdi-view-grid"></i>
                </button>
                <button>
                  <i className="mdi mdi-email"></i>
                  <span className="count bg-success"></span>
                </button>
                <button>
                  <i className="mdi mdi-bell"></i>
                  <span className="count bg-danger"></span>
                </button>
            </div>
            <div className='navbar-profile'>
                <img src="./assets/faces/face17.jpg" alt="" />
                <h5 onClick={() => alert("Clicked")}>Henry Klein <i className="mdi mdi-menu-down"/></h5>
                <button className="navbar-toggler-small" onClick={() => {
                  if (!state) alert("Show")
                  setState(!state)
                }}>
                    <i className="mdi mdi-menu"/>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header;