import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

const Signup: React.FC = () => {
  return (
    <div className="signin-container">
    <form className='animate-left'>
      <div className="card">
        <div className="card-header">
          <h2>Register</h2>  
        </div>
        <div className="form-groups">
          <div className="form-group">
            <label htmlFor="username">Username*</label>
            <input type="text" id="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="text" id="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input type="password" id="password"/>
          </div>
          <div className="remember-me">
            <div>
              <input type="checkbox" id="rememberme"/>
              <label htmlFor="rememberme">Register and login</label>
            </div>
            <div>
              <Link href='/dashboard'>Forgot password</Link>
            </div>
          </div>
          <button id="login-btn">Register</button>
          <div className="login-with">        
            <button>
              <span>
                <i className="mdi mdi-facebook"/>
              </span>
              <span>Facebook</span>
            </button>
            <button>
              <span>
                <i className="mdi mdi-google-plus"/>
              </span>
              <span>Google plus</span>
            </button>
          </div>
          <div className="dont-have-an-account">
            <span>Already have an Account?</span>
            <Link href='/auth/signin'>Signin</Link>
          </div>
          <div className="dont-have-an-account signup">
            <span>By creating an account you are accepting our  <Link href='/auth/signin'>Terms & Conditions</Link></span>
          </div>
        </div>  
      </div>
    </form>
    </div>
  )
}

export default Signup;