import express from "express";
import { getToken, getWorkOrders } from "../utils/fetchingData.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const ids = req.query.ids;
  const access_token = await getToken;
  const workOrders = await getWorkOrders(access_token, ids);

  console.log(workOrders);
  res.status(200).json(workOrders);
});

export default router;
