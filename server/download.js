import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const shorURL = "https://www.youtube.com/shorts/" + videoId;

  ytdl(shorURL, { quality: "lowestaudio", filter: "audioonly" })
  .on("info", (info) => {
    const seconds = info.formats[0].approxDurationMs / 1000;

    if(seconds > 60) {
      throw new Error("Vídeo não é um short, duração acima que 60 segundos.")
    }
  })
  .on("end", () => {
    console.log("Download do vídeo finalizado.")
  })
  .on("error", (error) => {
    throw new Error("Não foi possível fazer o download do vídeo. Detalhes do erro: " + error)
  })
  .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}