import React from 'react';
// import { appCons } from 'util/appContext';
// import { LogoutIcon, ProfileIcon } from 'components/Icons';
import Wrapper from './Wrapper';
import Profile from './Profile';
import ProfileItem from './ProfileItem';
import Hamburger from './Hamburger';
import { LogoutIcon, ProfileIcon } from '../../../components/Icons';
import { appCons } from '../../../util/appContext';
const Header: React.FC<{ onToggle: any }> = ({ onToggle }) => {
  const { logout } = appCons();
  return (
    <Wrapper>
      <Hamburger clickMenu={onToggle} />
      <Profile>
        <ProfileItem name="Your Profile" icon={<ProfileIcon />} />
        <ProfileItem function={logout} name="Log Out" icon={<LogoutIcon />} />
      </Profile>
    </Wrapper>
  );
};
export default Header;
