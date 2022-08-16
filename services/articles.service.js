/*
1. getAllArticles
2. getTopicArticles(topicId)
3. createArticle
4. deleteArticle(id)
*/
import client from '../database/database.js'

export function getAllArticles() {
  return client.query(`SELECT * FROM articles;`)
}

export function getTopicArticles(topic_id) {
  return client.query(`SELECT * FROM articles WHERE id = $1;`, [topic_id])
}

export function createArticle(topic_id, title, content, date) {
  return client.query(`INSERT INTO articles (topic_id, title, content, date) VALUES($1, $2, $3, $4);`, [topic_id, title, content, date])
}

export function deleteArticle(id) {
  return client.query(`DELETE FROM articles WHERE id = $1;`, [id])
}
