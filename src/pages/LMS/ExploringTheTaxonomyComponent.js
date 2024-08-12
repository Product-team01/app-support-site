import React from 'react';
import './explore.css';

const ExploringTheTaxonomyComponent = () => {
  return (
    <div className="exploring-taxonomy-container">
      <h1>Exploring the Taxonomy</h1>
      <p>The taxonomy is the list of all attributes to be extracted from the document. The configuration of the taxonomy typically consists of:</p>
      <ul>
        <li>The attribute</li>
        <li>Data type of the attribute</li>
        <li>Formatting configuration</li>
      </ul>
      <div className="image-container">
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/taxonomy.png" alt="Taxonomy" />
      </div>
      <p>The taxonomy, currently, only supports a single level of hierarchy except for tables. When there are multi-page tables, there is a hierarchy where, at the base level, there is the merged table with the constituent tables being shown one level indented.</p>

      <h2>Actions on the Taxonomy</h2>
      <p>The following are actions that are possible from the taxonomy screen:</p>

      <h3>Add New Attribute</h3>
      <p>To add a new attribute:</p>
      <ul>
        <li>Click on + Add New</li>
        <li>Enter a name for the attribute</li>
        <li>Annotate</li>
        <li>Choose the data type</li>
        <li>Save</li>
      </ul>
      <div className="video-container">
        <iframe
          src="https://d1r1e7xjkfj7nz.cloudfront.net/add-attribute.mp4"
          frameBorder="0"
          allowFullScreen
          title="Add Attribute Video"
        ></iframe>
      </div>

      <h3>Delete Attribute</h3>
      <p>To delete an existing attribute:</p>
      <ul>
        <li>Hover on the attribute that needs to be deleted</li>
        <li>From the context menu, choose delete</li>
        <li>Confirm the action</li>
      </ul>
      <div className="video-container">
        <iframe
          src="https://d1r1e7xjkfj7nz.cloudfront.net/delete-attribute.mp4"
          frameBorder="0"
          allowFullScreen
          title="Delete Attribute Video"
        ></iframe>
      </div>

      <h3>Multi-select Attributes</h3>
      <p>Multi-select of attributes can be done to perform bulk actions. Currently, the primary action is delete:</p>
      <ul>
        <li>Hit Select All to select all the attributes (or) hover on the checkbox next to each attribute</li>
        <li>Select / deselect the requisite attributes</li>
        <li>Delete the selected attributes</li>
      </ul>
      <div className="video-container">
        <iframe
          src="https://d1r1e7xjkfj7nz.cloudfront.net/multi-select.mp4"
          frameBorder="0"
          allowFullScreen
          title="Multi-select Attributes Video"
        ></iframe>
      </div>
    </div>
  );
};

export default ExploringTheTaxonomyComponent;
