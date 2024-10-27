const fs = require("fs");

const getVideoStream = async (req, res) => {
  try {
    let id = req.query.id; // ID of video to be streamed
    // Check if the header includes range
    const range = req.headers.range;
    if (!range) {
      res.status(400).send("Missing range header");
    }

    const videoPath = "videos/" + id + ".mp4"; // path of the video
    const videoSize = fs.statSync("videos/" + id + ".mp4").size; // size of the video

    // Parse Range
    const CHUNK_SIZE = 5 ** 6; // Half megabyte
    let start = Number(range.replace(/\D/g, ""));
    let end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    // Create headers
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };

    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);

    // create video read stream for this particular chunk
    const videoStream = fs.createReadStream(videoPath, { start, end });

    // Stream the video chunk to the client
    videoStream.pipe(res);
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
  getVideoStream,
};
