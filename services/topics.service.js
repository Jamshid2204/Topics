/* 
1. getAllTopics
2. createTopic
3. deleteTopic 
*/ 
import client from '../database/database.js'

export function getAllTopics() {
  return client.query(`SELECT * FROM topics;`)
}

export function createTopic(name) {
  return client.query(`INSERT INTO topics (name) VALUES($1);`, [name])
}

export function deleteTopic(id) {
  return client.query(`DELETE FROM topics WHERE id = $1;`, [id])
}