import React, { useState } from 'react';
interface Props {
  name: string;
  function?: () => void;
  icon: any;
}
const ProfileItem: React.FC<Props> = (props) => {
  return (
    <a
      onClick={props.function}
      href="#"
      className="flex items-center px-4 py-2 text-sm text-gray-700 capitalize hover:bg-blue-500 hover:text-white"
    >
      <div>{props.icon}</div>
      <div className="pl-2">{props.name}</div>
    </a>
  );
};
export default ProfileItem;
