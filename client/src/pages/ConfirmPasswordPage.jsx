import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import {  IsEmpty, IsPasswordMatch } from '../utility/ValidationHelper';
import UserStore from './../store/UserStore';
import toast from 'react-hot-toast';
import EmailStore from '../store/EmailStore';

function ConfirmPasswordPage() {
    const [newPassword,setNewPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const {ConfirmPasswordRequest}=UserStore()
    const {userEmail}=EmailStore()
    const navigate=useNavigate()
  
      const handleSubmit=async()=>{
        if(!IsEmpty(newPassword) && IsPasswordMatch(newPassword,confirmPassword)){
         let res= await ConfirmPasswordRequest(newPassword,userEmail)
         if(res){
            toast.success("Password changed")
           navigate('/')
         }else{
          toast.error("Error")
         }
        }
      }
    return (
      <>
      <div className="h-[98vh] w-[98vw] flex  justify-center items-center">
        <div className="h-[80vh] w-[80vw]  flex flex-col justify-center items-center ">
          
          <div className="max-w-sm mx-auto border border-gray-300 p-10 w-full rounded">
          <div className="mb-10 ">
              
              <button className="flex items-start gap-2 text-white  bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm  px-5 py-2.5 ">
              <IoArrowBackCircleSharp className='text-xl' />
                 <Link className="text-white" to={'/'}> Back to Home </Link>
              </button>
            </div>
            <div className="mb-5">
              <label
                
                className="block mb-2 text-sm font-semibold text-white "
              >
                New Password
              </label>
              <input
                type="text"
                name="newPassword"
                className=" border bg-gray-900 border-gray-400 text-white text-sm rounded-lg focus:border-teal-200 focus:border-2 focus:outline-none focus:ring-0 block w-full p-2.5 "
                placeholder=""
                required=""
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-5">
              <label
                
                className="block mb-2 text-sm font-semibold text-white "
              >
               Confirm Password
              </label>
              <input
                type="text"
                name="confirmPassword"
                className=" border bg-gray-900 border-gray-400 text-white text-sm rounded-lg focus:border-teal-200 focus:border-2 focus:outline-none focus:ring-0 block w-full p-2.5 "
                placeholder=""
                required=""
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
  
            <div className="w-full flex justify-center mb-5">
              <button
                onClick={handleSubmit}
                type="submit"
                className="text-white  bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm mx-auto px-5 py-2.5 text-center "
              >
                Submit
              </button>
            </div>
  
          
          </div>
        </div>
      </div>
    </>
    )
}

export default ConfirmPasswordPage