import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

const Signin: React.FC = () => {
  return (
    <div className="signin-container">
      <form className='animate-left'>
        <div className="card">
          <div className="card-header">
            <h2>Login</h2>  
          </div>
          <div className="form-groups">
            <div className="form-group">
              <label htmlFor="useremail">Username or email *</label>
              <input type="text" id="useremail"/>
            </div>
            <div className="form-group">
              <label htmlFor="useremail">Password *</label>
              <input type="password" id="password"/>
            </div>
            <div className="remember-me">
              <div>
                <input type="checkbox" id="rememberme"/>
                <label htmlFor="rememberme">Remember me</label>
              </div>
              <div>
                <Link href='/dashboard'>Forgot password</Link>
              </div>
            </div>
            <button id="login-btn">Login</button>
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
              <span>Don t have an Account?</span>
              <Link href='/auth/signup'>Signup</Link>
            </div>
          </div>  
        </div>
      </form>
    </div>
  )
}

export default Signin;