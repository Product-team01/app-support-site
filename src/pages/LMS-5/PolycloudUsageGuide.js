import React from 'react';
import './howToRegisterDocumentType.css';

const PolycloudUsageGuide = () => {
  return (
    <div className="polycloud-usage-guide">
      <h3>Polycloud Usage Guide</h3>
      <p>Polycloud is a set of methods, used for seamless execution of code accessing cloud resources, irrespective of the cloud service provider.</p>

      <h4>Importing Polycloud Methods</h4>
      <p>The most commonly used polycloud methods are imported as follows:</p>
      <pre>
        <code>
{`from meta.polycloud_utils import (
    secret_json,
    get_cloud_object_to_memory,
    upload_object_to_cloud,
    construct_cloud_storage_path,
    get_cloud_csv_to_memory,
    upload_df_to_cloud,
)`}
        </code>
      </pre>

      <h4>Accessing the Public Bucket Name</h4>
      <p>By default, your code node has access to a public bucket based on the environment you execute it. Here’s how to access the public bucket name:</p>
      <pre>
        <code>
{`bucket_name = secret_json["s3_bucket_name"]`}
        </code>
      </pre>
      <p>The cloud object’s key is sufficient if you want to perform operations within the default bucket.</p>

      <h4>Loading Objects (dict) Stored in Cloud to a Local Variable</h4>
      <p><code>get_cloud_object_to_memory</code> JSON loads the value stored in cloud, which can be a dict or array of dicts, etc.</p>
      <h5>Using Complete Cloud Path</h5>
      <p>Using cloud key explicitly by using function arguments like <code>s3_path</code> or <code>s3_key</code>, to avoid confusions.</p>

      <h4>Uploading Local Objects (dict) Value to Cloud</h4>
      <p><code>upload_object_to_cloud</code> is used to upload a dict value to the cloud as a JSON file.</p>
      <pre>
        <code>
{`cloud_key = "client/data/filename.json"
upload_object_to_cloud(data, cloud_key)`}
        </code>
      </pre>

      <h4>Construct Cloud Path Using Bucket and Cloud Key</h4>
      <p><code>construct_cloud_storage_path</code> is used to construct a cloud path irrespective of the cloud service provider.</p>
      <pre>
        <code>
{`bucket_name = secret_json["s3_bucket_name"]
cloud_key = "client/datasets/filename.json"
cloud_path = construct_cloud_storage_path(bucket_name, cloud_key)`}
        </code>
      </pre>

      <h4>Loading CSV File from Cloud to Pandas DataFrames</h4>
      <p><code>get_cloud_csv_to_memory</code> is used to read the cloud CSV file and return the read DataFrame.</p>
      <h5>Using Complete Cloud Path</h5>
      <p>Using cloud key explicitly by using function arguments like <code>s3_path</code> or <code>s3_key</code>, to avoid confusions.</p>

      <h4>Uploading Local Pandas DataFrame (df) to Cloud</h4>
      <p><code>upload_df_to_cloud</code> is used to upload the local DataFrame as a CSV file to the cloud.</p>
      <pre>
        <code>
{`cloud_key = "client/datasets/filename.csv"
upload_df_to_cloud(local_df, s3_key = cloud_key)`}
        </code>
      </pre>
      <p>Explicitly use function arguments like <code>s3_path</code> or <code>s3_key</code>, to avoid confusions.</p>

      <h4>Accessing Secrets Using Polycloud</h4>
      <p><code>get_secrets_data</code> is used to fetch the secrets value of a given key as a dict. It fetches secrets from Secrets Manager in AWS and Key Vault in Azure.</p>
      <pre>
        <code>
{`from meta.global_constants import get_secrets_data
secret_key = "secret-key-prod"
secrets_dict = get_secrets_data(secret_key)`}
        </code>
      </pre>

      <p>For further queries, reach out to the <a href="slack://channel?team=TXXXXXXX&id=CXXXXXXX">#code-node-support</a> channel on Slack.</p>
    </div>
  );
};

export default PolycloudUsageGuide;
