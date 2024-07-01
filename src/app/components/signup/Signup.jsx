'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Signup() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showHideLoader, setShowHideLoader] = useState(false);
  const {push} = useRouter();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(''); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); 
  };

  const handleContinue = () => {
    if (email === '') {
      setEmailError('Please enter your email address');
      return;
    }
    setStep(2);
  };

  const handleSignup = async () => {
    if (password === '') {
      setPasswordError('Please enter your password');
      return;
    }
    setShowHideLoader(true);

    try {
      const response = await axios.post('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
        username: email,
        password: password,
      });

      console.log('Signup successful:', response.data);
      setEmailError('');
      setPasswordError('');
      push('/home')
      setShowHideLoader(false);
     
    } catch (error) {
      setEmailError('');
      setPasswordError('');
      setShowHideLoader(false);
      toast.error('Username or password incorrect', {
        autoClose: 10000, 
      });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ToastContainer /> 
      {showHideLoader && <Loader />} 
      <div className='flex justify-center items-center h-full px-4'>
        <div className='w-full md:w-5/6 grid md:grid-cols-2 gap-6 items-center bg-white rounded-md px-1 md:px-10 py-4'>
          {step === 1 && (
            <>
              <div className='md:pr-1 pr-16'>
                <Image className='pt-6 pb-12' src='/logos/Logo.png' width={100} height={50} priority alt='logo' />
                <p>STEP 1</p>
                <h1 className="text-2xl font-bold">Enter your email <br /> address to continue</h1>
                <p className='py-2 text-gray-600'>Log in to your account. If you don't <br /> have one, you will be prompted to create one.</p>
              </div>
              <div className='relative'>
                <input
                  className={`border w-full rounded-sm px-3 py-1 ${emailError ? 'border-red-500' : ''}`}
                  type="text"
                  placeholder='Email'
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <div className="text-red-500 mt-1">
                    {emailError}
                  </div>
                )}
                <div>
                  <button
                    className='absolute right-1 border-none mt-3 bg-black text-white px-3 py-1 rounded-md font-semibold'
                    onClick={handleContinue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className='md:pr-1 pr-16'>
              <Image className='pt-6 pb-12' src='/logos/Logo.png' width={100} height={50} priority alt='logo' />
                <p>STEP 2</p>
                <h1 className="text-2xl font-bold">Create an account to <br /> continue</h1>
                <p className='py-2 text-gray-600'>You'll be able to log in to Dingoo <br /> with this email address and password.</p>
              </div>
              <div className='relative '>
                <input
                  className={`border w-full rounded-sm px-3 py-1 ${passwordError ? 'border-red-500' : ''}`}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Choose a password'
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <div className="text-red-500 mt-1">
                    {passwordError}
                  </div>
                )}
                <button
                  type="button"
                  className="absolute  right-0  pr-3 top-1"
                  onClick={toggleShowPassword}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
                <div className='flex justify-between pt-2 inputEye'>
                  <div className='text-left'>
                    Use a minimum of 6 characters (case sensitive) <br /> with at least one number or special character.
                  </div>
                  <button
                    className='border-none mt-3 bg-black text-white px-3 py-1 rounded-md font-semibold'
                    onClick={handleSignup}
                  >
                    Agree & Continue
                  </button>
                </div>
                <button
                  className='relative md:-bottom-10 -bottom-4 border-none bg-gray-100 text-black px-5 py-1 rounded-md font-semibold'
                  onClick={() => setStep(1)}
                >
                  Previous
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Signup;
