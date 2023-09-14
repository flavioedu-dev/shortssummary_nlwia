import express from "express"
import cors from "cors"

import { download } from "./download.js";

const app = express()

app.use(cors())

const PORT = 3333

app.get("/summary", (req, res) => {

  res.status(200).json({ res: "Summary!" })
})

app.get("/summary/:id", (req, res) => {
  const { id } = req.params

  download(id)

  res.status(200).json({ res: "Download do vídeo realizado com sucesso!" })
})

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}...`)
})