import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import '../index.css';


const fetchData = async (report) => {
  switch (report) {
    case "amreport1":
      try {
        const response = await fetch('http://localhost:3001/api/amreport1');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching pending orders:', error);
      }
    case "amreport2":
      try {
        const response = await fetch('http://localhost:3001/api/amreport2');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching pending orders:', error);
      }
    case "amreport3":
      try {
        const response = await fetch('http://localhost:3001/api/amreport3');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching pending orders:', error);
      }
    case "horeport1":
      try {
        const response = await fetch('http://localhost:3001/api/horeport1');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching pending orders:', error);
      }
    case "horeport2":
      try {
        const response = await fetch('http://localhost:3001/api/horeport2');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching pending orders:', error);
      }
    case "horeport3":
      try {
        const response = await fetch('http://localhost:3001/api/horeport3');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching pending orders:', error);
      }
    default:
      return [];
  }
};

const ReportPage = ({ access }) => {
  const [reportSelected, setSelectedReport] = useState('');
  const [dataReport, setReportData] = useState([]);

  useEffect(() => {
    document.title = 'Report Management | RestoStock Manager';
  })

  const reportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  const generateReport = async () => {
    const data = await fetchData(reportSelected);
    setReportData(data);
  };

  const generateTableHeaders = () => {
    if (dataReport.length > 0) {
      const headers = Object.keys(dataReport[0]);
      return headers.map((header) => <th key={header}>{header}</th>);
    }
    return null;
  };

  const generateTableRows = () => {
    return dataReport.map((item) => (
      <tr key={item.id}>
        {Object.values(item).map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    ));
  };

  const tableHeadersForCSV = dataReport.length > 0 ? Object.keys(dataReport[0]).map(header => ({ label: header, key: header })) : [];
  const csvExtract = {
    filename: 'Report.csv',
    headers: tableHeadersForCSV,
    data: dataReport
  };

  return (
    <div className='page-container'>
      <div className="title-container">
        <h1 className="page-title">Report Management</h1>
        <p className="page-description">
          Here you can view and manage various reports related to inventory, orders, and more.
        </p>
      </div>
      <div className='report-selection-container'>
        {access === 'am' && (
          <select value={reportSelected} onChange={reportChange} className='report-selection-dropdown'>
            <option value="">Select a report</option>
            <option value="Report 1">Inventory Report</option>
            <option value="Report 2">Report 2</option>
            <option value="Report 3">Report 3</option>
            <option value="Report 4">Report 4</option>
          </select>
        )}
        {access === 'headoffice' && (
          <select value={reportSelected} onChange={reportChange} className='report-selection-dropdown'>
            <option value="">Select a report</option>
            <option value="Report 1">Inventory Report</option>
            <option value="Report 2">Report 2</option>
            <option value="Report 3">Report 3</option>
            <option value="Report 4">Report 4</option>
          </select>
        )}
        <button onClick={generateReport} id='save-button'>Generate Report</button>
        {dataReport.length > 0 && (
          <CSVLink {...csvExtract} id='save-button'>Export to CSV</CSVLink>

        )}
      </div>
      <div className='report-data-container'>
        {dataReport.length > 0 && (
          <table>
            <thead>
              <tr>{generateTableHeaders()}</tr>
            </thead>
            <tbody>
              {generateTableRows()}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};



export default function App({ accessLevel }) {
  return (
    <div>
      <ReportPage access={accessLevel} />
    </div>
  );
}
