import { Router } from "express";
import { createTopic, deleteTopic, getAllTopics } from "../services/topics.service.js";

const router = Router()

router.get('/',async (req ,res) => {
  try {
    const result = await getAllTopics()
    res.json({
      message: 'all topics retrived',
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
    const  {name} = req.body
    await createTopic(name)
    res.json({
      message: 'topic has created',
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
    await deleteTopic(req.params.id)
    res.json({
      message: 'topic has deleted',
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
