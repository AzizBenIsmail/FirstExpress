const express = require("express");
const router = express.Router();
const os = require("os");

router.get("/", (req, res, next) => {
  try {
    const osInformations = {
      hostname: os.hostname(),
      type: os.type(),
      platform: os.platform(),
    };
    if (!osInformations) {
      throw new Error("there s no information for your os");
    }
    res.json(osInformations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/cpus", (req, res, next) => {
  try {
    const osCpus = os.cpus();
    if (!osCpus) {
      throw new Error("no cpus was found!");
    }
    res.json(osCpus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/cpus/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(parseInt(id))) {
      throw new Error("you must provide a Number!");
    }
    const osCpus = os.cpus();
    if (!osCpus) {
      throw new Error("no cpus was found!");
    }
    if (id < 0 || id > osCpus.length - 1) {
      throw new Error("you must provide a valid id");
    }
    res.json(osCpus[id]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;