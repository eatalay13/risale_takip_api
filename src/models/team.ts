import { Team } from "@/utils/types";
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema<Team>({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
});

export default teamSchema;