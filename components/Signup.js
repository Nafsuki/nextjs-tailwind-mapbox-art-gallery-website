import React from 'react'
import PropTypes from 'prop-types'

const signup = props => {
  return (
      <form className="w-full bg-shine" action="/" method="post">
        <div className="flex justify-center sm:flex-col lg:flex-row">
          <label className="h-[60px] leading-[60px] uppercase text-white font-bold text-lg text-grey-darkest" htmlFor="newsletter">Your email address:</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="newsletter" id="newsletter"></input>
          <button className="block bg-red-400 hover:bg-red-900 text-white uppercase text-lg p-4 rounded" type="submit">Newsletter Signup</button>
        </div>
      </form>
  )
}

signup.propTypes = {}

export default signup