import { Mongoose } from "mongoose";
import { Application } from "express";

export default function UserModel(app: Application) {
  const modelName = "user";
  const mongooseClient: Mongoose = app.get("mongooseClient");

  const schema = new mongooseClient.Schema(
    {
      email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "email was not provided"],
      },
      password: { type: String, required: [true, "password was not provided"] },
    },
    {
      collection: modelName,
      timestamps: true,
    },
  );

  schema.path("email").validate(async (email: string) => {
    const emailCount = await mongooseClient.model(modelName).countDocuments({
      email,
    });
    return !emailCount;
  }, "Email already exists");

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  app.set("User", mongooseClient.model(modelName, schema));

  return mongooseClient.model(modelName, schema);
}
