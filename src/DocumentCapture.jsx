export default function DocumentCapture() {
  return (
    <div className="document-card">
      <div className="doc-types">
        <label><input type="radio" name="docType" defaultChecked /> ID</label>
        <label><input type="radio" name="docType" /> Driving License</label>
        <label><input type="radio" name="docType" /> Passport</label>
        <label><input type="radio" name="docType" /> Other</label>
      </div>
      
      <div className="camera-preview-box">
        {/* The large blank rectangle in your UI */}
      </div>
    </div>
  );
}