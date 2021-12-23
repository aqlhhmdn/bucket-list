import React,{ useState } from "react";

const Add = () => {
  const [email, setEmail] = useState('');
  const [list, setList] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { email, list };

    fetch('http://onboardme-beta.celcom.com.my/api/bucket-lists/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }

  return (
    <div class="create">
      <h2>Add New List</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <textarea
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></textarea>
        <label>New List:</label>
        <textarea
          required
          value={list}
          onChange={(e) => setList(e.target.value)}
        ></textarea>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Add;
