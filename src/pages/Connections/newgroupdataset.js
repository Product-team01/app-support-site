import React from 'react';
import './howToRegisterDocumentType.css';

const NewGroupComponent = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="dataset-landing-page">
      <h3>Navigation</h3>
      <p>At Data Hub dropdown, hover over Document manager and select Dataset Groups</p>
      <p>
        You can view the created/existing dataset groups on this page.
        <br />
        <strong>Image:</strong>
        <img src={`${imageBaseUrl}HWNwgMWV31vd0XB8b7BYj9nvCz2YR3sbQWebmkJEqtDYVCcpj3inauJwJlX9vT8Lyy_qjcR1q8iCCVxHuAKEwC2Wq0HwATvT-afsLyalP_RhdLrr1rcBv1VE1v5YRRlwApRuvczi2JWUdmARYLgUb-g`} alt="Existing Dataset Groups" title="Existing Dataset Groups" />
      </p>
      <p>Select New Dataset Group to create a New dataset group.</p>
      <p>
        Provide the details for creating the dataset group.
        <br />
        <strong>Image:</strong>
        <img src={`${imageBaseUrl}czJYftvV56AK6TJqfcp6NVPWoXyatnQSTZumPiFp0RjgvuUDgoQB8kQNkAq7h_pAn7MhXsuTMCrZuHFvR2JHCt4INIgxLmpFmUzKNZgsDKeIQu6dgvXa2mgoE3LTWqyEH9E4dkFKASkyJPB7xKXkcrc`} alt="Create Dataset Group" title="Create Dataset Group" />
      </p>
      <p>Under the Datasets, select all the datasets required for the dataset group.</p>
      <p>
        Navigate to the newly created dataset group and click on “ER Diagram.”
        <br />
        <strong>Image:</strong>
        <img src={`${imageBaseUrl}rXJHgbczpRu9eqy2Km0jDJMwUOZf1Ov8ppd_UQe6T3pfS15XKN1pVIYrHOygTipAiIXHTRZayozkO3Yi0PVpD_XB_6PhtuiznszgZpYKgFWljJc3tB0t_HwrUuTUKk9PGiNadVRPPEKp5r3jqCJxZBg`} alt="ER Diagram" title="ER Diagram" />
      </p>
      <p>All selected datasets will be displayed. Hover over the column you want to map, and click the "+" symbol to map columns between datasets. Various mappings that can be done:</p>
      <ul>
        <li>One to One Mapping: Connects one column from one dataset to one column in another dataset.</li>
        <li>One to Many Mapping: Connects one column from one dataset to multiple columns in different datasets.</li>
        <li>Many to Many Mapping: Connects multiple columns in one dataset to multiple columns in another, allowing for complex relationships.</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}Screenshot 2024-05-23 at 11.39.01 AM.png`} alt="Mapping Example" title="Mapping Example" />
      </div>
      <h3>The Add Dataset Feature</h3>
      <p>The Add Dataset feature allows you to add/create datasets:</p>
      <ul>
        <li>Select Existing Dataset: Can choose from datasets already uploaded to the tool.</li>
        <li>Upload Dataset: Can upload a new dataset from your local device, automatically adding it to your dataset group and registering to the tool.</li>
        <li>Create Dataset: Can generate an empty dataset tailored to your needs.</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}Screenshot 2024-05-23 at 12.05.00 PM.png`} alt="Add Dataset" title="Add Dataset" />
      </div>
    </div>
  );
};

export default NewGroupComponent;
