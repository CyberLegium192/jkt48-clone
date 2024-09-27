const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

exports.getMemberById = functions.https.onRequest(async (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.status(400).send('ID member diperlukan.');
  }

  try {
    const memberRef = db.collection('members').doc(id);
    const doc = await memberRef.get();

    if (!doc.exists) {
      return res.status(404).send('Member tidak ditemukan.');
    }

    return res.status(200).json(doc.data());
  } catch (error) {
    return res.status(500).send('Terjadi kesalahan: ' + error.message);
  }
});
