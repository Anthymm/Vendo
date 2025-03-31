-- create
CREATE TABLE Users (
  userId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT,
  password TEXT,
  email TEXT,
  createdAds
);

CREATE TABLE createdAds (
  adId SERIAL PRIMARY KEY DEFAULT,
  userId UUID NOT NULL REFERENCES Users(userId) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price INT NOT NULL,
  active BOOLEAN NOT NULL
  createdAt TIMESTAMP DEFAULT now()
);

-- insert
INSERT INTO Users (username, password) VALUES ('Antons', 'Lösenord');

SELECT * FROM Users