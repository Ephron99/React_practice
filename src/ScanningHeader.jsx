export default function ScanningHeader() {
  return (
    <header className="scanning-header">
      <div className="header-left">
        <h2>Scanning Area</h2>
        {/* This is the large yellow/orange input from the screenshot */}
        <input type="text" className="scanning-input" />
      </div>
      
      <div className="header-right">
        <label>
          Equipment 
          <input type="checkbox" />
        </label>
      </div>
    </header>
  );
}