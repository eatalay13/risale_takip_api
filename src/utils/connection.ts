import teamSchema from "@/models/team";
import mongoose from "mongoose";
import { Team } from "./types";

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { MONGODB_URI } = process.env

// connection function
export const connect = async () => {
  mongoose.set('strictQuery', true);

  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch(err => console.log(err))

  const teamModel = mongoose.models.Team || mongoose.model<Team>("Team", teamSchema);

  return { conn, teamModel };
}