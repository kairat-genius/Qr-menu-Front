import styles from './AppLayout.module.scss';
import HeaderSystem from '@/components/Header/HeaderSystem';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
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
