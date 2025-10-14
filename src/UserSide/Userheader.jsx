import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';
import UserChat from './UserChat';
import { useNavigate } from 'react-router-dom';

const Userheader = ({ userinfo }) => {
  const [bool, setbool] = useState(false)
  const [user, setuser] = useState(userinfo)
  const navigate =useNavigate()

  return (
    <>
      <header className="w-full py-4 px-12 flex flex-row sm:flex-row sm:items-center sm:justify-between text-white">
        {/* Left Section: Bell Icon */}
        <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-0">
          <Link to='/notifications'>
            <i className="fa-solid fa-bell text-2xl sm:text-3xl"></i>
          </Link>
        </div>

        {/* Right Section: Navigation + User Icon */}
        <div className="mt-5 ml-8 flex items-center justify-center sm:justify-end gap-10 sm:gap-20 font-semibold text-lg sm:text-xl">
          <h1 className="cursor-pointer hover:text-yellow-400 transition-colors"><Link to='/'>Current</Link></h1>
          <h1 className="cursor-pointer hover:text-yellow-400 transition-colors"> <Link to='/history'>History</Link> </h1>
          <i className="fa-solid fa-user text-xl sm:text-2xl" onClick={() => setbool(!bool)}></i>

        </div>
      </header>

      {
        bool ? (
          <div className="absolute top-25 right-5 w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg flex flex-col items-center p-5 text-white font-sans">
            {/* Settings icon */}
            <i className="fa-solid fa-gear absolute top-3 right-3 text-gray-300 hover:text-white cursor-pointer transition-colors"></i>

            {/* Profile image */}
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold">
              AV
            </div>

            {/* Name */}
            <h1 className="mt-3 text-lg font-semibold tracking-wide">{user.Name}</h1>

            {/* Divider */}
            <div className="w-3/4 h-px bg-white/20 my-3"></div>

            {
              userinfo.specialrights ? (
                <>
                  
                  <button className="w-full flex flex-row items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition mb-2" onClick={()=>navigate('/dashboard')}>
                    <i class="fa-solid fa-chart-simple text-sm"></i>
                    <span className="text-sm font-medium">Dashboard</span>
                  </button>

                </>

              ) : (
                <></>
              )
            }



            {/* Logout Button */}
            <button className="mt-4 w-28 h-9 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-semibold transition">
              Logout
            </button>
          </div>

        ) : (<span></span>)
      }


      <div className='bg-blue-500 w-15 h-15 rounded-full fixed right-10 bottom-15 flex items-center justify-center text-2xl' onClick={()=>navigate('/chat')}>
        <i class="fa-solid fa-message"></i>
      </div>

    </>
  );
};

export default Userheader;
