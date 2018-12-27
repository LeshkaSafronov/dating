CREATE TABLE dating_user (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  status VARCHAR (50),
  gender VARCHAR (10) NOT NULL,
  longitude DECIMAL,
  latitude DECIMAL,
  email VARCHAR (50) NOT NULL,
  encrypted_password VARCHAR (255) NOT NULL,
  created_at timestamp default current_timestamp
);
