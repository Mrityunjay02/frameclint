const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to MongoDB
async function testConnection() {
  try {
    console.log('Attempting to connect to MongoDB...');
    
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Successfully connected to MongoDB!');
    
    // Get the database name from the connection
    const db = mongoose.connection.db;
    console.log(`Connected to database: ${db.databaseName}`);
    
    // List all collections (optional)
    const collections = await db.listCollections().toArray();
    console.log('\nCollections in the database:');
    collections.forEach(collection => {
      console.log(`- ${collection.name}`);
    });
    
    // Close the connection
    await mongoose.connection.close();
    console.log('\nConnection closed.');
    
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}

testConnection();
