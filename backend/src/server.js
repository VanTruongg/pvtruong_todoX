import express from "express";
import taskRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

// middle wares
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/api/tasks", taskRoute);

// Kết nối CSDL thành công thì Server mới chạy cổng PORT
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server bắt đầu trên cổng ${PORT}`);
  });
});
