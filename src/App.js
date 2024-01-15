import React, { useState } from 'react';
import './App.css';
import IoTRecommendations from './IoTRecommendations';  
import WebRecommendations from './WebRecommendations';
import CloudRecommendations from './CloudRecommendations';

const RecommendationSystem = () => {
  const [selectedOption, setSelectedOption] = useState('ML');
  const [selectedPhase, setSelectedPhase] = useState('DuringTraining');
  const [attackRecommendations, setAttackRecommendations] = useState([]);
  const [generalMitigations, setGeneralMitigations] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePhaseChange = (event) => {
    setSelectedPhase(event.target.value);
  };

  const handleRecommendationsClick = () => {
    // Implement the logic for recommendations based on the selected options and phases.
    let updatedAttackRecommendations = [];
    let updatedGeneralMitigations = [];

    if (selectedOption === 'ML') {
      if (selectedPhase === 'DuringTraining') {
        // Recommendations specific to ML during training
        updatedAttackRecommendations = [
          { name: 'Outlier Injection', description: 'This involves injecting extreme outlier values into the data, which can significantly impact the model performance if not properly handled.' },
          { name: 'Label Flipping', description: 'In this method, an attacker changes the true labels of data points to incorrect values. For example, an attacker could change the "0" label of a non-cat image to "1", making the model misclassify it as a cat.' },
          { name: 'Additive Poisoning', description: 'This involves adding small, carefully calculated values to specific data points to influence the model predictions. Imagine adding a slight offset to the prices of products to manipulate the model recommendations.' }
        ];
        // General mitigations for ML during training
        updatedGeneralMitigations = [
          <div><ul>

     
      <li><b>Data Source Validation:</b></li>
      <p> Scrutinize data sources to ensure they are trustworthy and reliable. Collaborate with reputable partners and implement data provenance tracking to trace data origins.</p>
      <li><b>Data Cleaning and Validation:  </b></li>
      <p>Employ rigorous data cleaning techniques to identify and remove anomalies, outliers, and potentially poisoned data points. This includes checking for inconsistencies, missing values, and unexpected patterns exceeding normal data distribution.</p>
      
      <li><b>Secure Data Management:</b></li>
       <p> Implement strong access controls and robust system security measures to prevent unauthorized data manipulation and tampering. Regularly update software and apply security patches to address vulnerabilities.</p>
      
      <li><b>Robust Learning Algorithms: </b> </li>
      <p>Utilize machine learning algorithms less susceptible to noise and outliers. Algorithms like Support Vector Machines (SVMs) and Random Forests are known to be more robust than others like k-Nearest Neighbors.</p>
      
      <li><b>Performance Monitoring: </b> </li>
      <p>Continuously monitor the model's performance for sudden drops in accuracy or unexpected shifts in predictions. These anomalies could indicate potential poisoning attempts.</p>
      
      </ul>
      </div>
        ];
      } else if (selectedPhase === 'DuringDeployment') {
        // Recommendations specific to ML during deployment
        updatedAttackRecommendations = [
          { name: 'Category Impersonation', description: 'An attacker may change the category labels to introduce misinformation.' },
          { name: 'Category Swapping', description: ' Exchanging the labels of instances belonging to different categories.' },
          { name: 'Category Noise Injection', description: 'Modifying the labels of certain instances by adding noise to the categories.' }
        ];
        // General mitigations for ML during deployment
        updatedGeneralMitigations = [
          <div><ul>

      <li><b>Category Cardinality Limits:</b></li>
      <p>Set limits on the number of categories to avoid introducing too many new labels, especially rare or infrequent ones, into the dataset. </p>
        
      <li><b>Category Distribution Monitoring: </b></li>
      <p> Keep an eye on the distribution of categories to detect any significant changes or imbalances over time.</p>

      <li><b>Cross-Validation:</b></li>
       <p> Use cross-validation techniques to evaluate model performance across different subsets of the data, ensuring that the model generalizes well to various distributions of categorical features.</p>
      
      <li><b>Category Label Encryption:</b></li>
      <p>Apply encryption or hashing techniques to categorical labels, making it more difficult for attackers to identify and manipulate specific categories.</p>
      </ul>
      </div>
        ];
   
      } else if (selectedPhase === 'WithExternalSources') {
        // Recommendations specific to ML with external sources
        updatedAttackRecommendations = [
          { name: 'Adversarial Perturbations:', description: 'Attacker Introduce small, carefully crafted perturbations to the pixel values of an image to mislead the model without significantly changing the visual appearance to humans.' },
          { name: 'Image Splicing: ', description: 'Attacker Combine parts of different images to create a composite image with the goal of confusing the model.' },
          { name: 'Watermarking or Overlaying: ', description: 'Embed watermarks or overlay additional objects onto images to manipulate the model predictions.' },
          { name: 'Metadata Tampering:', description: 'Modify metadata associated with images, such as timestamps or geolocation data, to deceive models that rely on this information.' }
        ]
      
        // General mitigations for ML with external sources
        updatedGeneralMitigations = [
          <div><ul>

     
      <li><b>Adversarial Training:</b></li>
      <p>Train your models with adversarial examples to make them more robust to small perturbations in the input data.During training, include adversarial examples that are generated to mislead the model, forcing it to learn more resilient features.</p>

      <li><b>Input Validation:</b></li>
       <p>Implement strict input validation to detect anomalies or unexpected patterns in the input images.Set thresholds for acceptable brightness, contrast, or color balance in input images, flagging those that deviate significantly from the norm.</p>

      <li><b>Image Metadata Verification:</b> </li>
      <p>Verify and validate metadata associated with images, such as timestamps and geolocation data, to ensure consistency and authenticity.Confirm that the timestamp on an image corresponds to a plausible time, preventing manipulated timestamps from affecting the model.</p>

<li><b>Out-of-Distribution Detection:</b></li>
<p>Use methods to identify instances that fall outside the distribution of your training data, helping to detect anomalous or potentially poisoned samples.Employ techniques like anomaly detection to identify images with features not encountered during training.</p>
      </ul>
      </div>
          
     
        ];
      }
    }
   




    // Set attack recommendations inside the table
    setAttackRecommendations(updatedAttackRecommendations);

    // Set general mitigations outside the table
    setGeneralMitigations(updatedGeneralMitigations);
  };
  return (
    




<div className='select-container'>
  <label ><center>
  <h3>RECCOMENDATION SYSTEM FOR DATA POISONING</h3>
  <br></br>
    <b><em>Select Field</em></b>
    <div className='dropdown'>
    <select value={selectedOption} onChange={handleOptionChange} className='dropdown' >
      <option value="ML">ML</option>
      <option value="webMobile">Web/Mobile</option>
      <option value="cloud">Cloud</option>
      <option value="IoT">IoT</option>
    </select>
    </div>
    </center>
  </label>
  
  <br />
  
  


  {selectedOption === 'IoT' ? (
      <IoTRecommendations />
    ) : selectedOption === 'webMobile' ? (
      <WebRecommendations />
    ) : selectedOption === 'cloud' ? (
      <CloudRecommendations />
    ) :(
    <>
    <div className='Design'>
      <label> <center>
        <b> Select Type of Data</b>
       <div className='dropdown1'>
        <select value={selectedPhase} onChange={handlePhaseChange} className='dropdown' >
          <option value="DuringTraining">Numerical Data</option>
          <option value="DuringDeployment">Categorical Data</option>
          <option value="WithExternalSources">Image Data</option>
        </select>
        </div>
        </center>
      </label>
      </div>
      

      <br /><br></br>
<center>
      <button onClick={handleRecommendationsClick}>Show Recommendations</button>
</center>

      <br />
       


      {attackRecommendations.length > 0 && (
        <div>
          <h3>POSSIBLE POISONING METHODS</h3>
          <br></br>
          <table className="recommendation-table">
            <thead>
              <tr>
                <th>WAYS OF POISONING</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {attackRecommendations.map((recommendation, index) => (
                <tr key={index}>
                  <td><strong>{recommendation.name}</strong></td>
                  <td>{recommendation.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedOption !== 'IoT' && generalMitigations.length > 0 && (
        <div>
          <br></br>
          <h3>WAYS TO PREVENT FROM POISONING</h3>
          <br></br>
          <ul>
            {generalMitigations.map((recommendation, index) => (
              <p key={index}>{recommendation}</p>
            ))}
          </ul>
        </div>
      )}
    </>
  )}
</div>


  );
};

export default RecommendationSystem;