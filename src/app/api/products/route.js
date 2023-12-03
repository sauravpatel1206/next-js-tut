import { connectionUrl } from "@/lib/db";
import { Product } from "@/lib/modal/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

  const data = await Product.find();
  return NextResponse.json({ result: data });
}

export async function POST(req) {
  let reqData = await req.json();
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

  const data = new Product(reqData);
  await data.save();
  return NextResponse.json({ result: "suceessfully added" });
}
