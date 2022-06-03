import { useState } from 'react';

import { useRouter } from 'next/router';

import { validations } from '../utils/validations';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({ username: '', email: '' });

  const router = useRouter();
  console.log(users);

  const handleErrors = ({ target }) => {
    let { name, value } = target;
    let errorsClone = { ...errors };
    validations(errorsClone, name, value);
    setErrors(errorsClone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username) {
      try {
        alert(
          `Thank You ${username}.Your form has been successfully submitted`
        );
        setUsers((users) => [{ username: username, email: email }, ...users]);
      } catch (error) {
        setErrors({ ...errors, email: 'Email is incorrect!' });
      }
    }
  };

  return (
    <div className="form">
      <form
        className="w-1/3 mx-auto border bg-gray-100 border-gray-400 p-6 rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <legend className="form_title">User Form</legend>
        </div>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          name="username"
          onChange={(e) => {
            setUserName(e.target.value);
            handleErrors(e);
          }}
        />
        <span className="error">{errors.username}</span>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
            handleErrors(e);
          }}
        />
        <span className="error">{errors.email}</span>

        <button type="submit" className="btn_primary">
          Submit
        </button>
      </form>
      <ul>
        {users.map((user) => (
          <li>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
