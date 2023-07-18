const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John',
          email: 'jhon@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John 1',
          email: 'jhon1@email.com',
          password_hash: await bcryptjs.hash('15542456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John 2',
          email: 'jhon2@email.com',
          password_hash: await bcryptjs.hash('1255456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John 3',
          email: 'jhon3@email.com',
          password_hash: await bcryptjs.hash('126456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John 4',
          email: 'jhon4@email.com',
          password_hash: await bcryptjs.hash('12t4356', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John 5',
          email: 'jhon5@email.com',
          password_hash: await bcryptjs.hash('1234c56', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
