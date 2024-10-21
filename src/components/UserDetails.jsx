import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/UserDetails.scss';

function UserDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [users, setUsers] = useState(location.state?.users || []); 
  const [newUser, setNewUser] = useState({ name: '', employeeId: '', email: '', gender: '', contact: '', designation: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    if (location.state?.userToEdit) {
      setNewUser(location.state.userToEdit);
      setIsEditing(true);
      setCurrentUserId(location.state.userToEdit.id);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    let updatedUsers;
    if (isEditing) {
      updatedUsers = users.map(user => user.id === currentUserId ? { ...newUser, id: currentUserId } : user);
      setIsEditing(false);
    } else {
      updatedUsers = [...users, { ...newUser, id: Date.now() }];
    }
    setUsers(updatedUsers);
    setNewUser({ name: '', employeeId: '', email: '', gender: '', contact: '', designation: '' });

    // Navigate to the UserList page and pass the updated users array
    navigate('/user-list', { state: { users: updatedUsers } });
  };

  return (
    <div className='container'>
      <h2>{isEditing ? 'Edit User' : 'Add User'}</h2>
      <form className='user-form'>
        <input name="name" value={newUser.name} onChange={handleInputChange} placeholder="Name" />
        <input name="employeeId" value={newUser.employeeId} onChange={handleInputChange} placeholder="Employee ID" />
        <input name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" />
        <input name="gender" value={newUser.gender} onChange={handleInputChange} placeholder="Gender" />
        <input name="contact" value={newUser.contact} onChange={handleInputChange} placeholder="Contact" />
        <input name="designation" value={newUser.designation} onChange={handleInputChange} placeholder="Designation" />
        <button type="button" onClick={handleAddUser}>{isEditing ? 'Update User' : 'Add User'}</button>
      </form>
    </div>
  );
}

export default UserDetails;
