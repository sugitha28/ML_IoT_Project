import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  // State variables to store user inputs
  const [iotSystemName, setIotSystemName] = useState('');
  const [components, setComponents] = useState([]);
  const [wirelessNetworks, setWirelessNetworks] = useState([]);
  const [useCloudStorage, setUseCloudStorage] = useState(null);
  const [productDescription, setProductDescription] = useState('');
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [guidelinesData, setGuidelinesData] = useState([]);

  // Options for wireless network checkboxes
  const networkOptions = ['Wi-Fi', 'Zigbee', 'Bluetooth'];

  // Function to handle the "Show Guidelines" button click
  const handleShowGuidelines = () => {
    // Set the flag to show guidelines based on IoT system name
    setShowGuidelines(true);

    // Set guidelines data based on the selected IoT system name
    let updatedGuidelinesData = [];

    if (iotSystemName === 'Smart WareHouse') {
      updatedGuidelinesData = [
        { category: 'Authentication', subCategory: 'Password Security Credentials', guideline: 'Determine the resistance of the application against brute force password guessing using available password dictionaries by evaluating the length, complexity, reuse, and aging requirements of passwords.', standard: 'OWASP - 4.4.7', id: 'WSTG-ATHN-07' },
        { category: 'User Control', subCategory: 'Weak or Unenforced Username Policy', guideline: 'Determine the structure of account names.Evaluate the application’s response to valid and invalid account names.Use different responses to valid and invalid account names to enumerate valid account names.Use account name dictionaries to enumerate valid account names.', standard: 'OWASP - 4.3.5', id: 'WSTG-IDNT-05' },
        { category: 'Access control', subCategory: 'IoT Devices', guideline: 'Implement strict access controls for IoT devices. Establish an incident response plan with defined roles and responsibilities.', standard: 'OWASP - 4.3.1', id: 'WSTG-IDNT-01' },
        { category: 'Access control', subCategory: 'Band-width', guideline: 'Set container-specific bandwidth limits based on expected network traffic.', standard: 'NIST - 2.4.2', id: '-' },
        { category: 'Access control', subCategory: 'Hardware Tag', guideline: 'Enable self-monitoring and automatic restoration for hardware tags detecting unusual behaviors.', standard: 'NIST - CP-04(05)', id: '-' },
        { category: 'Network Traffic', subCategory: 'IoT Gateways', guideline: 'Implement kernel-level controls on IoT gateways that notice and attenuate large amounts of uploaded traffic from hardware tags.', standard: 'NIST - 2.4.2', id: '-' },
        { category: 'Firewall', subCategory: 'Access', guideline: 'Define concise policies for firewall rules and basic network access in the warehouse. Provide visual representations for easy understanding.', standard: 'NIST - Best Practice', id: 'ID_B1' },
        { category: 'Data Encryption', subCategory: 'Sensitive Information', guideline: 'Implement data encryption measures to protect sensitive information. Utilize strong encryption algorithms (e.g., AES, RSA). Apply encryption at rest and segment encryption based on data nature and criticality.', standard: 'OWASP - 4.9.4', id: 'WSTG-CRYP-04' },
        { category: 'Wireless Communication', subCategory: 'Security', guideline: 'Utilize strong encryption for wireless communication. Implement frequency hopping or spread spectrum techniques.Deploy Wireless Intrusion Detection Systems (WIDS) to detect and respond to unauthorized activities. Implement physical security measures and network segmentation.', standard: 'NIST - AC-18 W', id: '-' },
        { category: 'Integrity Check', subCategory: 'Business Logic', guideline: 'Review the project documentation for components of the system that move, store, or handle data. Determine what type of data is logically acceptable by the component and what types the system should guard against. Determine who should be allowed to modify or read that data in each component. Attempt to insert, update, or delete data values used by each component that should not be allowed per the business logic workflow.', standard: 'OWASP - 4.10.3', id: 'WSTG-BUSL-03' },
        { category: 'Cloud Storage', subCategory: 'Access control', guideline: 'Assess that the access control configuration for the storage services is properly in place.    First, identify the URL to access the data in the storage service, and then consider the following tests: Read unauthorized data and Upload a new arbitrary file', standard: 'OWASP - 4.2.11', id: 'WSTG-CONF-11' },
        { category: 'HTTP methods', subCategory: '-', guideline: 'Enumerate supported HTTP methods. Test for access control bypass. Test HTTP method overriding technique.', standard: 'OWASP - 4.7.3', id: 'WSTG-CONF-06' },
        { category: 'Application misuse', subCategory: 'Vulnerabilities', guideline: 'Generate notes from all tests conducted against the system. Review which tests had a different functionality based on aggressive input. Understand the defenses in place and verify if they are enough to protect the system against bypassing techniques.', standard: 'OWASP - 4.10.7', id: 'IWSTG-BUSL-07' },
        { category: 'Network Infrastructure Configuration', subCategory: 'Security and configuration', guideline: 'Review the applications’ configurations set across the network and validate that they are not vulnerable. Validate that used frameworks and systems are secure and not susceptible to known vulnerabilities due to unmaintained software or default settings and credentials.', standard: 'OWASP - 4.2.1', id: 'IWSTG-CONF-01' },
      ];
    } else if (iotSystemName === 'SmartHome') {
      updatedGuidelinesData = [
        { category: 'System and Information Integrity', subCategory: 'Firmware Updates', guideline: 'Regularly update device firmware to patch bugs, fix vulnerabilities, and add new functionalities. Ensures devices are protected against known vulnerabilities and potential cyber threats.', standard: 'NIST - SI-02', id: '-' },
        { category: 'System and Information Integrity', subCategory: 'Monitoring the Network', guideline: 'Implement tools to monitor IoT device connections during message transfer. Enables the detection of unusual activities or potential security breaches, enhancing overall network security.', standard: 'NIST - SC-05(03) D', id: '-' },
        { category: 'Authentication', subCategory: 'Multi-factor Authentication', guideline: 'Utilize multi-factor authentication (MFA) and device-based authentication.  Identify the type of MFA used by the application. Determine whether the MFA implementation is robust and secure. Attempt to bypass the MFA.', standard: 'OWASP - 4.4.11', id: 'WSTG-ATHN-11' },
        { category: 'Authentication', subCategory: 'Digital Signature', guideline: 'Use device certificates or unique identifiers for IoT hubs to ensure that only authorized hubs can connect to the network.', standard: 'NIST - CM-14', id: '-' },
        { category: 'Network Security', subCategory: 'Security and Configuration', guideline: 'Review the applications’ configurations set across the network and validate that they are not vulnerable. Validate that used frameworks and systems are secure and not susceptible to known vulnerabilities due to unmaintained software or default settings and credential', standard: 'OWASP - 4.2.1', id: 'WSTG-CONF-01' },
        { category: 'Network Security', subCategory: 'VPN', guideline: 'Utilize secure virtual private networks (VPNs) to create encrypted communication channels within the network, ensuring that data is accessible only to authorized users.', standard: 'OWASP - Acess Control - Best Practice', id: '-' },
        { category: 'Cloud Storage', subCategory: 'Access control', guideline: 'Users accessing cloud platforms for smart home services should use strong, unique passwords. Utilize OAuth or other secure authentication mechanisms for users connecting their devices to cloud services. Ensure that data transmitted between smart devices and the cloud is encrypted using secure protocols.', standard: 'OWASP - 4.5.5', id: 'WSTG-ATHZ-05' },
        { category: 'Firewall', subCategory: 'Access', guideline: 'Define concise policies for firewall rules and basic network access in the warehouse. Provide visual representations for easy understanding.', standard: 'NIST - Best Practice', id: '-' },
        { category: 'HTTP methods', subCategory: '-', guideline: 'Enumerate supported HTTP methods. Test for access control bypass. Test HTTP method overriding technique', standard: 'OWASP - 4.7.3', id: 'WSTG-CONF-06' },
        { category: 'Wireless Communication', subCategory: 'ZigBee Network Security', guideline: 'Implement encryption and authentication measures for ZigBee devices.Protects against man-in-the-middle attacks and firmware compromises. ', standard: 'OWASP - Best Practice', id: 'ID_B2' },
      ];
    } else if (iotSystemName === 'Smart HealthCare System') {
      updatedGuidelinesData = [
        { category: 'System and Information Integrity', subCategory: 'Firmware Updates', guideline: 'Regularly update device firmware to patch bugs, fix vulnerabilities, and add new functionalities. Ensures devices are protected against known vulnerabilities and potential cyber threats.', standard: 'NIST - SI-02', id: '-' },
        { category: 'System and Information Integrity', subCategory: 'Monitoring the Network', guideline: 'Implement tools to monitor IoT device connections during message transfer. Enables the detection of unusual activities or potential security breaches, enhancing overall network security.', standard: 'NIST - SC-05(03) D', id: '-' },
        { category: 'Authentication', subCategory: 'Multi-factor Authentication', guideline: 'Utilize multi-factor authentication (MFA) and device-based authentication.  Identify the type of MFA used by the application. Determine whether the MFA implementation is robust and secure. Attempt to bypass the MFA.', standard: 'OWASP - 4.4.11', id: 'WSTG-ATHN-11' },
        { category: 'Authentication', subCategory: 'Digital Signature', guideline: 'Identify and document roles used by the application. Attempt to switch, change, or access another role.Review the granularity of the roles and the needs behind the permissions given.', standard: 'OWASP - 4.3.1', id: 'WSTG-IDNT-01' },
        { category: 'Cloud Storage', subCategory: 'Access control', guideline: 'Assess that the access control configuration for the storage services is properly in place.First, identify the URL to access the data in the storage service, and then consider the following tests: Read unauthorized data and upload a new arbitrary file. Determine if OAuth2 implementation is vulnerable or using a deprecated or custom implementation.', standard: 'OWASP - 4.2.11 & OWASP - 4.5.5', id: 'WSTG-INPV-15 & WSTG-ATHZ-05' },
        { category: 'HTTP methods', subCategory: '-', guideline: 'Enumerate supported HTTP methods. Test for access control bypass. Test HTTP method overriding techniques.', standard: 'OWASP - 4.2.6', id: 'WSTG-CONF-06' },
        { category: 'Threat modelling', subCategory: 'Threat', guideline: 'Optimise Network/Application/Internet security through identifying objectives, threats, and defining countermeasures to mitigate the effects of the threat', standard: 'OWASP ', id: 'WSTG - 2.2' },
        { category: 'Wireless Communication', subCategory: 'Encryption and Monitoring', guideline: 'Utilize strong encryption for wireless communication. Implement frequency hopping or spread spectrum techniques. Deploy Wireless Intrusion Detection Systems (WIDS) to detect and respond to unauthorized activities. Implement physical security measures and network segmentation.', standard: 'NIST - AC-18 W', id: '-' },
        { category: 'Data Encryption', subCategory: 'Sensitive Information', guideline: 'Implement data encryption measures to protect sensitive information. Utilize strong encryption algorithms (e.g., AES, RSA). Apply encryption at rest and segment encryption based on data nature and criticality.', standard: 'OWASP - 4.4.1', id: 'WSTG-CRYP-03' },
        { category: 'Network Infrastructure Configuration', subCategory: 'Security and configuration', guideline: 'Review the applications’ configurations set across the network and validate that they are not vulnerable. Validate that used frameworks and systems are secure and not susceptible to known vulnerabilities due to unmaintained software or default settings and credentials.', standard: 'OWASP - 4.2.1', id: 'WSTG-CONF-01' },
        { category: 'Permission', subCategory: 'CI/CD and Secure Logging', guideline: 'Permissions for CI/CD: Specify permissions for the Continuous Integration/Continuous Deployment (CI/CD) system.   Secure Logging: Ensure secure logging practices for hardware tags, IoT gateways, and the central hub. Logging Policy: Logs from hardware tags, IoT gateways, and the central hub are copied to a separate server using a secure protocol (e.g., syslog). Only authorized personnel have access to modify logging configurations. Application logs containing security events are retained securely for audit purposes.', standard: 'NIST - 800 - 53', id: '-' },
      ];
    }

    setGuidelinesData(updatedGuidelinesData);
  };

  return (
    <div>
      <div>
        <label>
          IoT System Name:
          <input
            type="text"
            value={iotSystemName}
            onChange={(e) => setIotSystemName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Components in Your System (comma-separated for multiple components):
          <input
            type="text"
            value={components.join(',')}
            onChange={(e) => setComponents(e.target.value.split(','))}
          />
        </label>
      </div>

      <div>
        <label>
          Wireless Networks:
          {networkOptions.map((network) => (
            <div key={network}>
              <label>
                <input
                  type="checkbox"
                  value={network}
                  checked={wirelessNetworks.includes(network)}
                  onChange={(e) => {
                    const checkedNetwork = e.target.value;
                    setWirelessNetworks((prevNetworks) => {
                      if (prevNetworks.includes(checkedNetwork)) {
                        return prevNetworks.filter((network) => network !== checkedNetwork);
                      } else {
                        return [...prevNetworks, checkedNetwork];
                      }
                    });
                  }}
                />
                {network}
              </label>
            </div>
          ))}
        </label>
      </div>

      <div>
        <label>
          Cloud Storage:
          <div>
            <label>
              <input
                type="radio"
                name="cloudStorage"
                value="Yes"
                checked={useCloudStorage === 'Yes'}
                onChange={() => setUseCloudStorage('Yes')}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="cloudStorage"
                value="No"
                checked={useCloudStorage === 'No'}
                onChange={() => setUseCloudStorage('No')}
              />
              No
            </label>
          </div>
        </label>
      </div>

      <div>
        <label>
          Product Description:
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </label>
      </div>

      <div>
        <button onClick={handleShowGuidelines}>Show Guidelines</button>
      </div>

      {showGuidelines && (
        <div>
          <h3>Guidelines for {iotSystemName}</h3>
          <table className="guidelines-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Sub Category</th>
                <th>Guideline</th>
                <th>Standard</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {guidelinesData.map((guideline, index) => (
                <tr key={index}>
                  <td>{guideline.category}</td>
                  <td>{guideline.subCategory}</td>
                  <td>{guideline.guideline}</td>
                  <td>{guideline.standard}</td>
                  <td>{guideline.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
