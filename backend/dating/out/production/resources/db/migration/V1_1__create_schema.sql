CREATE TABLE credit_user (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  middle_name VARCHAR (50) NOT NULL,
  email VARCHAR (50) NOT NULL,
  encrypted_password VARCHAR (255) NOT NULL
);
