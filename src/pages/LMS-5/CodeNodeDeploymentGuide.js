import React from 'react';
import './howToRegisterDocumentType.css';

const CodeNodeDeploymentGuide = () => {
  return (
    <div className="code-node-deployment-guide">
      <h3>Code Node Deployment Guide</h3>
      <p>This guide outlines the steps required to create and deploy a code node efficiently. It is intended for developers looking to integrate their code into a larger project, focusing on Python environments, managing dependencies, input schema definitions, secret access, and version control through Git.</p>

      <h4>Table of Contents</h4>
      <ul>
        <li><a href="#python-environment">Enabling the Python Environment</a></li>
        <li><a href="#installing-dependencies">Installing Dependencies</a></li>
        <li><a href="#accessing-previous-node-data">How To Access Previous Node Data</a></li>
        <li><a href="#accessing-node-input-configuration">How To Access Your Node Input Configuration</a></li>
        <li><a href="#accessing-secrets">How To Access Secrets</a></li>
        <li><a href="#committing-pushing-changes">Committing and Pushing Changes</a></li>
      </ul>

      <h4 id="python-environment">Enabling the Python Environment</h4>
      <p>To set up the Python environment, execute the following commands. These steps create a virtual environment and activate it, which is essential for managing package versions and dependencies in an isolated manner.</p>
      <pre>
        <code>
{`python3 -m venv myenv
source myenv/bin/activate`}
        </code>
      </pre>

      <h4 id="installing-dependencies">Installing Dependencies</h4>
      <p>Dependencies should be listed in a <code>requirements.txt</code> file. To install these dependencies, ensuring your project has all the necessary packages, run:</p>
      <pre>
        <code>
{`pip install -r codenode/requirements.txt`}
        </code>
      </pre>

      <h4 id="accessing-previous-node-data">How To Access Previous Node Data</h4>
      <p>To access data from the previous node, use the following code snippet:</p>
      <pre>
        <code>
{`previous_node_name = list(payload['payload'].keys())[0]
input_data = payload["payload"][previous_node_name]["result"]["data"]`}
        </code>
      </pre>

      <h4 id="accessing-node-input-configuration">How To Access Your Node Input Configuration</h4>
      <p>To access your node's input configuration, use the following code snippet:</p>
      <pre>
        <code>
{`input_config = payload['node_details']['node_config']['query_value']`}
        </code>
      </pre>
      <p><strong>Example:</strong></p>
      <pre>
        <code>
{`prompt = payload['node_details']['node_config']['query_value']['prompt']`}
        </code>
      </pre>

      <h4 id="accessing-secrets">How To Access Secrets</h4>
      <p>For secure access to secrets, such as API keys, use AWS Secrets Manager. This method ensures that sensitive information is stored securely and accessed in a controlled manner.</p>
      <pre>
        <code>
{`import boto3
from openai import OpenAI

secret_name = "OPENAI_API_KEY"
region_name = "us-east-1"

# Initialize a Secrets Manager client
session = boto3.session.Session()
client = session.client(
    service_name='secretsmanager',
    region_name=region_name
)

# Retrieve the secret value
get_secret_value_response = client.get_secret_value(
    SecretId=secret_name
)
secret = get_secret_value_response['SecretString']`}
        </code>
      </pre>

      <h4 id="committing-pushing-changes">Committing and Pushing Changes</h4>
      <p>After verifying the functionality of your code, it's essential to commit your changes and push them to the repository. This ensures version control and enables collaboration with other team members.</p>
      <pre>
        <code>
{`git commit -m "Your informative commit message"
git push`}
        </code>
      </pre>
    </div>
  );
};

export default CodeNodeDeploymentGuide;
