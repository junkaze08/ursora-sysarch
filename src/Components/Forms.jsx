import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const fields = [
  { label: 'Email Address', type: 'text', placeholder: 'Input Email' },
  { label: 'Password', type: 'password', placeholder: 'Password' },
];

function BasicExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => {
        return (
          <Form.Group className="mb-3" controlId="formBasicEmail" key={field.label}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              placeholder={field.placeholder}
              onChange={(e) => {
                if (field.label === 'Email Address') {
                  setEmail(e.target.value);
                } 
                if (field.label === 'Password') {
                  setPassword(e.target.value);
                }
              }}
            />
          </Form.Group>
        );
      })}
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <center>
      <h2>My Email: {email}</h2>
      <h2>My Password: {password}</h2>
      </center>
    </Form>
  );
}

export default BasicExample;