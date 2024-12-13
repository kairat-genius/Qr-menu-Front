import { Link } from 'react-router-dom';

interface SidebarItemProps {
  icon: JSX.Element;
  path: string;
  children: string;
}

export const SidebarItem = ({ icon, path, children }: SidebarItemProps) => {
  return (
    <div className="sidebaritem">
      <Link to={path}>
        {/* {icon && <div>{icon}</div>}
        {children} */}
        <div>{icon}</div>
        <div className="content">{children}</div>
      </Link>
    </div>
  );
};
