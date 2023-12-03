"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page(props) {
  const router = useRouter();
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [price, setPrice] = useState();

  const editProduct = async () => {
    let result = await fetch(`api/products/${props.params.editproductid}`, {
      method: "PUT",
      body: JSON.stringify({ name, company, price }),
    });
    let res = await result.json();
    alert(res.result);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Edit Product</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter your name"
      />
      <input
        type="company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        placeholder="Enter company"
      />
      <input
        type="price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="Enter price"
      />
      <button
        onClick={() => {
          editProduct();
        }}
      >
        edit product
      </button>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        see product list
      </button>
    </div>
  );
}
