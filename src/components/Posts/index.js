import React, { useState } from "react";
import axios from "axios";

function Posts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = () => {
    // handleSubmit1();
    const data = { title, body };
    axios("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      alert("Success");
      console.log(res);
    });
  };

  const handleDelete = async (event) => {
    console.log(event, "DELET");
    const response = await axios(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "delete",
      }
    ).then((res) => {
      return res;
    });
    console.log("With async", response);
    if (response.status === 200) {
      //window.location.href = "https://google.com";
    }
  };

  return (
    <div>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Body</label>
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <hr />

      <button
        onClick={handleDelete}
        // onBlur={}
      >
        Delete product 1
      </button>
    </div>
  );
}

export default Posts;
