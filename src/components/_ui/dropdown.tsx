import React, { ElementType, useState } from 'react';

type ElementString = ElementType | string

interface DropdownItems {
    icon?: ElementString
    preview: string
}

interface DropdownProps {
    children: ElementString
    dropdownItems: DropdownItems[]
}

const DropdownDivider: React.FC = () =>  <div className="dropdown-divider"/>

const DropdownItem: React.FC = () => {
    return (
        <li className="dropdown-item">
            <div className="preview-thumbnail">
                <div className="preview-icon">
                    <i className="mdi mdi-settings"/>
                </div>
            </div>
            <div className="preview-item-content">
                <p>Account settings</p>
            </div>
        </li>
    )
}

const Dropdown: React.FC<any> = () => {
  const [viewDown, setViewDown] = useState(false) 
  return (
    <div className='dropdown'>
        <span id="profile-dropdown" onClick={() => {
            alert()
            setViewDown(!viewDown)
        }}>
            <i className="mdi mdi-dots-vertical"/>
        </span>
        {viewDown && (
            <ul className="dropdown-menu animate-left">
                <li className="dropdown-item">
                    <h3>iSoraya</h3>
                </li>
                <DropdownDivider />
                <li className="dropdown-item">
                    <i className="mdi mdi-settings  blue"/>
                    <p>Account settings</p>
                </li>
                <DropdownDivider />
                <li className="dropdown-item">
                    <i className="mdi mdi-onepassword violet"/>
                    <p>Change Password</p>
                </li>
                <DropdownDivider />
                <li className="dropdown-item">
                    <i className="mdi mdi-calendar-today green"/>
                    <p>To-do list</p>
                </li>
            </ul>
        )}
    </div>
  )
}

export default Dropdown;

/**
 *  <ul className="dropdown-menu" aria-labelledby="profile-dropdown">
            <li className="dropdown-item">
                <div className="preview-thumbnail">
                    <div className="preview-icon">
                        <i className="mdi mdi-settings"/>
                    </div>
                </div>
                <div className="preview-item-content">
                    <p>Account settings</p>
                </div>
            </li>
            <DropdownDivider />
            <li className="dropdown-item">
                <div className="preview-thumbnail">
                    <div className="preview-icon">
                        <i className="mdi mdi-onepassword"/>
                    </div>
                </div>
                <div className="preview-item-content">
                    <p>Change Password</p>
                </div>
            </li>
            <DropdownDivider />
            <li className="dropdown-item">
                <div className="preview-thumbnail">
                    <div className="preview-icon">
                        <i className="mdi mdi-calendar-today"/>
                    </div>
                </div>
                <div className="preview-item-content">
                    <p>To-do list</p>
                </div>
            </li>
        </ul>
 */