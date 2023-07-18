import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (e) => {
      if (e) {
        return res.status(400).json({ errors: [e.code] });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (err) {
        return res.status(400).json({ errors: ['Aluno não existe.'] });
      }
    });
  }
}

export default new FotoController();
