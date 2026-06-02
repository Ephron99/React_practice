import { useState } from 'react';

export default function VisitorRegistration({ onAddRecord }) {
  // 1. All State Variables for the form fields
  const [visitorName, setVisitorName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [department, setDepartment] = useState("Banks and Deposit");
  const [status, setStatus] = useState("Employee");
  const [phoneCountry, setPhoneCountry] = useState("Rwanda");
  const [phonePrefix, setPhonePrefix] = useState("+250");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle country change to auto-update prefix
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setPhoneCountry(country);
    if (country === "Rwanda") setPhonePrefix("+250");
    if (country === "Kenya") setPhonePrefix("+254");
    if (country === "Uganda") setPhonePrefix("+256");
  };

  // 2. The Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // Quick validation to ensure we don't submit blank records
    if (!visitorName || !idNumber) {
      alert("Please fill in at least the Names and Id No.");
      return;
    }

    // Package the data exactly how App.jsx and the Table expect it
    const newVisitorRecord = {
      names: visitorName,
      documentId: idNumber,
      contact: `${phonePrefix} ${phoneNumber}`,
      // Formats the time to match your screenshot layout (YYYY-MM-DD HH:MM:SS)
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };

    // Send data UP to App.jsx
    onAddRecord(newVisitorRecord);
    
    // Clear the form fields for the next visitor
    setVisitorName("");
    setIdNumber("");
    setPhoneNumber("");
    // We leave Department, Status, and Country as they are, to save time on the next entry!
  };

  return (
    <div className="registration-card">
      <div className="form-fields">
        <label>
          Names 
          <input 
            type="text" 
            value={visitorName} 
            onChange={(e) => setVisitorName(e.target.value)} 
          />
        </label>
        
        <label>
          Id No 
          <input 
            type="text" 
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
        </label>
        
        <label>
          Department 
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="Banks and Deposit">Banks and Deposit</option>
            <option value="IT Support">IT Support</option>
            <option value="Human Resources">Human Resources</option>
          </select>
        </label>
        
        <label>
          Status 
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Employee">Employee</option>
            <option value="Visitor">Visitor</option>
            <option value="Contractor">Contractor</option>
          </select>
        </label>
        
        <label>
          Doc Type 
          <input type="text" value="Personal ID" readOnly />
        </label>
        
        <div className="phone-input">
          <label>Phone No</label>
          <select value={phoneCountry} onChange={handleCountryChange}>
            <option value="Rwanda">Rwanda</option>
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
          </select>
          <input 
            type="text" 
            value={phonePrefix} 
            readOnly 
            style={{ width: '60px', marginLeft: '5px', marginRight: '5px' }}
          />
          <input 
            type="text" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        
        <div className="action-buttons" style={{ marginTop: '15px' }}>
          <button type="button" onClick={handleSubmit}>Submit</button>
          <button type="button">Non ID</button>
        </div>
      </div>

      <div className="avatar-section">
        {/* Dynamic Avatar: Shows first letter of name, or a default icon */}
        <div className="avatar-placeholder" style={{ 
            width: '150px', height: '150px', backgroundColor: '#007bff', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', color: 'white', fontSize: '64px', margin: '0 auto 15px' 
          }}>
          {visitorName ? visitorName.charAt(0).toUpperCase() : "👤"}
        </div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button type="button">Start/Stop</button>
          <button type="button">Capture</button>
        </div>
      </div>
    </div>
  );
}