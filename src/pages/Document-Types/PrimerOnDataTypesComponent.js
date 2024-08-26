import React from 'react';

const PrimerOnDataTypesComponent = () => {
  return (
    <div>
      <h2>A Primer on Data Types</h2>
      <p>
        Typically, data that is extracted from documents is either stored in data stores for further use or is used in immediate post-extraction processes. In either case, specifying the data type of the extracted data is key. In view of this, Vue’s IDP allows you to define data types for the extracted data so that they can be used in the way that you would want them to subsequently. Below is a list of the data types supported by Vue, a description of each, and what customization options are natively available.
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse', overflow: 'hidden' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', fontWeight: 'bold', verticalAlign: 'top' }}>Data Type</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', fontWeight: 'bold', verticalAlign: 'top' }}>Description</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', fontWeight: 'bold', verticalAlign: 'top' }}>Usage</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4', fontWeight: 'bold', verticalAlign: 'top' }}>Customization Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Free form text</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>The most prevalent of all data types, this is typically the default data type when dealing with extraction that is predominantly text of various forms.</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Use this when you know that there is text but are not certain of what type it is</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>-</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Alphanumeric</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Similar to free-form text with the difference being a focus on the text being only alphabets and numerals</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Use this when you want to specify a certain number of characters and when you know that they text does not contain any special characters</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Limit on number of characters</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Numeric</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Numeric input that can be formatted</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Used when the extraction consists of only numbers</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li>Integer</li>
                <li>Decimal Rounded to Two Digits</li>
                <li>Decimal Rounded to Three Digits</li>
                <li>International Comma Separated</li>
                <li>Indian Comma Separated</li>
                <li>International Comma Separated, Decimal Rounded to Two Digits</li>
                <li>International Comma Separated, Decimal Rounded to Three Digits</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Name</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Free-form text (mostly containing only alphabets) that are identified as names</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Used when the underlying data is known to be a name that has different parts like a first name, last name, middle name, initials etc.</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li>Full Name</li>
                <li>First Name Only</li>
                <li>Last Name Only</li>
                <li>Last Name, First Name</li>
                <li>Initials. Last Name</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Barcode</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>The underlying data is a barcode (or QR code).</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Used when there is a barcode or QR from which the number (for barcode) or URL (for QR code) needs to be extracted</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>-</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Date</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Typical data types for identifying dates from documents</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Used when the data is a date that needs to be extracted, and transformed if necessary</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li>dd-mm-yyyy</li>
                <li>dd/mm/yyyy</li>
                <li>mmm dd, yyyy</li>
                <li>yyyy-mm-dd</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>Checkbox</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>A list of options with one or more options checked</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>When the form (typically) contains a single/multi select checkbox or a radio button</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', verticalAlign: 'top' }}>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li>Orientation:</li>
                <ul>
                  <li>Horizontal</li>
                  <li>Vertical</li>
                  <li>Grid</li>
                </ul>
                <li>Check status:</li>
                <ul>
                  <li>Single Select</li>
                  <li>Multi Select</li>
                </ul>
                <li>Extraction:</li>
                <ul>
                  <li>All values with check status</li>
                  <li>Only checked value</li>
                </ul>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrimerOnDataTypesComponent;
