import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
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

const teamModel = mongoose.model("Team", teamSchema, "Team");

export default teamModel;