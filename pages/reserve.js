import { useRef, useState } from 'react';

import { Secondary as Layout } from "../layouts";
import ButtonC from '../components/ButtonC';

const Reserve = () => {
  const inputEmailEl = useRef(null);
  const inputFirstNameEl = useRef(null);
  const inputLastNameEl = useRef(null);

  const [message, setMessage] = useState('');

  const reserve = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/reserve', {
      body: JSON.stringify({
        email: inputEmailEl.current.value,
        firstName: inputFirstNameEl.current.value,
        lastName: inputLastNameEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    }

    inputEmailEl.current.value = '';
    inputFirstNameEl.current.value = '';
    inputLastNameEl.current.value = '';
    setMessage('Success! 🎉 You have reserved your spot! We will contact you shortly.');
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
              Reserve your spot!
            </h3>
            <form className="w-full max-w-sm mx-auto">
              <div className="flex items-center border-b border-shine py-2">
                <input ref={inputEmailEl} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="youremail@gmail.com" aria-label="Email Input Field" />
              </div>
              <div className="flex items-center border-b border-shine py-2">
                <input ref={inputFirstNameEl} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your First name" aria-label="First Name Input Field" />
              </div>
              <div className="flex items-center border-b border-shine py-2">
                <input ref={inputLastNameEl} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your second name" aria-label="Last Name Input Field" />
              </div>
              {/* <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked />
                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                  reserve
                </label>
              </div> */}
              <ButtonC title="Reserve" action={reserve} />
            </form>
          </>
        )}
      </main>
    </Layout>
  )
}

export default Reserve;