
DROP DATABASE IF EXISTS study_buddies_api;
CREATE DATABASE study_buddies_api; 

\c study_buddies_api 

DROP TABLE IF EXISTS groups CASCADE;

CREATE TABLE groups (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL UNIQUE, 
    main_focus TEXT,
    date_formed DATE NOT NULL DEFAULT CURRENT_DATE,
    contact_email TEXT,
    active BOOLEAN DEFAULT TRUE
);

DROP TABLE IF EXISTS events;

-- name: string (required)
-- virtual_meeting_link: a url (i.e. like a zoom link, does not have to be a real link)
-- study_group_id: foreign key (required)
-- start_time: datetime
-- end_time: datetime
-- number_of_attendees: integer

-- review must have a valid bookmark id
-- remove reviews if bookmark is deleted
-- rating must be between 0 and 5
CREATE TABLE events (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    virtual_meeting_link TEXT,
    start_time TIMESTAMP WITH TIME ZONE,
    end_time TIMESTAMP WITH TIME ZONE,
    number_of_attendees INTEGER DEFAULT 0,
     study_group_id INTEGER REFERENCES groups(id)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username TEXT UNIQUE NOT NULL, 
    first_name TEXT,
    last_name TEXT,
    password TEXT,
    email TEXT
);
