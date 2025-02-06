import SidebarMenu from "../components/SideBarMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaPlus, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "./Sales.css";

const Sales = () => {
  const { t } = useTranslation();
  const [salesData, setSalesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      const fakeData = Array(128)
        .fill()
        .map((_, i) => ({
          id: i + 1,
          date: "04/02/2025",
          quantity: 20,
          value: "R$ 125,50",
        }));
      setSalesData(fakeData);
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(salesData.length / itemsPerPage);
  const totalSales = salesData.reduce((sum, item) => sum + item.quantity, 0);

  const paginatedSales = salesData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <Header />
      <div id="main-container">
        <SidebarMenu currentPageName="menu.sales" />
        <main className="sales-container">
          <div className="sales-header">
            <button id="create-sale-button">
              <FaPlus />
              <h5>{t("sales.create.button")}</h5>
            </button>
          </div>

          <div className="sales-table">
            <table>
              <thead>
                <tr>
                  <th>{t("sales.table.date")}</th>
                  <th>{t("sales.table.quantity")}</th>
                  <th>{t("sales.table.value")}</th>
                  <th>{t("sales.table.actions")}</th>
                </tr>
              </thead>
              <tbody>
                {paginatedSales.map((sale) => (
                  <tr key={sale.id}>
                    <td>{sale.date}</td>
                    <td>{sale.quantity}</td>
                    <td>{sale.value}</td>
                    <td>
                      <button className="edit-btn">
                        <FaPencilAlt />
                      </button>
                      <button className="delete-btn">
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sales-footer">
            <p>
              {t("sales.total")}: <span className="total-value">{totalSales}</span>
            </p>

            <div className="pagination">
              <button className="page-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>
                «
              </button>
              <button
                className="page-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                {t("sales.prev")}
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              )).slice(currentPage - 1, currentPage + 4)}

              <button
                className="page-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                {t("sales.next")}
              </button>
              <button
                className="page-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(totalPages)}
              >
                »
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Sales;
