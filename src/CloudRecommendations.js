import React from 'react'
import { useState } from 'react';

const CloudRecommendations = () => {
  const [selectedCloudCategory, setSelectedCloudCategory] = useState('Cloud');
  const [CloudAttackRecommendations, setCloudAttackRecommendations] = useState([]);
  const [CloudGeneralMitigations, setCloudGeneralMitigations] = useState([]);

  const handleCloudCategoryChange = (event) => {
    setSelectedCloudCategory(event.target.value);
  };
  const handleCloudRecommendationsClick = () => {
    // Implement the logic for IoT attack recommendations based on the selected category.
    let updatedCloudAttackRecommendations = [];
    let updatedCloudGeneralMitigations = [];

    // Placeholder data for IoT attack recommendations and general mitigations
    if (selectedCloudCategory === 'Cloud') {
      updatedCloudAttackRecommendations = [
        { name: 'Direct Injection Attacks', description: 'Attackers infiltrate systems to insert or modify data directly within databases or data pipelines.' },
        { name: 'Data Supply Chain Compromises', description: ' Attackers target external data sources or transmission channels to inject poisoned data before it reaches cloud systems.' },
        { name: 'Denial-of-Service (DoS) Attacks', description: 'Attackers overwhelm cloud systems with traffic, potentially disrupting access to or corrupting structured data.' },
        { name: ' Man-in-the-Middle Attacks', description: 'Attacker Interceps the data as it flows between different systems within the cloud infrastructure, modifying it before it reaches its destination.' }
      ];

      updatedCloudGeneralMitigations = [
    <div><ul>

      <li><b>Access control:</b></li>
      <p>Define granular access permissions based on roles and least privilege principles. </p>
        
      <li><b>Cross-validation and consistency checks:</b></li>
      <p> Compare data against multiple sources, historical records, or domain-specific constraints to identify anomalies.</p>

      <li><b>Alerting and notification systems:</b></li>
       <p>Promptly notify security teams of potential threats for rapid response.</p>
      
      <li><b>Audit trails:</b></li>
      <p>Track all data access and modifications for accountability and investigation purposes.</p>
      
      </ul>
      </div>
      ];
    } else if (selectedCloudCategory === 'Network') {
      // Add data for Network-level attacks and mitigations
      updatedCloudAttackRecommendations = [
        // Add Network-level attack recommendations
        { name: 'Data exfiltration', description: ' Unstructured data often contains sensitive information likePII (Personally Identifiable Information) or trade secrets. Attackers can exploit vulnerabilities in storage, processing, or access controls to steal this data.' },
        { name: 'Insider threats', description: 'Malicious insiders with access to data can intentionally sabotage systems, plant false information, or steal sensitive data for personal gain.' },
        { name: 'Data augmentation', description: 'Subtly modifying existing data points to change its meaning or sentiment.' },
        { name: 'Poisoning through compromised sources', description: 'Tampering with external data feeds or APIs before they reach cloud systems.' }

      ];

      updatedCloudGeneralMitigations = [
        // Add Network-level mitigations
        <div><ul>

      <li><b>Data provenance and audit trails:</b></li>
      <p>Tracking the origin and modifications of data for accountability and investigation purposes.</p>
        
      <li><b>Cybersecurity best practices: </b></li>
      <p> Securing cloud infrastructure, access controls, and data pipelines against unauthorized access and manipulation.</p>

      <li><b>Poisoning through compromised sources:</b></li>
       <p>Tampering with external data feeds or APIs before they reach cloud systems.</p>
      
      <li><b>Proactive content screening:</b></li>
      <p>Develop policies and systems to automatically flag and remove harmful or misleading content before it reaches users. Utilize natural language processing and image recognition tools to identify keywords, phrases, and visual cues associated with malicious content.</p>
      </ul>
      
      </div>

        // Add more mitigations as needed
      ];
    }

    // Set IoT attack recommendations inside the table
    setCloudAttackRecommendations(updatedCloudAttackRecommendations);

    // Set IoT general mitigations outside the table
    setCloudGeneralMitigations(updatedCloudGeneralMitigations);
  };





  return (
    <div>
    <div>
      <center>
    
      <label>
        <b>Select Type of IoT Data:</b>
        <select value={selectedCloudCategory} onChange={handleCloudCategoryChange}>
          <option value="Device">Structured Data</option>
          <option value="Network">Unstructured Data</option>
        </select>
      </label>

      <br />

      <button onClick={handleCloudRecommendationsClick}>Show  Recommendations</button>
</center>
</div>
      <br />

      {CloudAttackRecommendations.length > 0 && (
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
              {CloudAttackRecommendations.map((recommendation, index) => (
                <tr key={index}>
                  <td><strong>{recommendation.name}</strong></td>
                  <td>{recommendation.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {CloudGeneralMitigations.length > 0 && (
        <div>
          <br></br>``
          <h3>WAYS TO PREVENT FROM POISONING</h3>
          <br></br>
          <ul>
            {CloudGeneralMitigations.map((recommendation, index) => (
              <p key={index}>{recommendation}</p>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default CloudRecommendations