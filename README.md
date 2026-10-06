# Hospital Token Management System

A simple and responsive **Hospital Token Booking System** built using **HTML, CSS, JavaScript, and Bootstrap**.

The application allows patients to enter their name, select a doctor and consultation slot, and automatically generate a unique consultation token.

## Features

- Patient name input
- Doctor selection
- Available consultation slots
- Automatic token generation using JavaScript
- Separate token numbering for each doctor and consultation slot
- Duplicate booking prevention
- Displays the patient's token number
- Displays the current token number
- Responsive and clean hospital-style interface
- Bootstrap-based UI
- Simple and easy-to-understand code structure

## Technologies Used
- **HTML5** – Structure of the webpage
- **CSS3** – Custom hospital-style design
- **JavaScript** – Token generation and booking validation
- **Bootstrap 5** – Responsive UI components

## Project Structure

```text
hospital-token-management/
│
├── index.html
├── style.css
├── script.js
└── README.md
````

## How It Works

### 1. Enter Patient Details

The patient enters their name in the booking form.

### 2. Select a Doctor

The patient selects a doctor from the available doctors.

### 3. Select Consultation Slot

The patient selects an available consultation time.

### 4. Generate Token

After submitting the form, JavaScript automatically generates a token number.

### 5. Duplicate Booking Prevention

The system creates a unique booking key using:

```text
Patient Name + Doctor + Consultation Slot
```

If the same patient tries to book the same doctor and slot again, the system displays an error message.

## Token Example

After a successful booking, the system displays:

```text
Your Token

T-001

Patient: John
Doctor: Dr. Anil Kumar
Slot: 09:00 AM - 11:00 AM
```

It also displays the current token being served.

## How to Run the Project

1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## Future Improvements

Possible improvements include:

* [ ] Add backend integration
* [ ] Add MySQL/MongoDB database
* [ ] Add patient registration
* [ ] Add doctor login
* [ ] Add receptionist/admin dashboard
* [ ] Store bookings permanently
* [ ] Add real-time token updates
* [ ] Add token cancellation
* [ ] Add appointment date selection
* [ ] Add SMS notifications
* [ ] Add estimated waiting time
* [ ] Add doctor availability management
* [ ] Add search and booking history


## Author
Shemiyya Sherin

