import React from 'react'

const Login = () => {
  return (
    <>
      <section className="showcase login">
        <div className="overplay">
          <form action="" className="form">
            <input type="email" id='email' name='email' placeholder='Ypor email address' required />
            <input type="password" name='password' id='password' placeholder='Enter your password' required /> 
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login