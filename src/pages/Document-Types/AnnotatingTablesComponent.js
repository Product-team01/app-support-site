import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';

const AnnotatingTablesComponent = ({ onComplete }) => {
  const [progress, setProgress] = useState([false, false, false]); // Initially all topics are locked
  const [currentTopic, setCurrentTopic] = useState(0);
  const [isCurrentTopicRead, setIsCurrentTopicRead] = useState(false); // Track if the current topic is marked as read

  useEffect(() => {
    // Call onComplete when the component mounts or when currentTopic changes
    if (onComplete) {
      onComplete();
    }
  }, [currentTopic, onComplete]);

  const handleNextTopic = () => {
    if (currentTopic < progress.length - 1) {
      const newProgress = [...progress];
      newProgress[currentTopic + 1] = true;
      setProgress(newProgress);
      setCurrentTopic(currentTopic + 1);
      setIsCurrentTopicRead(false); // Reset the read status for the next topic
    }
  };

  const handleMarkAsRead = (e) => {
    setIsCurrentTopicRead(e.target.checked);
  };
  const videoStyle = {
    width: '560px',
    height: '315px',
    marginBottom: '20px'
  };

  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/'; // Base URL for the images

  const imageStyle = {
    width: '600px', // Set the desired width
    height: '300px', // Set the desired height
    objectFit: 'cover', // Ensure images fit within the specified dimensions
    marginBottom: '20px' // Add some space below each image
  };

  const topics = [
    {
      title: 'Annotating Tables',
      content: (
        <div>
          <h2>Annotating Tables</h2>
          <p>There are two methods to create / annotate a new table:</p>
          <ul>
            <li>From the taxonomy</li>
            <li>Using the table tool in the toolbox</li>
          </ul>
          <h3>From the taxonomy</h3>
          <ol>
            <li>Click on + Add New</li>
            <li>Enter a name for the table</li>
            <li>Choose the table data type. The annotation tool switches automatically to the Table tool</li>
            <li>Draw the bounding box around the table</li>
            <li>Enter the number of rows and columns</li>
            <li>Adjust the rows and columns on the canvas to align with the table</li>
            <li>Confirm if the first row is the header</li>
            <li>Save</li>
            <iframe 
            src="https://d1r1e7xjkfj7nz.cloudfront.net/table_1.mp4" 
            title="Annotating Tables Video" 
            style={videoStyle}
             
            allowFullScreen>
          </iframe>
          </ol>
          <h3>From the canvas</h3>
          <ol>
            <li>Click on the Table annotation tool on the toolbox (or hit T on the keyboard)</li>
            <li>Draw the bounding box around the table. The side panel opens where the table details can be inputted</li>
            <li>Enter a name for the table</li>
            <li>Enter the number of rows and columns</li>
            <li>Adjust the rows and columns on the canvas to align with the table</li>
            <li>Confirm if the first row is the header</li>
            <li>Save</li>
          </ol>
        </div>
      ),
    },
    {
      title: 'Multi-page Tables',
      content: (
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
          <table>
            <thead>
              <tr>
                <th>Table 1</th>
                <th>Table 2</th>
                <th>Condition</th>
                <th>Headers of resultant table</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First row is header</td>
                <td>First row is header</td>
                <td>Number of columns in Table 1 = Number of columns in Table 2<br/>AND<br/>Headers of Table 1 are the same as Headers of Table 2</td>
                <td>Headers of Table 1 or Table 2 (since they are the same)</td>
              </tr>
              <tr>
                <td>First row is header</td>
                <td>First row is not header</td>
                <td>Number of columns in Table 1 = Number of columns in Table 2</td>
                <td>Headers of Table 1</td>
              </tr>
              <tr>
                <td>First row is not header</td>
                <td>First row is not header</td>
                <td>Number of columns in Table 1 = Number of columns in Table 2</td>
                <td>Default column headers (0, 1, 2, …)</td>
              </tr>
            </tbody>
          </table>
          <h3>What happens when we unmerge tables</h3>
          <p>In the case below, Table 1 and Table 2 are merged into a single multi-page table that is then unmerged:</p>
          <table>
            <thead>
              <tr>
                <th>Table 1</th>
                <th>Table 2</th>
                <th>On Unmerge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First row is header</td>
                <td>First row is header</td>
                <td>Table 1 and Table 2 both will have the same headers</td>
              </tr>
              <tr>
                <td>First row is header</td>
                <td>First row is not header</td>
                <td>Table 1 will have the existing header<br/>Table 2 will have default headers (0, 1, 2, …)</td>
              </tr>
              <tr>
                <td>First row is not header</td>
                <td>First row is not header</td>
                <td>Both Table 1 and Table 2 will have default headers (0, 1, 2, …)</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: 'A Guide to Multi-page Table Operations',
      content: (
        <div>
          <h2>A Guide to Multi-page Table Operations</h2>
          <h3>Merging Tables</h3>
          <p>On any table, Click on the edit icon</p>
          <img src={`${imageBaseUrl}merged_1.png`} alt="Merge Tables Step 1" style={imageStyle} />
          <p>Choose the tables that you would like to merge. The list will be populated based on the tables that can be merged (based on the conditions described in the previous sub-section)</p>
          <img src={`${imageBaseUrl}merged_2.png`} alt="Merge Tables Step 2" style={imageStyle} />
          <p>Save. This results in a new merged table.</p>
          <img src={`${imageBaseUrl}merged_3.png`} alt="Merged Tables" style={imageStyle} />
          <h3>Unmerging Tables</h3>
          <p>Click on Edit of a merged table</p>
          <img src={`${imageBaseUrl}merged_4.png`} alt="Unmerge Tables Step 1" style={imageStyle} />
          <p>Choose the table(s) to remove</p>
          <img src={`${imageBaseUrl}merged_5.png`} alt="Unmerge Tables Step 2" style={imageStyle} />
          <p>Click Save. The resulting merged table only has the underlying tables that are still remaining in the multi-page table.</p>
          <img src={`${imageBaseUrl}merged_6.png`} alt="Unmerged Tables Result" style={imageStyle} />
        </div>
      ),
    },
  ];

  return (
    <div className="all-about-tables">
      <div className="sidebar">
        <h3>All About Tables</h3>
        <ul>
          {topics.map((topic, index) => (
            <li
              key={index}
              className={progress[index] ? 'unlocked' : 'locked'}
              onClick={() => progress[index] && setCurrentTopic(index)}
            >
              {topic.title}
              <FontAwesomeIcon icon={progress[index] ? faUnlock : faLock} />
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {topics[currentTopic].content}
        <div>
          <input
            type="checkbox"
            id="markAsRead"
            checked={isCurrentTopicRead}
            onChange={handleMarkAsRead}
          />
          <label htmlFor="markAsRead">Mark as Read</label>
        </div>
        {currentTopic < topics.length - 1 && (
          <button onClick={handleNextTopic} disabled={!isCurrentTopicRead}>
            Next Topic
          </button>
        )}
      </div>
    </div>
  );
};

export default AnnotatingTablesComponent;
