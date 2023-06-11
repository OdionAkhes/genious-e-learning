import React from 'react'
import HomeIcon from "../assets/Settings.svg";
import DiscoverIcon from "../assets/Settings.svg";
import SupportIcon from "../assets/Settings.svg"
import SettingsIcon from "../assets/Settings.svg";
import AccountIcon from "../assets/Settings.svg";
import HelpIcon from "../assets/Settings.svg";
import LogoutIcon from "../assets/Settings.svg";
import MessageIcon from "../assets/Settings.svg";
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
    // Icon not found in the mapping
    return null;
  }

  return <img src={SvgIcon} alt={iconName} {...props}/>
}

export default Icon