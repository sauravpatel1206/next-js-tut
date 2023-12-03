import { Product } from "@/lib/modal/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionUrl } from "@/lib/db";

export async function PUT(req, content) {
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
  let _id = content.params.productid;
  let data = await req.json();
  await Product.findOneAndUpdate(
    {
      _id: _id,
    },
    data
  );

  return NextResponse.json({ result: "successfully update", success: true });
}

export async function GET(req, content) {
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
  const data = await Product.findById({ _id: content.params.productid });
  return NextResponse.json({ result: data });
}
