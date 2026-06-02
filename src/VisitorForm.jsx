export default function VisitorForm() {
  return (
    <div className="form-container">
      <h3>Register New Visitor</h3>
      <form>
        <input type="text" placeholder="Visitor Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Purpose of Visit" />
        
        <button type="button">Generate OTP & Log</button> 
      </form>
    </div>
  );
}
