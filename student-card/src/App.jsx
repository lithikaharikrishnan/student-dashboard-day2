
import { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      rollNo: "STU001",
      department: "Computer Science",
      year: "3rd Year",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      rollNo: "STU002",
      department: "Information Technology",
      year: "2nd Year",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      rollNo: "STU003",
      department: "Mechanical",
      year: "3rd Year",
      status: "Inactive",
      image: "https://i.pravatar.cc/150?img=11"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);

  // Add or Update Student
  const saveStudent = (student) => {
    if (editingStudent) {
      setStudents((prev) =>
        prev.map((s) =>
          s.id === student.id ? student : s
        )
      );
    } else {
      setStudents((prev) => [...prev, student]);
    }

    setShowForm(false);
    setEditingStudent(null);
  };

  // Edit Student
  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  // Delete Student
  const deleteStudent = (id) => {
    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );

    if (selectedStudent?.id === id) {
      setSelectedStudent(null);
    }
  };

  // Search Student
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // Student Statistics
  const active = students.filter(
    (s) => s.status === "Active"
  ).length;

  const inactive = students.filter(
    (s) => s.status === "Inactive"
  ).length;

  return (
    <div className="dashboard">

      {/* Header */}
      <header className="header">
        <div>
          <h1>Student Dashboard</h1>
          <p>Manage your student information</p>
        </div>

        <button
          onClick={() => {
            setEditingStudent(null);
            setShowForm(true);
          }}
        >
          + Add Student
        </button>
      </header>

      {/* Statistics */}
      <div className="stats">

        <div className="stat-box">
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div className="stat-box">
          <h2>{active}</h2>
          <p>Active Students</p>
        </div>

        <div className="stat-box">
          <h2>{inactive}</h2>
          <p>Inactive Students</p>
        </div>

      </div>

      {/* Student Management */}
      <section className="student-section">

        <h2>Student Management</h2>

        <input
          className="search"
          type="text"
          placeholder="Search student name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <StudentList
          students={filteredStudents}
          onDelete={deleteStudent}
          onView={setSelectedStudent}
          onEdit={handleEdit}
        />

      </section>

      {/* Add / Edit Student Form */}
      {showForm && (
        <StudentForm
          key={editingStudent?.id || "new"}
          student={editingStudent}
          onSave={saveStudent}
          onClose={() => {
            setShowForm(false);
            setEditingStudent(null);
          }}
        />
      )}

      {/* Student Profile */}
      {selectedStudent && (
        <div className="profile">
          <div>

            <button
              onClick={() => setSelectedStudent(null)}
            >
              Close ✕
            </button>

            <img
              src={selectedStudent.image}
              alt={selectedStudent.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />

            <h2>{selectedStudent.name}</h2>
            <p>Email: {selectedStudent.email}</p>
            <p>Roll No: {selectedStudent.rollNo}</p>
            <p>Department: {selectedStudent.department}</p>
            <p>Year: {selectedStudent.year}</p>
            <p>Status: {selectedStudent.status}</p>

            <button onClick={() => {
              handleEdit(selectedStudent);
              setSelectedStudent(null);
            }}>
              Edit Student
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
