import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const writeLogFile = (req: Request, res?: Response) => {
  const logDir = path.join(__dirname, "../../logs");
  const fileName = path.join(logDir, "logs.txt");
  const formattedDate = `${new Date()
    .getDate()
    .toString()
    .padStart(2, "0")} ${new Date().toLocaleString("en-US", {
    month: "short",
  })} '${new Date().getFullYear().toString().slice(-2)} ${new Date()
    .getHours()
    .toString()
    .padStart(2, "0")}:${new Date()
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${new Date().getSeconds().toString().padStart(2, "0")}`;
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  fs.writeFile(
    fileName,
    `[INFO] ${formattedDate} ${req.method} ${req.path} from ${req.ip} Status: ${res?.statusCode}\n`,
    { flag: "a+" },
    (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Log written successfully");
      }
    }
  );
};

export default writeLogFile;
