const data = [
  {
    name: "Men's Clothing",
    category: '68368014f8944ae825a8bd4b',
  },
  {
    name: "Women's Clothing",
    category: '68368014f8944ae825a8bd4b',
  },
  {
    name: "Kids' Clothing",
    category: '68368014f8944ae825a8bd4b',
  },
  {
    name: 'Casual Shoes',
    category: '68368014f8944ae825a8bd4c',
  },
  {
    name: 'Formal Shoes',
    category: '68368014f8944ae825a8bd4c',
  },
  {
    name: 'Sneakers',
    category: '68368014f8944ae825a8bd4c',
  },
  {
    name: 'Watches',
    category: '68368014f8944ae825a8bd4d',
  },
  {
    name: 'Bags',
    category: '68368014f8944ae825a8bd4d',
  },
  {
    name: 'Jewelry',
    category: '68368014f8944ae825a8bd4d',
  },
  {
    name: 'Smartphones',
    category: '68368014f8944ae825a8bd4e',
  },
  {
    name: 'Laptops',
    category: '68368014f8944ae825a8bd4e',
  },
  {
    name: 'Cameras',
    category: '68368014f8944ae825a8bd4e',
  },
  {
    name: 'Refrigerators',
    category: '68368014f8944ae825a8bd4f',
  },
  {
    name: 'Microwave Ovens',
    category: '68368014f8944ae825a8bd4f',
  },
  {
    name: 'Washing Machines',
    category: '68368014f8944ae825a8bd4f',
  },
  {
    name: 'Sofas',
    category: '68368014f8944ae825a8bd4g',
  },
  {
    name: 'Beds',
    category: '68368014f8944ae825a8bd4g',
  },
  {
    name: 'Dining Tables',
    category: '68368014f8944ae825a8bd4g',
  },
  {
    name: 'Cricket Equipment',
    category: '68368014f8944ae825a8bd4h',
  },
  {
    name: 'Fitness Accessories',
    category: '68368014f8944ae825a8bd4h',
  },
]

const fs = require('fs')
require('colors')
const dotenv = require('dotenv')
const SubCategory = require('../../models/subCategoryModel')
const dbConnection = require('../../config/database')

dotenv.config({ path: '../../.env' })

// connect to DB
dbConnection()

const insertData = async () => {
  try {
    await SubCategory.create(data)

    console.log('Data Inserted'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

// Delete data from DB
const destroyData = async () => {
  try {
    await SubCategory.deleteMany()

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
