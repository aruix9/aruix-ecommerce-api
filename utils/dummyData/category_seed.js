const data = [
  { name: 'Clothing' },
  { name: 'Footwear' },
  { name: 'Accessories' },
  { name: 'Electronics' },
  { name: 'Home Appliances' },
  { name: 'Furniture' },
  { name: 'Toys' },
  { name: 'Books' },
  { name: 'Beauty & Personal Care' },
  { name: 'Sports Equipment' },
  { name: 'Fitness & Health' },
  { name: 'Groceries' },
  { name: 'Jewelry' },
  { name: 'Automotive' },
  { name: 'Pet Supplies' },
  { name: 'Stationery' },
  { name: 'Garden & Outdoor' },
  { name: 'Kitchenware' },
  { name: 'Baby Products' },
  { name: 'Musical Instruments' },
]

const fs = require('fs')
require('colors')
const dotenv = require('dotenv')
const Category = require('../../models/categoryModel')
const dbConnection = require('../../config/database')

dotenv.config({ path: '../../.env' })

// connect to DB
dbConnection()

const insertData = async () => {
  try {
    await Category.create(data)

    console.log('Data Inserted'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

// Delete data from DB
const destroyData = async () => {
  try {
    await Category.deleteMany()

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
