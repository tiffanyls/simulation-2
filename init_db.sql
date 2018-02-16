CREATE TABLE users (
    user_id SERIAL PRIMARY KEY NOT NULL,
    username varchar(15) NOT NULL,
    password varchar(15) NOT NULL
)