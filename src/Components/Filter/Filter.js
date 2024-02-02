import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Map_Function from "../../Page/Home File/My_Component/Map_Function";

export default function Filter() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "get",
      })
        .then((res) => {
          const items = res.data
            .filter((user) => user.userId === 2)
            .map((item, index) => (
              <Map_Function
                key={index}
                titleText={item.title}
                descText={item.body}
              ></Map_Function>
            ));
          setData(items);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 1000);
  }, []);
  return (
    <>
      <p>{isLoading ? "Loading" : data}</p>
    </>
  );
}
