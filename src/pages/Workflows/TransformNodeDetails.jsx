import React from 'react';
import './howToRegisterDocumentType.css';

const TransformNodeDetails = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="transform-node-details">
      <h3>What is a Transform Node?</h3>
      <p>
        Transform nodes are essential components in data workflows, enabling us to modify and manipulate data to meet their analytical needs. They are depicted as nodes within a workflow and symbolize a step where data undergoes transformation. The transformations available can be used on datasets (tables) and are very similar to SQL operations like Filtering, Grouping, Partitioning, Aggregation, Joining, Sorting, Selecting, and Dropping of specific columns.
      </p>
      <p>
        The Transform Node can be connected to other nodes in the workflow. It can take input data from previous nodes, i.e., Dataset Nodes / output from other Transformation nodes that results in a Data Sink Node, process it using the Transform Node, which in turn results in a Data Sink Node on the Workflow.
      </p>

      <h3>Types of Transform Nodes</h3>
      <p>
        There are different operations available as separate transform nodes which can be combined in user-defined ways to perform any operation:
      </p>
      <p>
        <strong>Precondition:</strong> For any transform node, only after the dataset is linked to it, will the Warning sign disappear, and the node can be made configurable to use all the fields in the dataset.
      </p>

      <h4>1. Select Node</h4>
      <p>
        Similar to “SELECT” statement in SQL, this node can be used to select specific columns from a table, and rename the columns as per need.
      </p>
      <p>
        <strong>Example:</strong> Using the Sample Dataset - Pivoted Metrics table, one possible approach is to select the desired column, rename it to “Orders,” and then perform a Count('*') operation to get the total number of orders.
      </p>
      <div className="image-container">
        <img src={`${imageBaseUrl}image-20240523-070826.png`} alt="Select Node" title="Select Node" />
      </div>

      <h4>2. Group By Node</h4>
      <p>
        A group-by node in a data processing node that organizes data into groups based on specified columns and applies aggregate functions to these groups.
      </p>
      <p><strong>Aggregations Available:</strong></p>
      <ul>
        <li><code>sum</code>: Sum of all values in the column</li>
        <li><code>count</code>: Count of no. of rows in the column</li>
        <li><code>sum_distinct</code>: Sum of all distinct values in the column</li>
        <li><code>count_distinct</code>: Count of all distinct value rows in the column</li>
        <li><code>avg</code>: Mean / Average of all values in the column</li>
        <li><code>min</code>: Minimum value in all the values of the column</li>
        <li><code>max</code>: Maximum value in all the values of the column</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}image-20240523-074754.png`} alt="Group By Node" title="Group By Node" />
      </div>

      <h4>3. Filter Node</h4>
      <p>
        A filter node in a workflow is a component used to refine datasets by removing rows that do not meet specified criteria. This operation allows us to focus on relevant data by applying conditions to the dataset.
      </p>
      <p><strong>Conditions:</strong></p>
      <ul>
        <li>
          <strong>Equality/Inequality:</strong> Selecting rows where a column value equals or does not equal a certain value using operators like <code>==</code> or <code>!=</code>.
        </li>
        <li>
          <strong>Range:</strong> Selecting rows where a column value falls within a specific range using operators like <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>.
        </li>
        <li>
          <strong>Logical Operations:</strong> Combining multiple filter conditions using <code>AND</code>/<code>OR</code> operators.
        </li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}image-20240523-123536.png`} alt="Filter Node" title="Filter Node" />
      </div>
      <p><strong>JSON Configuration:</strong></p>
      <pre>
        <code>
{`{
  "query_type": "filter",
  "query_value": {
    "operator": "or",
    "operands": [
      {
        "operator": "and",
        "operands": [
          {
            "field": "",
            "condition_operator": "",
            "value": ""
          },
          {
            "field": "",
            "condition_operator": "",
            "value": ""
          }
        ]
      }
    ]
  }
}`}
        </code>
      </pre>

      <h4>4. Join Node</h4>
      <p>
        A join node in a data processing workflow is a component that combines rows from two or more datasets based on a related column, enabling us to merge datasets in various ways depending on your analytical needs.
      </p>
      <p><strong>Join Types:</strong></p>
      <ul>
        <li><code>Left (Left Outer)</code>: Includes all rows from the left dataset and the matched rows from the right dataset.</li>
        <li><code>Right (Right Outer)</code>: Includes all rows from the right dataset and the matched rows from the left dataset.</li>
        <li><code>Inner</code>: Includes only the rows that have matching values in both datasets.</li>
        <li><code>Outer (Full Outer)</code>: Includes all rows when there is a match in either the left or right dataset.</li>
      </ul>
      <div className="image-container">
        <img src={`${imageBaseUrl}image-20240523-113800.png`} alt="Join Node" title="Join Node" />
      </div>
      <p><strong>JSON Configuration:</strong></p>
      <pre>
        <code>
{`{
  "query_type": "join",
  "query_value": {
    "join_type": "Inner",
    "left_dataset": "Dataset1",
    "right_dataset": "Dataset2",
    "query": [
      {
        "operands": {
          "left_field": "user_id",
          "right_field": "user_id"
        },
        "operator": "=="
      }
    ]
  }
}`}
        </code>
      </pre>
    </div>
  );
};

export default TransformNodeDetails;
