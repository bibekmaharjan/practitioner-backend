import multer from 'multer';
import cloudinary from '../services/cloudinary';

const upload = multer({ dest: 'uploads/' });

export default (app) => {
  app.post('/upload-image', upload.single('image'), async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      res.json({ imageUrl: result.secure_url });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to upload image' });
    }
  });
};
