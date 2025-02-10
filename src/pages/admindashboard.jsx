'use client';

import React, { useState } from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

function AdminDashboard() {
    // Add new state for image modal
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    // Initial state for users
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            phno: "1234567890",
            events: "None",
            paymentStatus: "Pending",
            image: "path/to/image1.jpg",
            utrNumber: "",
            transactionId: ""
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            phno: "9876543210",
            events: "None",
            paymentStatus: "Pending",
            image: "path/to/image2.jpg",
            utrNumber: "",
            transactionId: ""
        }
    ]);

    // State for form and search
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All Registrations");
    const [showAddForm, setShowAddForm] = useState(false);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        phno: "",
        events: "None",
        paymentStatus: "Pending",
        utrNumber: "",
        transactionId: ""
    });

    const navigate = useNavigate();

    // CRUD Operations
    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, { ...newUser, id: users.length + 1 }]);
        setNewUser({ name: "", email: "", phno: "", events: "None", paymentStatus: "Pending", utrNumber: "", transactionId: "" });
        setShowAddForm(false);
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const verifyPayment = (id) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, paymentStatus: "Verified" } : user
        ));
    };

    // Filter users
    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (filterStatus === "All Registrations") return matchesSearch;
        return matchesSearch && user.paymentStatus === filterStatus;
    });

    // Calculate metrics
    const metrics = {
        totalRegistrations: users.length,
        pendingPayments: users.filter(u => u.paymentStatus === "Pending").length,
        verifiedPayments: users.filter(u => u.paymentStatus === "Verified").length,
        amountCollected: users.filter(u => u.paymentStatus === "Verified").length * 500
    };

    // Add export to Excel function
    const exportToExcel = () => {
        // Prepare data for export
        const exportData = filteredUsers.map(user => ({
            Name: user.name,
            Email: user.email,
            'Phone Number': user.phno,
            Events: user.events,
            'UTR Number/Transaction ID': user.utrNumber,
            'Application ID': user.transactionId,
            'Payment Status': user.paymentStatus
        }));

        // Create worksheet
        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Registrations");

        // Generate and download file
        XLSX.writeFile(wb, "registrations.xlsx");
    };

    return (
        <div className="admin-dashboard">
            {/* Header */}
            <header>
                <h1>Admin Dashboard</h1>
                <button 
                    className="logout-btn"
                    onClick={() => {
                        localStorage.removeItem('isAdminLoggedIn');
                        localStorage.removeItem('isUserLoggedIn');
                        navigate('/login');
                    }}
                >
                    Logout
                </button>
            </header>

            {/* Metrics */}
            <div className="metrics-container">
                <div className="metric-card">
                    <h3>Total Registrations</h3>
                    <p>{metrics.totalRegistrations}</p>
                </div>
                <div className="metric-card">
                    <h3>Pending Payments</h3>
                    <p>{metrics.pendingPayments}</p>
                </div>
                <div className="metric-card">
                    <h3>Verified Payments</h3>
                    <p>{metrics.verifiedPayments}</p>
                </div>
                <div className="metric-card">
                    <h3>Amount Collected</h3>
                    <p>₹{metrics.amountCollected}</p>
                </div>
            </div>

            {/* Search and Filter Controls */}
            <div className="controls">
                <div className="search-wrapper">
                    <svg 
                        className="search-icon"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="filter-wrapper">
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="filter-select"
                    >
                        <option value="All Registrations">All Registrations</option>
                        <option value="Pending">Pending</option>
                        <option value="Verified">Verified</option>
                    </select>
                </div>
                <button 
                    className="export-btn"
                    onClick={exportToExcel}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Export to Excel
                </button>
                <button 
                    className="add-btn"
                    onClick={() => setShowAddForm(true)}
                >
                    <svg 
                        className="plus-icon"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add New User
                </button>
            </div>

            {/* Add User Form */}
            {showAddForm && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add New User</h2>
                        <form onSubmit={addUser}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={newUser.name}
                                onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={newUser.email}
                                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={newUser.phno}
                                onChange={(e) => setNewUser({...newUser, phno: e.target.value})}
                                required
                            />
                            <div className="modal-buttons">
                                <button type="submit">Add User</button>
                                <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Users Table */}
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Events</th>
                            <th>UTR Number/Transaction ID</th>
                            <th>Application ID</th>
                            <th>Payment Status</th>
                            <th>Actions</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phno}</td>
                                <td>{user.events}</td>
                                <td>{user.utrNumber}</td>
                                <td>{user.transactionId}</td>
                                <td className={user.paymentStatus.toLowerCase()}>
                                    {user.paymentStatus}
                                </td>
                                <td>
                                    <button
                                        className="verify-btn"
                                        onClick={() => verifyPayment(user.id)}
                                        disabled={user.paymentStatus === "Verified"}
                                    >
                                        Verify Payment
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="view-btn"
                                        onClick={() => {
                                            setSelectedImage(user.image);
                                            setShowImageModal(true);
                                        }}
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="16" 
                                            height="16" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Image Modal */}
            {showImageModal && (
                <div className="modal">
                    <div className="modal-content">
                        <img src={selectedImage} alt="User" style={{ maxWidth: '100%' }} />
                        <button onClick={() => setShowImageModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;