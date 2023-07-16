import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Matheus',
      sobrenome: 'Rodrigues',
      email: 'matheus.rodrigues2010@hotmail.com',
      idade: 21,
      peso: 45.0,
      altura: 1.63,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
