CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE users (
  userId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT,
  password TEXT,
  email TEXT
);

CREATE TABLE createdListings (
  listingId SERIAL PRIMARY KEY,
  userId UUID NOT NULL REFERENCES users(userId) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price INT NOT NULL,
  active BOOLEAN NOT NULL,
  createdAt TIMESTAMP DEFAULT now()
);

INSERT INTO users (username, password) VALUES ('Admin', 'Admin');