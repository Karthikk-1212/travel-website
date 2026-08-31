import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your environment variables");
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

let cached = (globalThis as typeof globalThis & {
  mongoose?: MongooseCache;
}).mongoose;

if (!cached) {
  cached = {
    conn: null,
    promise: null,
  };

  (globalThis as typeof globalThis & {
    mongoose?: MongooseCache;
  }).mongoose = cached;
}

export async function connectDB() {
  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    cached!.promise = mongoose.connect(MONGODB_URI!);
  }

  cached!.conn = await cached!.promise;

  return cached!.conn;
}