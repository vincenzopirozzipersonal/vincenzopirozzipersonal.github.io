const bcrypt = require('bcryptjs');

class User {
  constructor(db) {
    this.db = db;
    this.usersCollection = this.db.collection('users');
  }

  async createUser(email, password) {
    const userExists = await this.usersCollection.findOne({ email });
    if (userExists) {
      throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.usersCollection.insertOne({ email, password: hashedPassword });
  }
}

module.exports = User;
