import { useState } from 'react';
// import TableQr from '../../layouts/TableQr/TableQr.jsx';
import CustomButton from '@/components/UI/CustomButton/CustomButton.js';
import styles from './Tables.module.scss';
import AppLayout from '@/hoc/loyouts/AppLayout/AppLayout.js';
import TableContainer from '@/components/Tables/TablesContainer/TablesContainer';
import CreateTableModal from '@/components/Tables/CreateTableModal/CreateTableModal';
function Table() {
  // const [tableState, setTableState] = useState({
  //   id: null,
  //   quantity: 0,
  //   links: '',
  //   qrcodes: [],
  // });
  //   const [tablesValue, setTablesValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //   const handleCreateData = () => {
  //     console.log('Столы созданы!');
  //     closeModal();
  //   };

  return (
    <AppLayout>
      <div className={styles.container_wrap}>
        <div className={styles.container_page}>
          <h1 className={styles.page_title}>Tables</h1>
          <div>
            <CustomButton leftIcon={true} size="medium" onClick={openModal}>
              Add a new table
            </CustomButton>
          </div>

          <span>All tables</span>
        </div>
        <TableContainer />
        <CreateTableModal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </AppLayout>
  );
}

export default Table;
