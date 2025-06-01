const data = [
  { name: 'Zara' },
  { name: 'H&M' },
  { name: 'Nike' },
  { name: 'Adidas' },
  { name: 'Puma' },
  { name: 'Gucci' },
  { name: 'Versace' },
  { name: 'Armani' },
  { name: 'Louis Vuitton' },
  { name: 'Calvin Klein' },
  { name: 'Tommy Hilfiger' },
  { name: "Levi's" },
  { name: 'Ralph Lauren' },
  { name: 'Under Armour' },
  { name: 'New Balance' },
  { name: 'Reebok' },
  { name: 'Balenciaga' },
  { name: 'Burberry' },
  { name: 'Dolce & Gabbana' },
  { name: 'Hugo Boss' },
  { name: 'Lacoste' },
  { name: 'Prada' },
  { name: 'Fendi' },
  { name: 'Diesel' },
  { name: 'Gap' },
  { name: 'Forever 21' },
  { name: 'Guess' },
  { name: "Victoria's Secret" },
  { name: 'Abercrombie & Fitch' },
  { name: 'American Eagle' },
  { name: 'Banana Republic' },
  { name: 'Coach' },
  { name: 'Michael Kors' },
  { name: 'Chanel' },
  { name: 'Cartier' },
  { name: 'Rolex' },
  { name: 'Tiffany & Co.' },
  { name: 'Hermès' },
  { name: 'Yves Saint Laurent' },
  { name: 'Bvlgari' },
  { name: 'Supreme' },
  { name: 'Off-White' },
  { name: 'Champion' },
  { name: 'Skechers' },
  { name: 'Timberland' },
  { name: 'Columbia' },
  { name: 'North Face' },
  { name: 'Patagonia' },
  { name: 'Moncler' },
  { name: 'Stone Island' },
  { name: 'Fila' },
]

const fs = require('fs')
require('colors')
const dotenv = require('dotenv')
const Brand = require('../../models/brandModel')
const dbConnection = require('../../config/database')

dotenv.config({ path: '../../.env' })

// connect to DB
dbConnection()

const insertData = async () => {
  try {
    await Brand.create(data)

    console.log('Data Inserted'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

// Delete data from DB
const destroyData = async () => {
  try {
    await Brand.deleteMany()

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
