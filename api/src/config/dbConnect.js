import mongoose from "mongoose"

mongoose.connect("mongodb+srv://giovanafurlan:04122001@node.agoldsf.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;