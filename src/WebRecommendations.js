import { useState } from 'react';
import React from 'react'

const WebRecommendations = () => {
    const [selectedWebCategory, setSelectedWebCategory] = useState('Application');
    const [webAttackRecommendations, setWebAttackRecommendations] = useState([]);
    const [webGeneralMitigations, setWebGeneralMitigations] = useState([]);
  
    const handleWebCategoryChange = (event) => {
      setSelectedWebCategory(event.target.value);
    };
  
    const handleWebRecommendationsClick = () => {
      // Implement the logic for web attack recommendations based on the selected category.
      let updatedWebAttackRecommendations = [];
      let updatedWebGeneralMitigations = [];
  
      // Placeholder data for web attack recommendations and general mitigations
      if (selectedWebCategory === 'Structure') {
        updatedWebAttackRecommendations = [
          { name: 'Database Data', description: 'Manipulating SQL queries through malicious inputs and Altering existing records or introducing fake records.' },
          { name: 'JSON and XML Data', description: 'Injection attacks in a way by Embedding malicious code or structures and Schema manipulation by  Modifying the data structure' },
          { name: 'CSV and Excel Data', description: 'Data tampering by Altering values or adding fake entries and Macro-enabled files by Embedding malicious macros in Excel files.' },
          { name: 'Web Forms and User Input Data', description: 'SQL injection for Exploiting form inputs to manipulate database queries and Cross-site scripting (XSS) by Injecting malicious scripts into user inputs' }
        ];
  
        updatedWebGeneralMitigations = [
          <div>
            <ul>
                <li><b>Database Data (e.g., MySQL, PostgreSQL) :</b></li>
                <p>Use parameterized queries to prevent SQL injection.</p>
                <p>Employ input validation and sanitation.</p>
                <p>Implement least privilege access controls to limit database permissions.</p>

                <li><b>JSON and XML Data:</b></li>
                <p>Validate incoming JSON or XML against predefined schemas.</p>
                <p>Use secure parsing libraries to mitigate injection risks.</p>
                <p>Apply strict content-type checking for incoming data.</p>

                <li><b>CSV and Excel Data:</b></li>
                <p>Validate data integrity through checksums or digital signatures.</p>
                <p>Restrict the use of macros in Excel files.</p>
                <p>Scan uploaded files for malicious content</p>

                <li><b>Web Forms and User Input:</b></li>
                <p>Input validation and sanitation for form fields.</p>
                <p>Parameterized queries to prevent SQL injection.</p>
                <p>Use Content Security Policy (CSP) to mitigate XSS risks.</p>

            </ul>
          </div>
      
          // Add more mitigations as needed
        ];
      } 
      
      else if (selectedWebCategory === 'Unstructure') {
        // Add data for Infrastructure-level attacks and mitigations
        updatedWebAttackRecommendations = [
          // Add Infrastructure-level attack recommendations
          { name: 'Text Data', description: 'Attacker can use Spam and malicious links for Injecting irrelevant or harmful content.Phishing attacks can also be done  to steal sensitive information.' },
          { name: 'Image Data', description: 'Attackers attempt to  Embedding malicious code within images(Image-based malware) and attempt to Manipulate images by removing watermarks (Watermark removal)' },
          { name: 'Audio Data', description: 'Attackers attempt to create Audio-based malware Embedding malicious code within audio files and Voice phishing by Using manipulated audio to deceive users' },
          { name: 'Video Data', description: 'Attackers attempt to Embed harmful elements within videos (Malicious video content) and AI-generated videos with manipulated content' }
        ];
  
        updatedWebGeneralMitigations = [
          // Add Infrastructure-level mitigations
          <div>
            
          </div>,
          // Add more mitigations as needed
          <div>
            <ul>
                <li><b>Text Data:</b></li>
                <p>Implement content filtering to detect and block spam.</p>
                <p>Use machine learning models for sentiment analysis to identify potentially malicious text.</p>
                <p>Use machine learning models for sentiment analysis to identify potentially malicious text.</p>

                <li><b>Image Data:</b></li>
                <p>Employ antivirus and anti-malware tools to scan image files.</p>
                <p>Implement digital watermarking for copyright protection.</p>
                <p>Validate image metadata to ensure integrity.</p>

                <li><b>Video Data:</b></li>
                <p>Use content analysis tools to detect anomalies or malicious content.</p>
                <p>Implement video authentication mechanisms to verify the integrity of videos.</p>

                <li><b>Social Media Data:</b></li>
                <p>Implement user authentication mechanisms to verify identities.</p>
                <p>Use content moderation tools to detect and remove fake profiles and misinformation.</p>
                <p>Promote media literacy and critical thinking to combat the spread of false information.</p>


            </ul>
            </div>
        ];
      }
      else if (selectedWebCategory === 'Semi') {
        // Add data for Infrastructure-level attacks and mitigations
        updatedWebAttackRecommendations = [
          // Add Infrastructure-level attack recommendations
          { name: 'JSON Data', description: 'In this attack, an attacker redefines or modifies the structure of JSON data to deceive applications or systems parsing the JSON content.' },
          { name: 'XML Data', description: 'Attackers can inject or modify DTD declarations to manipulate the structure of XML documents, leading to data disclosure or denial-of-service.' },
          { name: 'YAML Data', description: 'Attackers may attempt to confuse the YAML parser by providing unexpected data types or coercing data into unintended formats, leading to misinterpretation of the data.' }
        ];
  
        updatedWebGeneralMitigations = [
          <div>
            <ul>
                <li><b>YAML Data</b></li>
                <p>Validate incoming YAML against predefined schemas.</p>
                <p>Use strict content-type checking on the client side.</p>
                <p>Define and enforce a CSP to restrict the domains from which external YAML content can be loaded.</p>
                <p>Avoid dynamically constructing YAML content using user inputs, especially without proper validation and sanitation. </p>
                <p>Enforce strict parsing rules to prevent indentation-based attacks.</p>
                <li><b>JSON</b></li>
                <p>Validate incoming JSON against predefined schemas.</p>
                <p>Use secure JSON parsing libraries to prevent injection risks.</p>
                <p>Avoid using user input directly to generate JSON content.</p>
                <p>Ensure that the Content-Type headers in HTTP responses accurately specify the content type as JSON.</p>
                <p>Apply strict content-type checking for incoming data.</p>
                <li><b>XML Data</b></li>
                <p>Use secure XML parsers that have external entity expansion disabled by default.</p>
                <p>Configure XML parsers to disallow external entities.</p>
                <p>Avoid the use of Document Type Definition, especially when processing untrusted XML data.</p>
                <p>Set limits on entity expansion to prevent resource exhaustion attacks. Ensure that the XML parser does not excessively expand entities, which could lead to denial-of-service conditions.</p>
                <p> Implement a Content Security Policy to control the sources from which XML content can be loaded.</p>
                
            </ul>
          </div>
        ];
      }
  
      // Set web attack recommendations inside the table
      setWebAttackRecommendations(updatedWebAttackRecommendations);
  
      // Set web general mitigations outside the table
      setWebGeneralMitigations(updatedWebGeneralMitigations);
    };
  
    return (
      <div>
      <div>
      <center>
        <label>
          <b>Select Web Category:</b>
          <select value={selectedWebCategory} onChange={handleWebCategoryChange}>
            <option value="Structure">Structured Data</option>
            <option value="Unstructure">UnStructured Data</option>
            <option value="Semi">Semi-Structured Data</option>
          </select>
        </label>
  
        <br />
  
        <button onClick={handleWebRecommendationsClick}>Show Recommendations</button>
  </center>
  </div>
        <br />
  
        {webAttackRecommendations.length > 0 && (
          <div>
            <h3>TYPES OF WEB DATA THAT CAN BE POISONED</h3>
            <br></br>
            <table className="recommendation-table">
              <thead>
                <tr>
                  <th>TYPES OF WEB DATA</th>
                  <th>WAYS OF POISONING</th>
                </tr>
              </thead>
              <tbody>
                {webAttackRecommendations.map((recommendation, index) => (
                  <tr key={index}>
                    <td><strong>{recommendation.name}</strong></td>
                    <td>{recommendation.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
  
        {webGeneralMitigations.length > 0 && (
          <div>
            <br></br>
            <h3>GENERAL MITIGATION STEPS FOR WEB</h3>
            <br></br>
            <ul>
              {webGeneralMitigations.map((recommendation, index) => (
                <p key={index}>{recommendation}</p>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  
}

export default WebRecommendations