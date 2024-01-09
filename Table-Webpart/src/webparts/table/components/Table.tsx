// @ts-ignore
// @ts-nocheck

import * as React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Table.module.scss";

interface DataType {
  key: string;
  date: string;
  requestId: string;
  typeOfAsset: string;
  detailsOfRequest: string;
  valueExVat: string;
}

const App = () => {
  const initialData: DataType[] = [
    {
      key: "1",
      date: "08/12/2023",
      requestId: "N2400003",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "2",
      date: "08/12/2023",
      requestId: "N2400004",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "3",
      date: "08/12/2023",
      requestId: "N2400005",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "4",
      date: "08/12/2023",
      requestId: "N2400006",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "5",
      date: "08/12/2023",
      requestId: "N2400007",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "6",
      date: "08/12/2023",
      requestId: "N2400008",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "7",
      date: "08/12/2023",
      requestId: "N2400009",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "8",
      date: "08/12/2023",
      requestId: "N2400010",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "9",
      date: "08/12/2023",
      requestId: "N2400011",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "10",
      date: "08/12/2023",
      requestId: "N2400012",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "11",
      date: "08/12/2023",
      requestId: "N2400013",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "12",
      date: "08/12/2023",
      requestId: "N2400014",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "13",
      date: "08/12/2023",
      requestId: "N2400015",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "14",
      date: "08/12/2023",
      requestId: "N2400016",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "15",
      date: "08/12/2023",
      requestId: "N2400017",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "16",
      date: "08/12/2023",
      requestId: "N2400018",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "17",
      date: "08/12/2023",
      requestId: "N2400019",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "18",
      date: "08/12/2023",
      requestId: "N2400020",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "19",
      date: "08/12/2023",
      requestId: "N2400021",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "20",
      date: "08/12/2023",
      requestId: "N2400022",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "21",
      date: "08/12/2023",
      requestId: "N2400023",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "22",
      date: "08/12/2023",
      requestId: "N2400024",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "23",
      date: "08/12/2023",
      requestId: "N2400025",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "24",
      date: "08/12/2023",
      requestId: "N2400026",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "25",
      date: "08/12/2023",
      requestId: "N2400027",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "26",
      date: "08/12/2023",
      requestId: "N2400028",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "27",
      date: "08/12/2023",
      requestId: "N2400029",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "28",
      date: "08/12/2023",
      requestId: "N2400030",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "29",
      date: "08/12/2023",
      requestId: "N2400031",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
    {
      key: "30",
      date: "08/12/2023",
      requestId: "N2400032",
      typeOfAsset: "Leasehold improvements",
      detailsOfRequest: "Lorem ipsum dolor sit amet, consecte....",
      valueExVat: "£5000",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Logic to slice the data based on current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = initialData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(initialData.length / itemsPerPage);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <Table hover className={styles.transparentTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Request ID</th>
            <th>Type of Asset</th>
            <th>Details of request</th>
            <th>Value ex vat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.key}>
              <td>{item.date}</td>
              <td>{item.requestId}</td>
              <td>{item.typeOfAsset}</td>
              <td>{item.detailsOfRequest}</td>
              <td>{item.valueExVat}</td>
              <td>
                <div className={styles.actions}>
                  <Button
                    className={styles.viewButton}
                    variant="light"
                    shape="square"
                  >
                    <img src={require("../assets/view.png")} alt="View" />
                  </Button>
                  <Button
                    className={styles.approveButton}
                    variant="light"
                    shape="round"
                  >
                    Approve
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className={styles.pagination}>
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={styles.btn}
        >
          &lt;
        </Button>
        {Array.from({ length: totalPages }, (_: any, index: number) => (
          <Button
            key={index + 1}
            onClick={() => handlePagination(index + 1)}
            style={{
              border:
                currentPage === index + 1
                  ? "1px solid #000"
                  : "1px solid #CECECE",
            }}
            className={styles.btn}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.btn}
        >
          &gt;
        </Button>
      </div>
    </>
  );
};

export default App;
