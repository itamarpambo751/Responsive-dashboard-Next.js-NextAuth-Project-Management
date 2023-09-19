import React, { ReactNode } from 'react';

// import { Container } from './styles';

const Main: React.FC<{ children: ReactNode }> = ({ 
    children 
}) => {
  return (
    <main id='main-content'>
        <div id='main-content-container'>
            { children }
        </div>
    </main>
  )
}

export default Main;