import React from 'react'

const Signup = () => {
  return (
    <>
      <section className="showcase login">
        <div className="overplay">
          <form action="" className="form">
          <input type="text" name='username' id='username' placeholder='user name' required />
            <input type="email" id='email' name='email' placeholder='Ypor email address' required />
            <input type="password" name='password' id='password' placeholder='Enter your password' required /> 
            <input type="password" name='password2' id='password2' placeholder='Enter your password' required /> 
            <button type='submit'>Create Your account</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Signup