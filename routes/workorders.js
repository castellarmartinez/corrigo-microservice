import express from "express";
import {
  getToken,
  getWorkOrders,
  getNoteHistory,
  getAdditionalFieldHistory,
  getIsmSettings
} from "../utils/fetchingData.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const { ids } = req.query;

  const access_token = await getToken;
  const workOrders = await getWorkOrders(access_token, ids);

  console.log(workOrders);
  res.status(200).json(workOrders);
});

router.get("/noteHistory", async (req, res, next) => {
  const { workOrderId } = req.query;

  const access_token = await getToken;
  const workOrders = await getNoteHistory(access_token, workOrderId);

  console.log(workOrders);
  res.status(200).json(workOrders);
});

router.get("/AdditionalFieldHistory", async (req, res, next) => {
  const { additionalFieldId, workOrderId } = req.query;
  const fields = { additionalFieldId, workOrderId };

  const access_token = await getToken;
  const workOrders = await getAdditionalFieldHistory(access_token, fields);

  console.log(workOrders);
  res.status(200).json(workOrders);
});

router.get("/IsmSettings", async (req, res, next) => {
   const { workOrderId } = req.query;
 
   const access_token = await getToken;
   const workOrders = await getIsmSettings(access_token, workOrderId);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });

export default router;
