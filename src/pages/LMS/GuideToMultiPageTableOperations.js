import React from 'react';
import './multiPageTableOperations.css';

const GuideToMultiPageTableOperations = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';
  
  return (
    <div className="guide-to-multi-page-tables">
      <h2>A Guide to Multi-page Table Operations</h2>
      
      <h3>Merging Tables</h3>
      <p>On any table, Click on the edit icon</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}merged_1.png`} alt="Merge Tables Step 1" />
      </div>

      <p>Choose the tables that you would like to merge. The list will be populated based on the tables that can be merged (based on the conditions described in the previous sub-section)</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}merged_2.png`} alt="Merge Tables Step 2" />
      </div>

      <p>Save. This results in a new merged table.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}merged_3.png`} alt="Merged Tables" />
      </div>
      
      <h3>Unmerging Tables</h3>
      <p>Click on Edit of a merged table</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}merged_4.png`} alt="Unmerge Tables Step 1" />
      </div>

      <p>Choose the table(s) to remove</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}merged_5.png`} alt="Unmerge Tables Step 2" />
      </div>

      <p>Click Save. The resulting merged table only has the underlying tables that are still remaining in the multi-page table.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}merged_6.png`} alt="Unmerged Tables Result" />
      </div>
    </div>
  );
};

export default GuideToMultiPageTableOperations;
 