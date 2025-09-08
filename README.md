
# ⚽ GoalZone: Football Field Booking Platform

**GoalZone** is a modern, scalable, and user-friendly React web application for discovering, browsing, and booking football fields. Designed for both players and administrators, it provides a seamless experience for managing field bookings, viewing upcoming matches, and handling field management tasks.

---

## 🚀 Features

### 🔑 Authentication & Role Management

* Simple login and registration (local storage based)
* Role-based access for users and admins

### 🎨 Modular UI Components

* Responsive Navbar, Footer, Cards, and more
* Dedicated pages for Home, Browse Fields, Bookings, About, and Admin Management

### ⚽ Field Discovery & Booking

* Browse and search football fields with images and details
* Book fields and view your bookings
* Admins can manage fields and bookings

### 📅 Upcoming Matches & Events

* View upcoming matches and field availability

### 📱 Fully Responsive Design

* Optimized for mobile, tablet, and desktop

---

## 📋 User Requirements

### Functional Requirements (User perspective)
*	Users can register and log in securely.
*	Users can book a field by selecting date, time, and duration.
*	Users can view booking history and upcoming reservations.
*	Users can cancel or change the duration of bookings within allowed policy.
*	Field admin can add/remove their football field listings.
*	Field admin can set prices
*	Admin can manage users and bookings.
*	Admin can accept or deny the upcoming of the users
Non-functional
*	Easy-to-use
*	Fast response times

## System Requirements
Functional Requirements (User perspective)
*	Database to store users, fields, and bookings.
*	API endpoints 
*	Role management: Admin and user
Non-Functional:
*	Scalability: should handle high demand
*	Availability: system uptime at least 99.5%.
*	Data backup and recovery in case of failure.






---

## 🛠 Technologies

* **Frontend Framework:** React (with Vite)
* **Routing:** React Router DOM
* **Styling:** Modular CSS, Bootstrap 5
* **State Management:** React Hooks, Local Storage
* **API Integration:** Fetch API (for fields, weather, etc.)
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
the_final_front/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── Home.jsx
│   ├── assets/
│   ├── components/
│   │   ├── component/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Cartsbrowse.jsx
│   │   │   ├── Upcoming.jsx
│   │   │   └── manage.jsx
│   │   ├── css/
│   │   │   ├── About.css
│   │   │   ├── Book.css
│   │   │   ├── Bookings.css
│   │   │   ├── BrowseFields.css
│   │   │   ├── Carts.css
│   │   │   ├── Footer.css
│   │   │   ├── Home.css
│   │   │   ├── Logsign.css
│   │   │   ├── manage.Fields.css
│   │   │   ├── manageBookings.css
│   │   │   ├── Navbar.css
│   │   │   └── Upcoming.css
│   │   ├── Routes/
│   │   │   ├── About.jsx
│   │   │   ├── Book.jsx
│   │   │   ├── Bookings.jsx
│   │   │   ├── Browsefields.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Logsign.jsx
│   │   │   ├── manage.Fields.jsx
│   │   │   └── manageBookings.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
├── LICENSE
├── README.md
```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js and npm**
* **Git**

### Installation

1. **Clone the repository:**

	```bash
	git clone https://github.com/rasmi1-ux/final_front.git
	```

2. **Navigate to the project:**

	```bash
	cd the_final_front
	```

3. **Install dependencies:**

	```bash
	npm install
	```

### Running the App

* Start the application:

	```bash
	npm run dev
	```

* Access via your browser: `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🗺️ Roadmap

* [x] User authentication and registration
* [x] Role-based access control
* [x] Field browsing and booking
* [x] Admin management for fields and bookings
* [x] Responsive design
* [ ] Payment integration
* [ ] Real-time notifications
* [ ] Advanced analytics and reporting

---

## 💡 Contribution

Contributions are welcome! Steps to contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit changes: `git commit -m 'Add YourFeature'`.
4. Push branch: `git push origin feature/YourFeature`.
5. Open a Pull Request describing your changes.

---

## 📜 License

Distributed under the MIT License. Refer to the `LICENSE` file for detailed information.

---

## 🙌 Acknowledgements

Special thanks to:

* React and Vite community
* React Router team
* Bootstrap for UI components
* All contributors and users

---

⭐ **Thank you for exploring GoalZone!**
