import musicSchema from "@/models/musicSchema";
import database from "@/utils/config";

const Upload = async (req, res) => {
  const body = req.body;
  console.log(body);
  await database.connect();
  try {
    await musicSchema.create(body);
    await database.disconnect();

    res.status(201).json("Music uploaded successfully");
  } catch (error) {
    console.log(error);
  }
};

export default Upload;
