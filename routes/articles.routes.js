import { Router } from "express";
import { createArticle, deleteArticle, getAllArticles, getTopicArticles } from "../services/articles.service.js";

const router = Router()

router.get('/',async (req ,res) => {
  try {
    const result = await getAllArticles()
    res.json({
      message: 'all articles retrived',
      Topics: result.rows
    })
  } catch (error) {
    res.status(500).json({
      message: 'internal system error',
      error: error
    })
  }
})

router.get('/:id',async (req ,res) => {
  try {
    const result = await getTopicArticles(req.params.id)
    res.json({
      message: 'all topic articles retrived',
      Topics: result.rows
    })
  } catch (error) {
    res.status(500).json({
      message: 'internal system error',
      error: error
    })
  }
})

router.post('/',async (req ,res) => {
  try {
    const  {topic_id, title, content, date} = req.body
    await createArticle(topic_id, title, content, date)
    res.json({
      message: 'article has created',
      //Topics: result.rows
    })
  } catch (error) {
    res.status(500).json({
      message: 'internal system error',
      error: error
    })
  }
})

router.delete('/:id',async (req ,res) => {
  try {
    await deleteArticle(req.params.id)
    res.json({
      message: 'article has deleted',
     // Topics: result.rows
    })
  } catch (error) {
    res.status(500).json({
      message: 'internal system error',
      error: error
    })
  }
})


export default router
