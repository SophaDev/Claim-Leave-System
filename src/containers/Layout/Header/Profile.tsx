import React, { useState } from 'react';
import profile from '../../../assets/images/profile.jpg';
const Profile: React.FC = ({ children }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <button
          className="rounded-md focus:outline-none "
          onClick={handleProfileClick}
        >
          <img
            className="object-cover rounded-full w-9 h-9"
            src={profile}
            alt="profile"
          />
        </button>
        <div
          className={`absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl border ${
            isProfileMenuOpen ? '' : 'hidden'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
export default Profile;
