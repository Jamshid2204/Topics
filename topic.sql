CREATE TABLE articles(
  id SERIAL PRIMARY KEY,
  topic_id INT,
  title VARCHAR(25),
  content VARCHAR(25),
  date VARCHAR(25)
);

CREATE TABLE topics(
  id SERIAL PRIMARY KEY,
  name VARCHAR(25)
);
