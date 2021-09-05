import React, { useState } from 'react'
import axios from "axios";
import List from './components/List';

export default function App() {
  const [blogId, setBlogId] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updated, setUpdated] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:8080/save";
    const response = await axios.post(url, {
      id: blogId,
      title: title,
      description: description,
    });
    if (response.status === 200)
      setUpdated(!updated);
  };

  return (
    <div>
      <div>
        <h2 style={{
          marginLeft: "40px",
        }}> Form </h2>
        <form style={{
          marginLeft: "40px",
          marginTop: "20px",
        }} onSubmit={(e) => submit(e)}>
          <div className="form-group-row" style={{
            marginTop: "20px",
          }}>
            <label htmlFor="id" className="col-sm-2 col-form-label">
              Blog ID
            </label>
            <div className="col-sm-10">
              <input
                style={{
                  width: "50%"
                }}
                value={blogId}
                onChange={(e) => setBlogId(e.target.value)}
                type="number"
                className="form-control"
                placeholder="Enter Blog ID"
                required
              />
            </div>
          </div>
          <div className="form-group-row" style={{
            marginTop: "20px",
          }}>
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-10">
              <input
                style={{
                  width: "50%"
                }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter Blog title"
                required
              />
            </div>
          </div>
          <div className="form-group-row" style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}>
            <label htmlFor="description" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input
                style={{
                  width: "50%"
                }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter Blog description"
                required
              />
            </div>
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
      <hr />
      <List updated={updated} />
    </div>
  )
}
