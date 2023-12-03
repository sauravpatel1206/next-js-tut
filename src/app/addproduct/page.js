"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const router = useRouter();
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [price, setPrice] = useState();

  const addProduct = async () => {
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, company, price }),
    });
    let res = await result.json();
    alert(res.result);
  };
  const editProduct = async () => {
    let result = await fetch("http://localhost:3000/api/products", {
      method: "PUT",
      body: JSON.stringify({ name, company, price }),
    });
    let res = await result.json();
    alert(res.result);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Add Product</h1>

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
          addProduct();
        }}
      >
        Add product
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
