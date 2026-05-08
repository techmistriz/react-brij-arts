// "use client";

// import React, { useEffect, useState } from "react";

// const ApplicationsClosedModal: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     // Show modal on page load
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 300); // slight delay for smoother UX

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
//       <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-xl p-8 md:p-10">
//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
//         >
//           ✕
//         </button>

//         {/* Header */}
//         <p className="text-orange-500 font-semibold tracking-widest text-sm mb-2 uppercase">
//           Applications Update
//         </p>

//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-snug mb-4 uppercase">
//           Applications for the BRij Cultural Leaders Fellowship are now closed
//         </h2>

//         {/* Content */}
//         <p className="text-gray-700 mb-4">
//           If you have applied, you will be hearing back from us soon.
//         </p>

//         <p className="text-gray-700">
//           For those who couldn't this time — thank you for your interest. We'll
//           be back with new opportunities. Stay with us.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ApplicationsClosedModal;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ApplicationsClosedModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // reset before showing again

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]); //  runs on every route change

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-xl p-8 md:p-10">
        
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <p className="text-orange-500 font-semibold tracking-widest text-sm mb-2 uppercase">
          Applications Update
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-snug mb-4 uppercase">
          Applications for the BRij Cultural Leaders Fellowship are now closed
        </h2>

        <p className="text-gray-700 mb-4">
          If you have applied, you will be hearing back from us soon.
        </p>

        <p className="text-gray-700">
          For those who couldn't this time — thank you for your interest. We'll
          be back with new opportunities. Stay with us.
        </p>
      </div>
    </div>
  );
};

export default ApplicationsClosedModal;