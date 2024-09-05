import express, { Application, Request, Response, NextFunction } from "express";
import studentRoute from "./modules/student/student.routes";
import writeLogFile from "./utils/writeLogFile";

const app: Application = express();





// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "2mb" }));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Request reached on ${req.path} from ${req.ip}`);
  writeLogFile(req, res);
  next();
});

// Routes endpoint
app.route("/").get((req, res) => res.status(200).send("Hello World"));
app.use("/api/v1/student", studentRoute);

export default app;
