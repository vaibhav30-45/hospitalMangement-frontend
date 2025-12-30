const UpcomingTable = () => {
  return (
    <div className="table-box">
      <h3>Your Upcoming Booking</h3>

      <table>
        <thead>
          <tr>
            <th>Appoint. Number</th>
            <th>Session Title</th>
            <th>Doctor</th>
            <th>Scheduled Date & Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>General Checkup</td>
            <td>Dr. Sharma</td>
            <td>2050-01-01 18:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingTable;
