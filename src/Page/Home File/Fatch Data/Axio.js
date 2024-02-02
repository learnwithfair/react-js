import axios from "axios";
import React, { useState, useEffect } from "react";
import Map_Function from "../My_Component/Map_Function";

export default function Axio() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "get",
      })
        .then((res) => {
          const items = res.data.map(
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
    <>
      <p>{isLoading ? "Loading" : data}</p>
      <hr></hr>

      <button onClick={deleteData.bind(this, 1)} style={{ margin: "20px" }}>
        Delete Data
      </button>
      <button onClick={updateData.bind(this, 2)} style={{ margin: "20px" }}>
        Update Data
      </button>
      <button onClick={createData.bind(this)} style={{ margin: "20px" }}>
        Add Data
      </button>
    </>
  );
}
// Info for axios=>

// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent

// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config

const deleteData = (id) => {
  axios({
    url: "https://jsonplaceholder.typicode.com/posts/" + id,
    method: "delete",
  })
    .then((res) => {
      alert("Successfully Deleted");
    })
    .catch((err) => console.log(err));
};

const updateData = (id) => {
  axios({
    url: "https://jsonplaceholder.typicode.com/posts/" + id,
    method: "put",
    data: JSON.stringify({
      id: 1,
      title: "fooma",
      body: "barma",
      userId: 1,
    }),
  })
    .then((res) => alert("Successfully Updated"))
    .catch((err) => console.log(err));
};

const createData = () => {
  axios({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => alert("Successfully Added"))
    .catch((err) => console.log(err));
};
