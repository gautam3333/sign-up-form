import { useState } from 'react';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      setError(true);
    }
  }

  return (
    <main>
      <section className='grid sm:grid-cols-2 gap-20 p-16'>
        <section className='flex flex-col gap-10 justify-center items-center'>
          <h1 className='text-5xl font-bold text-white'>
            Learn to code by watching others
          </h1>
          <p className='text-base text-white'>
            See how to experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how
            developers think is invaluable.
          </p>
        </section>
        <section>
          <p className='bg-[#6055a5] p-4 rounded-lg text-center text-violet-100 mb-6'>
            <span className='font-bold'>Try it free 7 days&nbsp;</span>then
            $20/mo. thereafter
          </p>
          <form
            onSubmit={handleSubmit}
            className='bg-white p-10 rounded-lg space-y-4'
          >
            <div>
              <input
                type='text'
                placeholder='First Name'
                onChange={(e) => setFirstName(e.target.value)}
                className={`inputStyle ${
                  error && firstName.length <= 0 ? 'errorInputBgStyle' : ''
                }`}
              />
              {error && firstName.length <= 0 && (
                <p className='errorInputStyle'>First Name cannot be empty</p>
              )}
            </div>
            <div>
              <input
                type='text'
                placeholder='Last Name'
                onChange={(e) => setLastName(e.target.value)}
                className={`inputStyle ${
                  error && lastName.length <= 0 ? 'errorInputBgStyle' : ''
                }`}
              />
              {error && lastName.length <= 0 && (
                <p className='errorInputStyle'>Last Name cannot be empty</p>
              )}
            </div>

            <div>
              <input
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                className={`inputStyle ${
                  error && lastName.length <= 0 ? 'errorInputBgStyle' : ''
                }`}
              />
              {error && email.length <= 0 && (
                <p className='errorInputStyle'>Emial cannot be empty</p>
              )}
            </div>
            <div>
              <input
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                className={`inputStyle ${
                  error && password.length <= 0 ? 'errorInputBgStyle' : ''
                }`}
              />
              {error && password.length <= 0 && (
                <p className='errorInputStyle'>Password cannot be empty</p>
              )}
            </div>
            <button className='w-full bg-[#38cc8c] uppercase font-bold py-3 text-green-100 rounded-md tracking-wider shadow-md shadow-green-600 hover:bg-[#2da370] transition-all'>
              claim your free trial
            </button>
            <p className='text-[12px] text-center text-stone-500'>
              By clicking the button, you are agreeing to our&nbsp;
              <span className='font-bold text-red-500'>Terms and Servies</span>
            </p>
          </form>
        </section>
      </section>
    </main>
  );
}
