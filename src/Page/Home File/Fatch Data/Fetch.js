import React, { useState, useEffect } from "react";
import Map_Function from "../My_Component/Map_Function";

export default function Fatch() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(async (res) => {
          if (!res.ok) {
            const message = `Error : ${res.status}`;
            throw new Error(message);
          }
          const data = await res.json();
          const items = data.map(
            (item, index) =>
              index <= 5 && (
                <Map_Function
                  key={index}
                  titleText={item.title}
                  descText={item.body}
                />
              )
          );
          setData(items);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }, 1000);
  });
  return (
    <div>
      <p>{isLoading ? "Loading" : data}</p>

      <button onClick={deleteData.bind(this, 1)} style={{ margin: "20px" }}>
        Delete Data
      </button>
      <button onClick={updateData.bind(this, 2)} style={{ margin: "20px" }}>
        Update Data
      </button>
      <button onClick={createData.bind(this)} style={{ margin: "20px" }}>
        Add Data
      </button>
    </div>
  );
}

// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

// method for making HTTP Request
const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const message = `Error : ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

const deleteData = (id) => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/" + id, {
    method: "DELETE",
  })
    .then((res) => alert("Successfully Deleted"))
    .catch((err) => console.log(err));
};

// deleteData();

const updateData = (id) => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/" + id, {
    method: "PATCH",
    body: JSON.stringify({
      title: "foomaraarrara",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => alert("Successfully Updated"))
    .catch((err) => console.log(err));
};

// updateData();

const createData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => alert("Successfully Created"))
    .catch((err) => console.log(err));
};

// sendData();

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// getData();
