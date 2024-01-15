import { useState } from 'react';
import React from 'react'

const IoTRecommendations = () => {
    const [selectedIoTCategory, setSelectedIoTCategory] = useState('Device');
  const [iotAttackRecommendations, setIoTAttackRecommendations] = useState([]);
  const [iotGeneralMitigations, setIoTGeneralMitigations] = useState([]);

  const handleIoTCategoryChange = (event) => {
    setSelectedIoTCategory(event.target.value);
  };

  const handleIoTRecommendationsClick = () => {
    // Implement the logic for IoT attack recommendations based on the selected category.
    let updatedIoTAttackRecommendations = [];
    let updatedIoTGeneralMitigations = [];

    // Placeholder data for IoT attack recommendations and general mitigations
    if (selectedIoTCategory === 'Device') {
      updatedIoTAttackRecommendations = [
        { name: 'Sensor Spoofing', description: 'Attackers may manipulate the readings of sensors by either sending false signals or interfering with the sensors directly.' },
        { name: 'Jamming or Interference', description: ' Disrupt the communication between IoT devices and the central system by jamming radio frequencies or introducing interference.' },
        { name: 'Replay Attacks', description: 'Record legitimate status data and replay it later to the IoT system, tricking it into believing that the recorded data is current.' },
        { name: 'Data Injection through Compromised Devices', description: 'Attackers Compromise one or more IoT devices within a network to inject false status data into the system.' }
      ];

      updatedIoTGeneralMitigations = [
    <div><ul>

      <li><b>Secure Communication Protocols:</b></li>
      <p>Use encrypted and secure communication protocols between IoT devices and the central system to prevent unauthorized access and tampering of status data.Employ protocols like TLS (Transport Layer Security) to secure data transmission. </p>
        
      <li><b>Device Authentication: </b></li>
      <p> Implement strong authentication mechanisms for IoT devices to ensure that only authorized devices can submit status data. Use secure authentication protocols, such as OAuth or API keys, to validate the identity of IoT devices.</p>

      <li><b>Behavioral Anomaly Detection:</b></li>
       <p>  Employ anomaly detection algorithms to identify unusual patterns or deviations from normal behavior in the transmitted status data.Monitor the typical behavior of devices and raise alerts if there are sudden and unexpected changes in the reported status.</p>
      
      <li><b>Time Stamping and Sequencing:</b></li>
      <p>Use accurate time stamps and sequence numbers for status data to detect replay attacks and ensure the chronological order of received data.Include timestamps and sequence numbers in each status update, and validate that they are consistent with the expected order.</p>
      
      </ul>
      </div>
      ];
    } else if (selectedIoTCategory === 'Network') {
      // Add data for Network-level attacks and mitigations
      updatedIoTAttackRecommendations = [
        // Add Network-level attack recommendations
        { name: 'Manipulation of Control Signals', description: ' Alter the control signals sent from the automation system to actuators or devices, causing unintended actions or disruptions.' },
        { name: 'Sybil Attacks', description: 'Introduce multiple fake IoT devices into the network, creating a false sense of scale and influencing decision-making processes.' },
        { name: 'Compromised Network Infrastructure', description: 'Attack the underlying network infrastructure supporting IoT devices, leading to data interception or manipulation.' },
        { name: 'Communication Interception', description: 'Attackers Intercept and modify communication between IoT devices, affecting the data exchanged between them and potentially poisoning the automation process.' }

      ];

      updatedIoTGeneralMitigations = [
        // Add Network-level mitigations
        <div><ul>

      <li><b>Device Authentication</b></li>
      <p>Implement strong authentication mechanisms for IoT devices to ensure that only authorized devices can submit or receive automation data.Use secure authentication protocols, such as OAuth or API keys, to validate the identity of IoT devices. </p>
        
      <li><b>Data Integrity Checks </b></li>
      <p> Apply checksums, digital signatures, or hash functions to verify the integrity of automation data, ensuring that it has not been tampered with during transmission.Include a cryptographic hash of the automation data in each transmission and verify it on the receiving end.</p>

      <li><b>Secure Boot and Hardware Security</b></li>
       <p>Utilize secure boot processes and hardware security features to protect the IoT device's software and firmware from unauthorized modifications. Implement hardware-based security measures like Trusted Platform Modules (TPM) to ensure the integrity of device boot processes.</p>
      
      <li><b>Data Validation and Filtering:</b></li>
      <p>Implement strict validation and filtering mechanisms to ensure that incoming automation data adheres to predefined standards.Use regex or format checks to ensure that automation data conforms to expected patterns.</p>
      </ul>
      
      </div>

        // Add more mitigations as needed
      ];
    }

    // Set IoT attack recommendations inside the table
    setIoTAttackRecommendations(updatedIoTAttackRecommendations);

    // Set IoT general mitigations outside the table
    setIoTGeneralMitigations(updatedIoTGeneralMitigations);
  };

  return (
    <div>
    <div>
      <center>
    
      <label>
        <b>Select Type of IoT Data:</b>
        <select value={selectedIoTCategory} onChange={handleIoTCategoryChange}>
          <option value="Device">Status Data</option>
          <option value="Network">Automation Data</option>
        </select>
      </label>

      <br />

      <button onClick={handleIoTRecommendationsClick}>Show  Recommendations</button>
</center>
</div>
      <br />

      {iotAttackRecommendations.length > 0 && (
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
              {iotAttackRecommendations.map((recommendation, index) => (
                <tr key={index}>
                  <td><strong>{recommendation.name}</strong></td>
                  <td>{recommendation.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {iotGeneralMitigations.length > 0 && (
        <div>
          <br></br>
          <h3>WAYS TO PREVENT FROM POISONING</h3>
          <br></br>
          <ul>
            {iotGeneralMitigations.map((recommendation, index) => (
              <p key={index}>{recommendation}</p>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default IoTRecommendations