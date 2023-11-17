// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OD3ZwHeeBDcm0QrR8eLMUAMGfYRlta5IYAm7XDvknkEJOlNsrA22fv37btSb82xBraq7r37DgycnTt6i1sfGxtA00Mq3PhfWw"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello "));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const PaymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecrete: PaymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
//baseURL: 'http://127.0.0.1:5001/clone-9639b/us-central1/api'
