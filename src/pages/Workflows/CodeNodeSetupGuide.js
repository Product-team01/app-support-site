import React from 'react';
import './howToRegisterDocumentType.css';

const CodeNodeSetupGuide = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/'; // Replace with your actual image base URL

  return (
    <div className="code-node-setup-guide">
      <h3>Code Node Setup Guide</h3>
      <p>Below is an example of a simple code node setup:</p>

      <pre>
        <code>
{`import traceback
import logging
import json
import pprint

name = "CODENODE_APP"
logging.basicConfig(
    format="%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s",
    datefmt="%H:%M:%S"
)
logger = logging.getLogger(name)
logger.setLevel(logging.INFO)
logger.propagate = True  # remove this if you want to turn off logging
logger.disabled = False  # Make this True if you want to turn off logging

def main_process(payload, **kwargs):
    """
    Write Your Code Here
    output - return list of dictionaries
    """
    import boto3
    from openai import OpenAI
    
    secret_name = "OPENAI_API_KEY"
    region_name = "us-east-1"
    
    # Create a Secrets Manager client
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )
    get_secret_value_response = client.get_secret_value(
        SecretId=secret_name
    )
    secret = get_secret_value_response['SecretString']
    client = OpenAI(api_key=secret)
    
    input_data = [
        {"name": "Alice", "age": 30},
        {"name": "Bob", "age": 25},
        {"name": "Charlie", "age": 35}
    ]
    
    prompt = payload['node_details']['node_config']['query_value']['prompt']

    def query_gpt4():
        messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": json.dumps(input_data) + " " + prompt + " Always return the result in an array"}
        ]
        response = client.chat.completions.create(
            model="gpt-4-1106-preview",
            messages=messages,
            tools = [
                {
                    "type": "function",
                    "function": {
                        "name": "analyse_data",
                        "description": "this function analyses the input data schema and returns a dataset detailing about the input data schema",
                        "parameters": {
                            "type": "object",
                            "properties": {
                                "summary": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "columns": {
                                                "type": "string"
                                            },
                                            "analysis": {
                                                "type": "string"
                                            }
                                        },
                                        "required": ["columns", "analysis"]
                                    }
                                }
                            },
                            "required": ["summary"],
                        },
                    },
                }
            ]
        )
        result = { "summary": [] }
        tool_calls = response.choices[0].message.tool_calls
        if tool_calls:
            result = json.loads(tool_calls[0].function.arguments)
            pprint.pprint(result)
            pprint.pprint(result.get('summary', []))
        return result.get('summary', [])
    
    return query_gpt4()
`}
        </code>
      </pre>

      <h4>Returning Results from Code Nodes</h4>
      <p>
        When returning results from code nodes, it is important to choose a format that best suits your needs. Returning the output as a list of dictionaries is commonly used for persisting datasets, providing a structured format that is easy to manage and analyze. However, depending on your requirements, you may also return the results in other formats such as a list, array, or a single dictionary.
      </p>
      <p>Ensure that the format you choose aligns with how the data will be used downstream in your workflows.</p>

      <h4>Commit and Push Changes</h4>
      <p>
        Once you have made the necessary changes, commit your code using the VS Code interface. Push the changes to the remote repository. This action will trigger a Docker image build in the background, monitored by GitHub Actions.
      </p>

      <h4>Monitoring Docker Builds with GitHub Actions</h4>
      <ul>
        <li>
          <strong>Set Up GitHub Actions:</strong> Ensure that your repository has the appropriate GitHub Actions workflow files configured for building Docker images.
        </li>
        <li>
          <strong>Monitor the Build:</strong> Utilize the GitHub Actions extension within the VS Code server to monitor the progress of your builds. Check the logs and outputs to confirm the build is successful.
        </li>
      </ul>

      <h4>Using Code Nodes in Workflows</h4>
      <p>To add code nodes to your workflow, follow these steps:</p>
      <ul>
        <li>
          <strong>Drag and Drop:</strong> You can drag and drop the desired code node from the left pane directly onto the canvas.
        </li>
        <li>
          <strong>Right Click and Select:</strong> Alternatively, you can right-click on the canvas, select the code node you want to add from the context menu, and place it on the canvas.
        </li>
      </ul>
      <div className="image-container">
        <p><strong>Open Screenshotnode1.png</strong></p>
        <img src={`${imageBaseUrl}Screenshotnode4.png`} alt="Drag and Drop Code Node" title="Drag and Drop Code Node" />
      </div>

      <h4>Configuring Code Nodes</h4>
      <p>Once you've added a code node to your workflow, you can configure it by following these steps:</p>
      <ul>
        <li><strong>Select the Code Node:</strong> Click on the code node on the canvas to select it.</li>
        <li>
          <strong>Configure in the Right Pane:</strong> In the right pane, you can configure the code node by entering the necessary details:
          <ul>
            <li><strong>Name:</strong> Enter a unique name for the code node (ensure it's less than 20 characters).</li>
            <li><strong>Description:</strong> Provide a brief description of the node (optional).</li>
            <li><strong>Dataset:</strong> Select the appropriate dataset from the dropdown menu.</li>
          </ul>
        </li>
      </ul>
      <div className="image-container">
        {/* <p><strong>Open Screenshot 2024-07-21 at 8.09.46 PM.png</strong></p> */}
        <img src={`${imageBaseUrl}Screenshotnode3.png`} alt="Configuring Code Node" title="Configuring Code Node" />
      </div>
      <p><strong>Save Your Configuration:</strong> After configuring the node, click the "Add" button to save your changes.</p>

      <h4>Important Notes</h4>
      <ul>
        <li>Ensure the name of the code node is less than 20 characters to avoid configuration issues.</li>
        <li>Provide meaningful descriptions to help other users understand the purpose of the code node.</li>
      </ul>

      <h4>Running the Workflow</h4>
      <p>After creating your workflow, you can execute it and see the output by following these steps:</p>
      <div className="image-container">
        {/* <p><strong>Open Screenshot 2024-07-21 at 8.11.59 PM.png</strong></p> */}
        <img src={`${imageBaseUrl}Screenshotnode2.png`} alt="Running the Workflow" title="Running the Workflow" />
      </div>
      <ul>
        <li><strong>Click the Play Button:</strong> Click the play button on your sink node to execute the workflow.</li>
        <li><strong>View Sample Output:</strong> After execution, you can view a sample output to verify the workflow’s correctness.</li>
      </ul>
      <div className="image-container">
        {/* <p><strong>Open Screenshot 2024-07-21 at 8.04.46 PM.png</strong></p> */}
        {/* <img src={`${imageBaseUrl}Screenshotnode1.png`} alt="View Sample Output" title="View Sample Output" /> */}
      </div>

      <h4>Important Notes</h4>
      <ul>
        <li>Ensure the name of the code node is less than 20 characters to avoid configuration issues.</li>
        <li>Provide meaningful descriptions to help other users understand the purpose of the code node.</li>
      </ul>
    </div>
  );
};

export default CodeNodeSetupGuide;
