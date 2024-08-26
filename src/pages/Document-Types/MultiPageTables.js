import React from 'react';

const MultiPageTablesComponent = () => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    overflow: 'hidden',
  };

  const thStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold',
    verticalAlign: 'top',
  };

  const tdStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
    verticalAlign: 'top',
  };

  return (
    <div>
      <h2>Multi-page Tables</h2>
      <p>
        In many cases, documents contain pages that span across multiple pages. Typical examples of these include bank statements, invoices (with large number of line items) etc. Vue’s IDP has inbuilt capability of working with multi-page tables.
      </p>
      <p>
        As a part of zero-shot learning, tables that span across pages are automatically merged / grouped together. These merged tables can then be either accepted or can be modified. The actions that are possible on multi-page tables are:
      </p>
      <ul>
        <li>Merge individual tables into a multi-page table</li>
        <li>Unmerge one / more tables from a multi-page table</li>
        <li>Add an unmerged table into an existing multi-page table</li>
      </ul>

      <h3>Conditions to merge tables</h3>
      <p>To merge two (or more) tables, the necessary conditions are the following:</p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Table 1</th>
            <th style={thStyle}>Table 2</th>
            <th style={thStyle}>Condition</th>
            <th style={thStyle}>Headers of resultant table</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>First row is header</td>
            <td style={tdStyle}>First row is header</td>
            <td style={tdStyle}>
              Number of columns in Table 1 = Number of columns in Table 2<br />AND<br />Headers of Table 1 are the same as Headers of Table 2
            </td>
            <td style={tdStyle}>Headers of Table 1 or Table 2 (since they are the same)</td>
          </tr>
          <tr>
            <td style={tdStyle}>First row is header</td>
            <td style={tdStyle}>First row is not header</td>
            <td style={tdStyle}>Number of columns in Table 1 = Number of columns in Table 2</td>
            <td style={tdStyle}>Headers of Table 1</td>
          </tr>
          <tr>
            <td style={tdStyle}>First row is not header</td>
            <td style={tdStyle}>First row is not header</td>
            <td style={tdStyle}>Number of columns in Table 1 = Number of columns in Table 2</td>
            <td style={tdStyle}>Default column headers (0, 1, 2, …)</td>
          </tr>
        </tbody>
      </table>

      <h3>What happens when we unmerge tables</h3>
      <p>In the case below, Table 1 and Table 2 are merged into a single multi-page table that is then unmerged:</p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Table 1</th>
            <th style={thStyle}>Table 2</th>
            <th style={thStyle}>On Unmerge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>First row is header</td>
            <td style={tdStyle}>First row is header</td>
            <td style={tdStyle}>Table 1 and Table 2 both will have the same headers</td>
          </tr>
          <tr>
            <td style={tdStyle}>First row is header</td>
            <td style={tdStyle}>First row is not header</td>
            <td style={tdStyle}>
              Table 1 will have the existing header<br />Table 2 will have default headers (0, 1, 2, …)
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>First row is not header</td>
            <td style={tdStyle}>First row is not header</td>
            <td style={tdStyle}>Both Table 1 and Table 2 will have default headers (0, 1, 2, …)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MultiPageTablesComponent;
