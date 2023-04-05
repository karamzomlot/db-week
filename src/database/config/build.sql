BEGIN;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(username),
  UNIQUE(email)
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO users(username, email, password) VALUES ('admin', 'admin@localhost.com', 'admin');
INSERT INTO users(username, email, password) VALUES ('user', 'user@localhost.com', 'user');

INSERT INTO posts (title, content, user_id) VALUES ('Admin Post', 'Fake Post from Admin', 1);
INSERT INTO posts (title, content, user_id) VALUES ('User Post', 'Fake Post from User', 2);


COMMIT;

-- C:/Users/KARAM/Desktop/G13/database/src/database/config/build.sql 