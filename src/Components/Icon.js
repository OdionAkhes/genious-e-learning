import React from 'react'
import HomeIcon from "../assets/home.svg";
import DiscoverIcon from "../assets/list.svg";
import SupportIcon from "../assets/Settings.svg"
import SettingsIcon from "../assets/Settings.svg";
import AccountIcon from "../assets/account.svg";
import HelpIcon from "../assets/Headset 02.svg";
import LogoutIcon from "../assets/logout.svg";
import MessageIcon from "../assets/chat.svg"
const icons = {
  home: HomeIcon,
  help: HelpIcon,
  discover: DiscoverIcon,
  support: SupportIcon,
  settings: SettingsIcon,
  account: AccountIcon,
  logout: LogoutIcon,
  message: MessageIcon,
};



const Icon = ({ iconName, ...props } )=> {
    
  const SvgIcon = icons[iconName];
  if (!SvgIcon) {
    return null;
  }

  return <img src={SvgIcon} alt={iconName} {...props}/>
}

export default Icon