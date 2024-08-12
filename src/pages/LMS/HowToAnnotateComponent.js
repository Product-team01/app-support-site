import React from 'react';

const HowToAnnotateComponent = () => {
  return (
    <div>
      <h2>In this article, we will explore the different ways you will be able to annotate attributes on your documents.</h2>
      <p>An annotation is supplementary information describing the position of each attribute on the document. We will walk through how to annotate key-value attributes with a simple bounding box and table attributes where you will be able to define rows and columns to extract information at a cell level.</p>

      <h3>Attribute Annotations</h3>
      <ul>
        <li>To create a new attribute annotation, click the ‘Add new’ button on the taxonomy tab or use the ‘annotation’ tool on the toolbar.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png" alt="a title" />
        <li>You can provide a name for your new attribute within the Attribute Name field on the form present on the right-side panel.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/newuser2.png" alt="a title" />
        <li>To draw an annotation, select the annotation tool and draw a box on the document preview to indicate where the attribute value can be found on the document.</li>
        <li>Once you have drawn your annotation, you will be able to view the annotation crop preview on the right-side panel.</li>
        <ul>
          <li>To view an enlarged image of the same, hover over the crop.</li>
          <li>To delete and redraw the annotation, click the delete icon on the crop and redraw the bounding box as needed.</li>
        </ul>
        <li>Define the extraction conditions. These are the available data types:</li>
      </ul>

      <h3>Data types:</h3>
      <h4>Free form text</h4>
      <p>When selected, any and all forms of extractions will be extracted from the bounding box selected area.</p>
      
      <h4>Barcode</h4>
      <p>When selected, the barcode will be cropped as the extraction from the bounding box selected area.</p>
      
      <h4>Date</h4>
      <p>When selected, you will be able to define the output format of the extracted date. Example: Converting and standardizing all dates to the format ‘DD-MM-YYYY’.</p>
      
      <h4>Name</h4>
      <p>When selected, you will be able to define the output format of the extracted name. Example: Converting and standardizing all names to follow the format ‘Last Name, First Name’.</p>
      
      <h4>Numeric</h4>
      <p>When selected, you will be able to define the output format of the extracted number. Example: Converting and standardizing all numeric extractions of this attribute to follow the format of ‘Decimal rounded to 3 digits’.</p>
      
      <h4>Alphanumeric</h4>
      <p>When selected, you will be able to define the number of characters expected in this attribute extraction. Example: ID numbers of a standardized 10 characters.</p>
      <img src="https://d1r1e7xjkfj7nz.cloudfront.net/newuser3.png" alt="a title" />
      
      <p>Once you have saved your new attribute, you will be able to view its extracted value on the Page Extraction tab where you can validate or edit as needed.</p>
      <img src="https://d1r1e7xjkfj7nz.cloudfront.net/newuser4.png" alt="a title" />

      <h3>Table Annotations</h3>
      <ul>
        <li>To add a table attribute, click the ‘Table Annotation’ button on the toolbar or select ‘Table’ as the attribute Data type.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/newuser5.png" alt="a title" />
        <li>Once you have save your new attribute, you will be able to view it’s exacted value on the Page Extraction tab where you can validate or edit as needed</li>
        <li>To draw the annotation, draw a box around the boundary of the table and define the number of rows and columns.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/newuser6.png" alt="a title" />
        <li>Adjust the grid lines by dragging the lines to align with your table as needed to indicate the boundaries of the extractions at a cell level.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/newuser7.png" alt="a title" />
        <li>If you would like to extract the first row as the header of your table, toggle on the field “First row is header”.</li>
        <li>Once you're done configuring the table and its annotation, click ‘save’ to view its extracted values.</li>
        <li>To view table extractions, you can view the extraction values directed on the document preview by checking the box called ‘view extractions as overlay’.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/newuser8.png" alt="a title" />
        <li>You can click the ‘view’ button to view your extracted values as a table. Here you can also enable the ‘show crops’ toggle to view a cell by cell comparison of the document annotation crops and the extracted values.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/newuser9.png" alt="a title" />
      </ul>
    </div>
  );
};

export default HowToAnnotateComponent;
