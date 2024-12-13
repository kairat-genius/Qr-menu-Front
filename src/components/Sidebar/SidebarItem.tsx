import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

interface SidebarItemProps {
  icon: JSX.Element;
  path: string;
  children: string;
}

export function SidebarItem({ icon, path, children }: SidebarItemProps) {
  return (
    <div className={styles.sidebarItem}>
      <Link to={path}>
        {/* {icon && <div>{icon}</div>}
        {children} */}
        <div>{icon}</div>
        <div className={styles.content}>{children}</div>
      </Link>
    </div>
  );
}
