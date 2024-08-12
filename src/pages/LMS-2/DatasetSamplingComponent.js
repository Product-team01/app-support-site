import React from 'react';
import './howToRegisterDocumentType.css';

const DatasetSamplingComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="dataset-sampling">
      <h3>Understanding Dataset Samples</h3>
      <p>
        Before performing any action on a dataset, it’s important to understand how the data looks like. Samples help to get a high-level picture of the values populated in each column of a dataset. Also, when the dataset is used in workflows/reports, unless mentioned, the operations are always performed on the sample data. This allows optimal usage of resources and easy debugging.
      </p>
      <div>
        <img className="image-container" src={`${imageBaseUrl}sampledata.png`} alt="Sample Data" title="Sample Data" />
      </div>

      <h3>Re-Sampling</h3>
      <div>
        <img className="image-container" src={`${imageBaseUrl}sampling.png`} alt="Re-Sampling" title="Re-Sampling" />
      </div>
      <p>
        The Vue platform allows for resampling of data if more data is required to be obtained from the dataset. The following are the parameters for resampling:
      </p>
      <ul>
        <li><strong>Number of samples:</strong> The number of samples required (default: 100; maximum: 500)</li>
        <li>
          <strong>Sampling mode:</strong> There are three methods of sampling that are supported:
          <ul>
            <li><strong>Random:</strong> n(number of samples) chosen at random from across the entire dataset; this is typically chosen when it is an unordered dataset</li>
            <li><strong>From beginning:</strong> first n(number of samples) of the dataset</li>
            <li><strong>From end:</strong> last n(number of samples) of the dataset</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default DatasetSamplingComponent;
