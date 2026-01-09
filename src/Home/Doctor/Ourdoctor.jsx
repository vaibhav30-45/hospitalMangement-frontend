import doctors from "../../data/doctorsData";
import "./Ourdoctor.css";

const Ourdoctor = () => {
  return (
    <div className="doctor-container">
      {doctors.map((doc) => (
        <div className="doctor-card" key={doc.id}>
          <img src={doc.image} alt={doc.name} />
          <h3>{doc.name}</h3>
          <p>{doc.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Ourdoctor;
