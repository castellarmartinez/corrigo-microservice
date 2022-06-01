import express from "express";
import {
  getToken,
  getWorkOrders,
  getNoteHistory,
  getAdditionalFieldHistory,
  getIsmSettings,
  acceptOrder,
  rejectOrder,
  reopenOrder,
  quoteSubmit,
  checkInOrder,
  pauseOrder,
  checkOutOrder,
  workDoneDetails,
  appointmentInfo,
  note,
  additionalField,
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

router.put("/accept", async (req, res, next) => {
  const fields = req.body;

  const access_token = await getToken;
  const workOrders = await acceptOrder(access_token, fields);

  console.log(workOrders);
  res.status(200).json(workOrders);
});

router.put("/reject", async (req, res, next) => {
   const fields = req.body;
 
   const access_token = await getToken;
   const workOrders = await rejectOrder(access_token, fields);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });

 router.put("/reopen", async (req, res, next) => {
   const fields = req.body;
 
   const access_token = await getToken;
   const workOrders = await reopenOrder(access_token, fields);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });

 router.put("/quoteSubmit", async (req, res, next) => {
   const fields = req.body;
 
   const access_token = await getToken;
   const workOrders = await quoteSubmit(access_token, fields);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });

 router.put("/checkIn", async (req, res, next) => {
   const fields = req.body;
 
   const access_token = await getToken;
   const workOrders = await checkInOrder(access_token, fields);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });

 router.put("/pause", async (req, res, next) => {
   const fields = req.body;
 
   const access_token = await getToken;
   const workOrders = await pauseOrder(access_token, fields);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });

 router.put("/checkOut", async (req, res, next) => {
   const fields = req.body;
 
   const access_token = await getToken;
   const workOrders = await checkOutOrder(access_token, fields);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });

 router.put("/workDoneDetails", async (req, res, next) => {
   const fields = req.body;
 
   const access_token = await getToken;
   const workOrders = await workDoneDetails(access_token, fields);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });

 router.put("/appointmentInfo", async (req, res, next) => {
   const fields = req.body;
 
   const access_token = await getToken;
   const workOrders = await appointmentInfo(access_token, fields);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });

 router.put("/note", async (req, res, next) => {
   const fields = req.body;
 
   const access_token = await getToken;
   const workOrders = await note(access_token, fields);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });

 router.put("/additionalField", async (req, res, next) => {
   const fields = req.body;
 
   const access_token = await getToken;
   const workOrders = await additionalField(access_token, fields);
 
   console.log(workOrders);
   res.status(200).json(workOrders);
 });
 

export default router;
