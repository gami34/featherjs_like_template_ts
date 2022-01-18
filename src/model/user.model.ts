import { Mongoose } from "mongoose";
import { Application } from "express";
import { UserInterface } from "../interfaces";

export default function UserModel(app: Application) {
  const modelName = "user";
  const mongooseClient: Mongoose = app.get("mongooseClient");

  const schema = new mongooseClient.Schema<UserInterface>(
    {
      // for authentication
      email: { type: String, unique: true, lowercase: true },
      password: { type: String },
    },
    {
      collection: modelName,
      timestamps: true,
    },
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  app.set("User", mongooseClient.model(modelName, schema));

  return mongooseClient.model(modelName, schema);
}
