import React from 'react';
import './multiPageTableOperations.css';

const UploadingANewDatasetComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="uploading-a-new-dataset">
      <h3>Introduction</h3>
      <p>
        The Vue platform allows for the upload of data from local file systems. This is a guide to uploading new data.
      </p>

      <h3>Navigation</h3>
      <div className="image-container">
        <img src={`${imageBaseUrl}image-20240711-110623.png`} alt="Navigation" title="Navigation" />
      </div>
      <p>
        In the home page of the Vue.ai Platform, navigate to Data Hub → Document Manager → Datasets.
      </p>

      <h3>Datasets Listing Screen</h3>
      <div className="image-container">
        <img src={`${imageBaseUrl}image-20240711-110902.png`} alt="Datasets Listing" title="Datasets Listing" />
      </div>
      <p>
        This takes you to the Datasets Listing screen. This screen is the home of all datasets that have been uploaded onto the Vue platform.
      </p>

      <h3>Uploading a Dataset</h3>
      <ul>
        <li>To upload a Dataset, click on the '+ New Dataset' button at the top left.</li>
        <div className="image-container">
          <img src={`${imageBaseUrl}datasets_upload.png`} alt="New Dataset" title="New Dataset" />
        </div>
        <li>Next, enter a name for the dataset and select a file to upload. Once done, click on 'Upload'.</li>
        <div className="image-container">
          <img src={`${imageBaseUrl}image-20240711-111046.png`} alt="Upload Dataset" title="Upload Dataset" />
        </div>
        <li>Once the dataset is successfully uploaded into the platform, it appears on the Dataset Listing Page.</li>
        <div className="image-container">
          <img src={`${imageBaseUrl}image-20240711-111337.png`} alt="Dataset Listing Page" title="Dataset Listing Page" />
        </div>
      </ul>
    </div>
  );
};

export default UploadingANewDatasetComponent;
