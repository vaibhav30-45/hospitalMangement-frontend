import "../styles/admin.css"; 

const StatusCards = () => {
  const data = [
    { count: 12, title: "All Doctors" },
    { count: 230, title: "All Patients" },
    { count: 5, title: "New Booking" },
    { count: 2, title: "Today Sessions" },
    { count: 18, title: "Total Appointments" },
    { count: 7, title: "Pending Reports" },
    
  ];

  return (
    <div className="status-grid">
      {data.map((item, i) => (
        <div className="status-card" key={i}>
          <h3>{item.count}</h3>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatusCards;
