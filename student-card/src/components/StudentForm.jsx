
import { useState } from "react";

function StudentForm({ student, onSave, onClose }) {

  const [form, setForm] = useState({
    name: student?.name || "",
    email: student?.email || "",
    rollNo: student?.rollNo || "",
    department: student?.department || "Computer Science",
    year: student?.year || "1st Year",
    status: student?.status || "Active",
    image: student?.image || ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        setForm((prev) => ({
          ...prev,
          image: reader.result
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...form,
      id: student ? student.id : Date.now(),
      image: form.image || "https://i.pravatar.cc/150"
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <h2>{student ? "Edit Student" : "Add New Student"}</h2>

        <div className="photo-upload">
          <img
            src={form.image || "https://i.pravatar.cc/150"}
            alt="Student Preview"
          />

          <label htmlFor="student-photo">
            Upload Profile Picture
          </label>

          <input
            id="student-photo"
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
        </div>

        <label>Student Name</label>
        <input
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Roll Number</label>
        <input
          name="rollNo"
          placeholder="Roll Number"
          value={form.rollNo}
          onChange={handleChange}
          required
        />

        <label>Department</label>
        <select
          name="department"
          value={form.department}
          onChange={handleChange}
        >
          <option>Computer Science</option>
          <option>Information Technology</option>
          <option>Mechanical</option>
          <option>Electronics</option>
        </select>

        <label>Year</label>
        <select
          name="year"
          value={form.year}
          onChange={handleChange}
        >
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
          <option>4th Year</option>
        </select>

        <label>Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button type="submit">
          {student ? "Save Changes" : "Add Student"}
        </button>

        <button type="button" onClick={onClose}>
          Cancel
        </button>

      </form>
    </div>
  );
}

export default StudentForm;
