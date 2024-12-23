import styles from './AppLayout.module.scss';
import HeaderSystem from '@/components/Home/Header/HeaderSystem';
import Sidebar from '@/components/Home/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation();
  if (location.pathname !== '/') {
    return (
      <div>
        <div className={styles.header}>
          <HeaderSystem />
        </div>
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.mainContent}>{children}</main>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.header}>
          <HeaderSystem />
        </div>
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.mainWrapper}>{children}</main>
        </div>
      </div>
    );
  }
};

export default AppLayout;
