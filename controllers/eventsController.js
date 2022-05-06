const express = require("express");

const events = express.Router();

const {
  getEvent,
  createEvent,
  updateEven,
  getOrder,
} = require("../queries/events.js");
const { humanReadableDateTime } = require("../date-helper.js");

events.get("/:popularity", async (req, res) => {
  try {
    const ordered = await getOrder(req.params.popularity);
    res.status(200).json(ordered);
  } catch (error) {
    res.status(404).json({ Error: error });
  }
});

// Create
events.post("/", async (req, res) => {
  try {
    const newEvent = await createEvent(req.body);
    res.status(200).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// {
//   "name": "Getting Groovy Beginner Guitar",
//   "virtual_meeting_link": "https://zoom.com/555",
//   "start_time": "2022-04-04T15:35:00.000Z",
//   "end_time": "2022-04-04T15:59:00.000Z",
//   "study_group_id": 4
// }

// Show
events.get("/:id", async (req, res) => {
  try {
    const oneEvent = await getEvent(req.params.id);
    oneEvent.start_time = humanReadableDateTime(oneEvent.start_time);
    oneEvent.end_time = humanReadableDateTime(oneEvent.end_time);
    res.status(200).json(oneEvent);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Edit
events.put("/:id", async (req, res) => {
  try {
    const updatedEvent = await updateEvent(req.params.id, req.body);
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = events;
