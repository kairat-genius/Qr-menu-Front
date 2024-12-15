import styles from './Sidebar.module.scss';
import { useState } from 'react';
import SidebarItem from './SidebarItem';
import { HomeIcon } from '@/assets/HomeIcon';
import { TablesIcon } from '@/assets/TablesIcon.jsx';
import { MenuIcon } from '@/assets/MenuIcon.jsx';
import { SettingsIcon } from '@/assets/SettingsIcon.jsx';
import { SupportIcon } from '@/assets/SupportIcon.jsx';
import LogoImg from '../LogoImg/LogoImg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpenCategor, setIsOpenCategor] = useState(false);
  const openCategor = () => {
    setIsOpenCategor(!isOpenCategor);
  };

  return (
    <aside className={styles.aside}>
      <LogoImg />
      <ul>
        <li>
          <SidebarItem path="/home" icon={<HomeIcon />}>
            Home
          </SidebarItem>
        </li>
        <li>
          <SidebarItem path="/tables" icon={<TablesIcon />}>
            Tables
          </SidebarItem>
        </li>
        <li>
          <div onClick={openCategor}>
            <SidebarItem path="/menu" icon={<MenuIcon />}>
              Menu
            </SidebarItem>
          </div>
          <Link
            to={'/categor'}
            className={styles.navCategoryElement}
            style={{ display: isOpenCategor ? 'block' : 'none' }}
          >
            <h4 className="btn-title-orders">Categories</h4>
          </Link>
        </li>
        <li>
          <SidebarItem path="/settings" icon={<SettingsIcon />}>
            Settings
          </SidebarItem>
        </li>
        <li>
          <SidebarItem path="/support" icon={<SupportIcon />}>
            Support
          </SidebarItem>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
