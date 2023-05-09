import uploadImageToB2 from '../services/b2';
import multer from 'multer';

const upload = multer();

export default (app) => {
  app.post('/upload-image', upload.single('image'), async (req, res) => {
    const imageFile = req.file;
    const bucketId = process.env.B2_APPLICATION_BUCKET_ID;

    try {
      await uploadImageToB2(imageFile, bucketId);

      res.status(200).send('Image uploaded successfully!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to upload image!');
    }
  });
};
