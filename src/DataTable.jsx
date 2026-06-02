export default function DataTable({ records }) {
  return (
    <div className="table-container">
      <h3>Recent Logs</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* We map over the 'records' prop to generate our rows dynamically */}
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.phone}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
