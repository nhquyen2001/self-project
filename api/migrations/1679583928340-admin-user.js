const {
  DB, COLLECTION, hashPassword
} = require('./lib');

const defaultPassword = 'adminadmin';

module.exports.up = async function up(next) {
  const user = {
    firstName: 'Admin',
    lastName: 'Admin',
    email: `admin@${process.env.DOMAIN || 'example.com'}`,
    username: 'admin',
    roles: ['admin', 'user'],
    status: 'active',
    emailVerified: true,
    verifiedEmail: true,
    password: hashPassword(defaultPassword, 10)
  };

  try {
    // eslint-disable-next-line no-console
    console.log(`Seeding ${user.username}`);
    // eslint-disable-next-line no-await-in-loop
    await DB.collection(COLLECTION.USER).insertOne({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date()
    });

  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  next();
}

module.exports.down = function down(next) {
  next();
};
