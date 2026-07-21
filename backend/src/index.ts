import "dotenv/config";
import cors from "cors";
import express from "express";
import apiRoutes from "./routes/api";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (_req, res) => {
  res.json({
    name: "Smart Games & Academy API",
    version: "1.0.0",
    endpoints: ["/api/health", "/api/sports", "/api/events", "/api/contact", "/api/register"],
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
