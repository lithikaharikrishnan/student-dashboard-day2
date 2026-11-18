UI/UX Design Document
1. Design Overview

The Student Card Management Dashboard uses a clean, modern, and minimal interface.

The design focuses on displaying student information clearly through reusable cards.

2. Design Layout
Dashboard Header
Display Student Dashboard title.
Display a short welcome message.
Provide an Add Student button.
Statistics Section

Display three statistic cards:

Total Students
Active Students
Inactive Students
Student Management Section
Section heading.
Student search input.
Student cards displayed in a grid layout.
Student Card Design

Each student card contains:

Student profile image.
Student name.
Email address.
Roll number.
Department.
Academic year.
Student status.
View Profile button.
Delete button.
Add Student Form

The form contains:

Student name.
Email address.
Roll number.
Department selection.
Academic year selection.
Status selection.
Add Student button.
Cancel button.
3. Color Palette
Element	Color
Primary	#2563EB
Background	#F1F5F9
Card Background	#FFFFFF
Main Text	#1E293B
Secondary Text	#64748B
Active Status	#16A34A
Inactive Status	#DC2626
4. Typography
Font Family: Arial, sans-serif
Dashboard Heading: 30px
Section Heading: 20px
Student Name: 17px
Description: 14px
5. Component Design

The application uses reusable React components.

StudentCard: Individual student information.
StudentForm: Add student details.
StudentList: Collection of student cards.
6. Responsive Design
Desktop: Three-column student card grid.
Tablet: Two-column student card grid.
Mobile: Single-column student card grid.
7. User Interaction
Click Add Student to open the form.
Submit the form to add a student.
Enter a name to search students.
Click View Profile to see student information.
Click Delete to remove a student.
8. Design Principles
Simple navigation-free dashboard.
Consistent spacing.
Reusable components.
Clear visual hierarchy.
Responsive card layout.
Easy-to-use controls.