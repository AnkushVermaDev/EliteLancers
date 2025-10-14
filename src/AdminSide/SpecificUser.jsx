import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SpecificUser = () => {
  const locationinfo = useLocation();
  const navigate =useNavigate();
  const [ownerinfo, setuserinfo] = useState(locationinfo.state);

  const requirementProject = {
    projectId: ownerinfo.item.id,
    requirement: `The UX/UI design for this project must focus on creating an intuitive, accessible, and visually cohesive interface that enhances user engagement and supports seamless interaction. The design should follow modern usability principles and adhere to established design system standards to maintain consistency across all screens and components.

The interface should prioritize clarity, simplicity, and efficiency, ensuring that users can easily navigate and accomplish key tasks without confusion or cognitive overload. All visual elements—such as typography, color palette, iconography, and spacing—should contribute to a clean, professional, and aesthetically pleasing experience.

Interactive elements must include clear affordances and immediate feedback (hover states, loading indicators, error messages) to support a responsive and user-friendly environment. The design should be fully responsive, adapting fluidly across desktop, tablet, and mobile devices without loss of usability or visual quality.

Accessibility is a core requirement. All components must comply with WCAG 2.1 AA standards, including adequate color contrast, support for keyboard navigation, and compatibility with assistive technologies such as screen readers.

Prototypes and wireframes should be developed iteratively, validated through user testing, and refined based on feedback to ensure the final product aligns with user expectations and business goals. The overall UX/UI approach should reflect empathy for the end-user, reducing friction and optimizing the digital experience through thoughtful design decisions and continuous improvement.`,
    deliveryDate: '23 Sep 2025'
  };

  console.log(ownerinfo);

  return (
    <div className='bg-black w-full min-h-screen text-white p-6'>
      <div className='flex flex-col items-center'>
        {/* Profile Section */}
        <img
          src='data:image/jpeg;base64,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'
          alt='Profile'
          className='w-24 h-24 rounded-full mb-4 border-2 border-gray-500'
        />
        <h1 className='text-xl font-semibold mb-2'>
          {ownerinfo.userinformation.Name}
        </h1>

        {/* Project Info */}
        <div className='p-5 rounded-md w-full  text-center'>
          <div className='flex flex-row justify-center items-center gap-3 mb-2'>
            <h1 className='text-2xl font-bold'>{ownerinfo.item.title}</h1>
            <div className=" mr-5 circle w-10 h-10 rounded-full bg-blue-500 flex  items-center justify-center"
            onClick={()=>navigate('/chat')}
            >

   <i className='fa-solid fa-message text-white'></i>
            </div>
         
          </div>

          {/* Delivery Date */}
          <div className='text-gray-300 text-sm mb-4  text-yellow-500 mt-10'>
            <h1 className='text-left'>
            <strong>Delivery Date:</strong> {requirementProject.deliveryDate}

            </h1>
          </div>

          {/* Requirement */}
          <div className='text-left'>
            <h2 className='text-lg font-semibold mb-2'>Requirement:</h2>
            <p className='text-gray-300 text-sm whitespace-pre-line leading-relaxed'>
              {requirementProject.requirement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificUser;
