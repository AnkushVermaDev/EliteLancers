import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserChat = () => {
      const navigate =useNavigate()
    
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between bg-gray-800 p-3 shadow-md">
        <div className='flex items-center justify-center  text-center w-full gap-8'>
        <div className="icon w-10 h-10 bg-blue-500 rounded-full"></div>
        <h1 className="text-white font-bold text-lg ">Software Devloper</h1>
       
        </div>
         <button className="text-gray-300 hover:text-white">
          <i className="fa-solid fa-xmark" onClick={()=>navigate('/')}></i>
        </button>
        
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">



        {/* Example message */}
        <div className="flex">
          <div className="bg-blue-600 text-white p-2 rounded-lg max-w-xs">
            Hello! How are you?
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-gray-700 text-white p-2 rounded-lg max-w-xs">
            I'm good, thanks!
          </div>
        </div>





      </div>



      {/* Input Area */}
      <div className="flex p-3 bg-gray-800 fixed bottom-0 w-full">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 rounded-full px-4 py-2 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white">
          Send
        </button>
      </div>
    </div>
  );
};

export default UserChat;
