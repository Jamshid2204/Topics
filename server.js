import express from 'express'
import cors from 'cors'

import topicsRoute from './routes/topics.routes.js'
import articlesRoute from './routes/articles.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/topics', topicsRoute)
app.use('/articles', articlesRoute)






app.listen(8080, () => {
  console.log('server is running');
})
