// 1. Accept the 'records' prop
export default function RecentTapsTable({ records }) { 
  return (
    <section className="recent-taps-section">
      <div className="table-controls">
         {/* ... buttons stay the same ... */}
      </div>

      <div className="table-tabs">
        <button className="active-tab">Recent Taps</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Names</th>
              <th>Document Type</th>
              <th>Phone Number</th>
              <th>Entry Time</th>
              <th>Exit Time</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {/* 2. Map over the dynamic records array */}
            {records.length === 0 ? (
              <tr>
                <td colSpan="7" style={{textAlign: "center"}}>No visitors logged yet.</td>
              </tr>
            ) : (
              records.map((record, index) => (
                <tr key={index}>
                  {/* index + 1 gives us row numbers 1, 2, 3... */}
                  <td>{index + 1}</td> 
                  <td>{record.names}</td>
                  <td>{record.documentId}</td>
                  <td>{record.contact}</td>
                  <td>{record.timestamp}</td>
                  <td>--</td> {/* Exit time blank until they leave */}
                  <td>Reception</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}