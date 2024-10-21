import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/UserList.scss';

function UserList() {
  const location = useLocation();
  const navigate = useNavigate();
  const users = location.state?.users || [];

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    navigate('/user-list', { state: { users: updatedUsers } });
  };

  const handleEditUser = (user) => {
    navigate('/user-details', { state: { userToEdit: user, users } });
  };

  // Handle close button click to navigate back to UserDetails
  const handleClose = () => {
    navigate('/user-details', { state: { users } });
  };

  return (
    <div className='container'>
      <h3>User List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.employeeId}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.contact}</td>
                <td>{user.designation}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No users available.</td>
            </tr>
          )}
        </tbody>
      </table>
      
      {/* Close Button */}
      <div className='actions'>
        <button onClick={handleClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}

export default UserList;
