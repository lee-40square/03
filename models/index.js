import mongoose from "mongoose";
import logger from "../utils/logger";

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("success"))
  .catch((err) => logger.err(err));
