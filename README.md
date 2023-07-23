# Attendance System

The Attendance System is a web-based application that provides a seamless way for students to manage their attendance and for administrators to keep track of student attendance. The system offers functionalities for user registration, profile management, and attendance recording. It is built using Node.js, Express.js, and MongoDB for the backend and uses JSON Web Tokens (JWT) for authentication.

---

## Table of Contents

- [Client's Requirements](#clients-requirements)
- [Functional Requirements](#functional-requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Client's Requirements:

The client envisioned an attendance system with the following features:

- Students can create their own profile.
- Admin can see the list of students and their attendances.
- Admin can enable and disable the attend button, and it can be disabled based on a timer.
- Each time admin enables the attend button, students can participate only once.
- Each day, students will have a timesheet of attendance.
- Students can see their own time logs and attend button when enabled.

---

## Functional Requirements:

### Admin

- Admin can create a student.
- Admin can delete, update, or check students' information.
- Admin can change the status of a student.
- Admin can check the timesheet of a student.
- Admin can enable or disable the attendance button.
- Admin can check the attendance status of a given day.

### Student

- Students can register themselves.
- Students have the following account status:
    - Pending
    - Active
    - Rejected
- Pending and Rejected users won't have any information in their profiles.
- Active users can update their profile information, including First Name, Last Name, Email, Phone No, and Profile Picture.
- Active users can change/update their password.
- Active users can view their attendance logs in different views, such as Calendar view, List view, and Table view.
- Active users can participate in the attendance system by marking their attendance.
- Users can log out.

---

## Setup:

1. Clone the repository to your local machine.

2. Install the required dependencies:

```bash
npm install
```

3. Create a `.env` file in the project's root directory and set the following environment variables:

```dotenv
PORT=8080
MONGO_URL=mongodb://localhost:27017/attendance_system_db
SECRET_KEY=mysecretkey
```

4. Start the server:

```bash
npm run dev
```

Now the server should be running on port 8080, and you can access the endpoints described in the project to use the Attendance System. Feel free to modify and expand the project as per the requirements. If you encounter any issues or need further assistance, please don't hesitate to reach out. Happy coding!

---

## Usage:

### Student Registration:

- Students can register themselves by providing their details, including name, email, and password.
- Upon registration, their account status will be set to "Pending," and they won't have access to additional features until the admin approves their account.

### Admin Dashboard:

- The admin can log in to the dashboard using their credentials.

### Student Management:

- In the admin dashboard, the admin can see a list of all registered students and their account status.
- The admin can create, delete, update, or check the details of a student.

### Attendance Management:

- The admin can view the timesheet of each student, displaying their attendance records for each day.
- The admin can enable or disable the attendance button based on the desired schedule.

### Student Dashboard:

- Once the admin approves a student's account, their status changes to "Active," and they gain access to additional features.
- Active students can update their profile information, including first name, last name, email, phone number, and profile picture.
- Students can change/update their password for security purposes.

### Attendance Logging:

- When the admin enables the attendance button, students can mark their attendance for the day.
- Each student can participate in attendance only once for each day when the attendance button is enabled.

### Attendance Logs:

- Active students can view their attendance logs in different views, such as Calendar view, List view, and Table view.
- This allows students to keep track of their attendance history.

### Logout:

- Both admin and students can log out of their accounts when they have finished using the system.

---

## Contributing:

Contributions to the Attendance System are welcome! If you have any ideas, suggestions, or bug reports, feel free to open an issue or submit a pull request. Let's work together to make this system even better!

---

## License:

The Attendance System is open-source software licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your projects. Please refer to the LICENSE file for more details.