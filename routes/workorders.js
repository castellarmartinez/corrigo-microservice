import express from "express";
import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";
import "dotenv/config";

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const grant_type = process.env.grant_type;

const rest_service_url = process.env.rest_service_url;
const oauth_server_url = process.env.oauth_server_url;

const router = express.Router();
const messageId = uuidv4();

router.get("/", async (req, res, next) => {
   const access_token = await getToken;

  const workOrders = await fetch(
    rest_service_url + `/api/workOrder?messageId=${messageId}&ids=16425336`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });

  console.log(workOrders);
  res.status(200).json(workOrders);
});

const getToken = fetch(oauth_server_url, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
  body: `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`,
})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    return response.access_token;
  });

export default router;
