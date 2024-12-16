// import { useState } from 'react';
import styles from './TablesContainer.module.scss';
// import Cookies from 'js-cookie';
// import { COOKIE_KEY, TABLES_GET } from '../../Fetch/settings';

const TableContainer = () => {
  // const [data, setData] = useState([]);
  const data = [];
  //   const [totalPages, setTotalPages] = useState(0);
  //   const [currentPage, setCurrentPage] = useState(1);

  //   const getTables = async () => {
  //     try {
  //       const token = Cookies.get(COOKIE_KEY);

  //       const response = await fetch(`${TABLES_GET}?page=${currentPage}`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${token}`,
  //         },
  //         credentials: 'include',
  //       });

  //       if (response.ok) {
  //         const result = await response.json();
  //         console.log(result);
  //         setData(result.data || []);
  //         setTotalPages(result.total_pages || 0);
  //         setCurrentPage(result.page || 1);
  //         console.log(result.page);
  //       } else {
  //         console.error('Failed to fetch data');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   const handleNextPage = () => {
  //     if (currentPage < totalPages) {
  //       setCurrentPage((prevPage) => prevPage + 1);
  //     }
  //   };

  //   const handlePrevPage = () => {
  //     if (currentPage > 1) {
  //       setCurrentPage((prevPage) => prevPage - 1);
  //     }
  //   };
  //   useEffect(() => {
  //     getTables(currentPage);
  //   }, [currentPage]);
  //   console.log(currentPage);
  return (
    <div>
      <table className={styles.tableContainer}>
        <thead className={styles.tableHeader}>
          <tr>
            <th className={styles.tableHeaderItem}>Table #</th>
            <th className={styles.tableHeaderItem}>Menu Link</th>
            <th className={styles.tableHeaderItem}>QR Code</th>
            <th className={styles.tableHeaderItem}>Action</th>
          </tr>
        </thead>
        {data.length > 0 ? (
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.table_number}</td>
                <td>{item.menu_link}</td>
                <td>
                  <img
                    src={`data:image/jpeg;base64, ${item.qr}`}
                    alt={item.table_number}
                  />
                </td>

                <td>
                  <button>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <p>No results found</p>
        )}
      </table>
      <div className="pagination">
        {/* <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button> */}
        Pagination
      </div>
    </div>
  );
};

export default TableContainer;
