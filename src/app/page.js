"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await fetch("api/products");
        let res = await result.json();
        setData(res?.result || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>List Product</h1>
      <button
        onClick={() => {
          router.push("/addproduct");
        }}
        style={{
          width: "100px",
          height: "4'0px",
        }}
      >
        add product
      </button>
      {data.map((curr) => (
        <div key={curr._id}>
          <div>......Product.....</div>
          <div>{curr.name}</div>
          <div>{curr.price}</div>
          <div>{curr.company}</div>
          <button
            onClick={() => {
              router.push(`/products/${curr._id}`);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;
