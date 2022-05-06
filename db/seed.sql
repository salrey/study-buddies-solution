\c study_buddies_api 

INSERT INTO groups (name, main_focus, contact_email, active) VALUES 
('JavaScript', 'JavaScript', 'js@js.io', true),
('Acting', 'Improv', 'improv@aol.com', true),
('Cutting Edge jQuery', 'jQuery', 'jQuery@geocities.com', false);

INSERT INTO events(name, virtual_meeting_link, start_time, end_time, study_group_id, number_of_attendees) VALUES
('Absolute Beginners', 'https://zoom.com/1234', '06/25/2022 23:11', '06/25/2022 23:55',1 ,10),
('Working with Dates and Time in JS', 'https://zoom.com/5678', '09/01/2021 13:11', '09/01/2021 14:22',1 , 20),
('Beginners', 'https://zoom.com/5432', '12/02/2021 09:00', '12/02/2021 12:00',2 ,30 );

INSERT INTO users (username, first_name, last_name, password, email) VALUES
('HarryP', 'Harry', 'Potter', 'Quiddich', 'hp@hogwarts.edu'),
('Hermione', 'Hermione', 'Granger', 'Books123$', 'hh@hogwarts.edu'),
('Ron', 'Ronald', 'Weasely', 'Password1234', 'rr4@hogwarts.edu');