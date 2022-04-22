import { useRef, useState } from 'react';

import { Secondary as Layout } from "../layouts";
import ButtonC from '../components/ButtonC';

const Register = (props) => {
  const inputEmailEl = useRef(null);
  const inputFirstNameEl = useRef(null);
  const inputLastNameEl = useRef(null);
  const inputTelephoneEl = useRef(null);
  const inputENameEl = useRef(null);
  const inputETelEl = useRef(null);

  const [message, setMessage] = useState('');

  const register = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      body: JSON.stringify({
        email: inputEmailEl.current.value,
        name: inputFirstNameEl.current.value,
        surname: inputLastNameEl.current.value,
        telephone: inputTelephoneEl.current.value,
        eName: inputENameEl.current.value,
        eContact: inputETelEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const response = await res.json();

    if (response.error) {
      setMessage(error);
      return;
    }

    inputEmailEl.current.value = '';
    inputFirstNameEl.current.value = '';
    inputLastNameEl.current.value = '';
    inputTelephoneEl.current.value = '';
    inputENameEl.current.value = '';
    inputETelEl.current.value = '';
    console.log(response);
    setMessage('Success! 🎉 You have Registered!');
  }
  return (
    <Layout>
      <main className="text-center bg-almostBlack text-white px-8 py-10 md:py-20 lg:py-30 lg:px-40 justify-between md:items-start">
        {message ? (
          <h3
            className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
            style={{ lineHeight: "1.5rem" }}
          >{message}</h3>
        ) : 
        (
          <>
            <h3
              className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
              style={{ lineHeight: "1.5rem" }}
            >
              Register!
            </h3>
            <form className="w-full max-w-sm mx-auto">
              <div className="flex items-center border-b border-shine py-2">
                <input ref={inputEmailEl} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="your email: eg. youremail@gmail.com" aria-label="Email Address Input Field" />
              </div>
              <div className="flex items-center border-b border-shine py-2">
                <input ref={inputFirstNameEl} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your First name" aria-label="First Name Input Field" />
              </div>
              <div className="flex items-center border-b border-shine py-2">
                <input ref={inputLastNameEl} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your Second name" aria-label="Second Name Input Field" />
              </div>
              <div className="flex items-center border-b border-shine py-2">
                <input ref={inputTelephoneEl} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Telephone eg. 07500905702" aria-label="Telephone Input Field" />
              </div>
              <div className="flex items-center border-b border-shine py-2">
                <input ref={inputENameEl} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Emergency Contact Name" aria-label="Your emergency contact name input field" />
              </div>
              <div className="flex items-center border-b border-shine py-2">
                <input ref={inputETelEl} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Emergency Telephone Number" aria-label="Emergency Contact Telephone Name" />
              </div>
              {/* <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked />
                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                  register
                </label>
              </div> */}
              <ButtonC title="Register" action={register} />
            </form>
          </>
        )}
      </main>
    </Layout>
  )
}

export default Register;