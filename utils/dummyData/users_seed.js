const data = [
  {
    name: 'Arun Admin',
    email: 'arun.admin@gmail.com',
    password: 'Test@123',
    passwordConfirm: 'Test@123',
    role: 'admin',
  },
  {
    name: 'Arun Manager',
    email: 'arun.manager@gmail.com',
    password: 'Test@123',
    passwordConfirm: 'Test@123',
    role: 'manager',
  },
  {
    name: 'Arun User',
    email: 'arun.user@gmail.com',
    password: 'Test@123',
    passwordConfirm: 'Test@123',
    role: 'user',
  },
  {
    name: 'Nina User',
    email: 'nina.user1@gmail.com',
    password: 'User@456',
    passwordConfirm: 'User@456',
    role: 'user',
  },
  {
    name: 'Raj Manager',
    email: 'raj.manager2@gmail.com',
    password: 'Manager@789',
    passwordConfirm: 'Manager@789',
    role: 'manager',
  },
  {
    name: 'Priya User',
    email: 'priya.user2@gmail.com',
    password: 'Priya@101',
    passwordConfirm: 'Priya@101',
    role: 'user',
  },
  {
    name: 'John Manager',
    email: 'john.manager3@gmail.com',
    password: 'John@202',
    passwordConfirm: 'John@202',
    role: 'manager',
  },
  {
    name: 'Sara User',
    email: 'sara.user3@gmail.com',
    password: 'Sara@303',
    passwordConfirm: 'Sara@303',
    role: 'user',
  },
  {
    name: 'Michael Manager',
    email: 'michael.manager4@gmail.com',
    password: 'Michael@404',
    passwordConfirm: 'Michael@404',
    role: 'manager',
  },
  {
    name: 'Emma User',
    email: 'emma.user4@gmail.com',
    password: 'Emma@505',
    passwordConfirm: 'Emma@505',
    role: 'user',
  },
  {
    name: 'Ravi Manager',
    email: 'ravi.manager5@gmail.com',
    password: 'Ravi@606',
    passwordConfirm: 'Ravi@606',
    role: 'manager',
  },
  {
    name: 'Asha User',
    email: 'asha.user5@gmail.com',
    password: 'Asha@707',
    passwordConfirm: 'Asha@707',
    role: 'user',
  },
  {
    name: 'Kumar Manager',
    email: 'kumar.manager6@gmail.com',
    password: 'Kumar@808',
    passwordConfirm: 'Kumar@808',
    role: 'manager',
  },
  {
    name: 'Mina User',
    email: 'mina.user6@gmail.com',
    password: 'Mina@909',
    passwordConfirm: 'Mina@909',
    role: 'user',
  },
  {
    name: 'Vikas Manager',
    email: 'vikas.manager7@gmail.com',
    password: 'Vikas@111',
    passwordConfirm: 'Vikas@111',
    role: 'manager',
  },
  {
    name: 'Tina User',
    email: 'tina.user7@gmail.com',
    password: 'Tina@222',
    passwordConfirm: 'Tina@222',
    role: 'user',
  },
  {
    name: 'Ajay Manager',
    email: 'ajay.manager8@gmail.com',
    password: 'Ajay@333',
    passwordConfirm: 'Ajay@333',
    role: 'manager',
  },
  {
    name: 'Reema User',
    email: 'reema.user8@gmail.com',
    password: 'Reema@444',
    passwordConfirm: 'Reema@444',
    role: 'user',
  },
  {
    name: 'Anil Manager',
    email: 'anil.manager9@gmail.com',
    password: 'Anil@555',
    passwordConfirm: 'Anil@555',
    role: 'manager',
  },
  {
    name: 'Sophia User',
    email: 'sophia.user9@gmail.com',
    password: 'Sophia@666',
    passwordConfirm: 'Sophia@666',
    role: 'user',
  },
  {
    name: 'Rohit Manager',
    email: 'rohit.manager10@gmail.com',
    password: 'Rohit@777',
    passwordConfirm: 'Rohit@777',
    role: 'manager',
  },
  {
    name: 'Lila User',
    email: 'lila.user10@gmail.com',
    password: 'Lila@888',
    passwordConfirm: 'Lila@888',
    role: 'user',
  },
]

const fs = require('fs')
require('colors')
const dotenv = require('dotenv')
const User = require('../../models/userModel')
const dbConnection = require('../../config/database')

dotenv.config({ path: '../../.env' })

// connect to DB
dbConnection()

const insertData = async () => {
  try {
    await User.create(data)

    console.log('Data Inserted'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

// Delete data from DB
const destroyData = async () => {
  try {
    await User.deleteMany()

    console.log('Data Destroyed'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

// node seeder.js -d
if (process.argv[2] === '-i') {
  insertData()
} else if (process.argv[2] === '-d') {
  destroyData()
}
