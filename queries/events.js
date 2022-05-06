const db = require("../db/dbConfig.js");

// const getEvent = async (id) => {
//   try {
//     const oneEvent = await db.one(
//       "SELECT *, end_time - start_time as duration FROM events WHERE id=$1",
//       id
//     );
//     return oneEvent;
//   } catch (error) {
//     return error;
//   }
// };

const getOrder = async (string) => {
  try {
    let order = "";
    if (string === "ascending") {
      order = await db.any(
        ` SELECT * FROM events ORDER BY number_of_attendees asc `
      );
    } else if (string === "descending") {
      order = await db.any(
        ` SELECT * FROM events ORDER BY number_of_attendees desc `
      );
    } else {
      order = await db.any(` SELECT * FROM events`);
    }
    return order;
  } catch (error) {
    return error;
  }
};

const getAllEvents = async (id) => {
  try {
    const allEvents = await db.any(
      `
    SELECT
     *, CURRENT_DATE - start_time as time_to_event
    FROM
     groups 
    JOIN
     events
    ON
     events.study_group_id = groups.id
    WHERE groups.id=$1`,
      [id]
    );
    return allEvents;
  } catch (error) {
    return error;
  }
};

const getEvent = async (id) => {
  try {
    const oneEvent = await db.one(
      "SELECT *, end_time - start_time as duration FROM events WHERE id=$1",
      id
    );
    return oneEvent;
  } catch (error) {
    return error;
  }
};

const createEvent = async (group_id, event) => {
  try {
    const newEvent = await db.one(
      "INSERT INTO events (name, virtual_meeting_link, start_time, end_time, number_of_attendees, study_group_id)  VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        event.name,
        event.virtual_meeting_link,
        event.start_time,
        event.end_time,
        event.number_of_attendees,
        group_id,
      ]
    );
    return newEvent;
  } catch (error) {
    return error;
  }
};
// Sample create Event

const updateEvent = async (id, event) => {
  try {
    const updatedEvent = await db.one(
      `UPDATE
      events 
  SET
      name=$1,
      virtual_meeting_link=$2,
      start_time=$3,
      end_time=$4,
      number_of_attendees=$5,
      study_group_id=$6 
  where
      id=$7 RETURNING *`,
      [
        event.name,
        event.virtual_meeting_link,
        event.start_time,
        event.end_time,
        event.number_of_attendees,
        event.study_group_id,
        id,
      ]
    );
    return updatedEvent;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  getOrder,
};
