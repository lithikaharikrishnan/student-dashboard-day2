
function StudentCard({ student, onDelete, onView, onEdit }) {
  return (
    <div className="student-card">

      <div className="card-top">
        <img
          src={student.image}
          alt={student.name}
          className="student-image"
        />

        <span className={student.status === "Active" ? "active" : "inactive"}>
          {student.status}
        </span>
      </div>

      <h3>{student.name}</h3>

      <p>{student.email}</p>
      <p>Roll No: {student.rollNo}</p>
      <p>Department: {student.department}</p>
      <p>Year: {student.year}</p>

      <div className="card-buttons">

        <button onClick={() => onView(student)}>
          View Profile
        </button>

        <button
          className="edit-btn"
          onClick={() => onEdit(student)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(student.id)}
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default StudentCard;
