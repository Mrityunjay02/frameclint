const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('🔍 Starting MongoDB connection...');
  console.log(`📌 MongoDB URI: ${process.env.MONGO_URI ? 'Found' : 'Not found'}`);
  
  // Enable Mongoose debug mode
  mongoose.set('debug', true);
  
  // Connection events
  mongoose.connection.on('connecting', () => {
    console.log('🔄 Connecting to MongoDB...');
  });

  mongoose.connection.on('connected', () => {
    console.log('✅ Connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('ℹ️  Disconnected from MongoDB');
  });

  try {
    console.log('🔌 Attempting to connect to MongoDB...');
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // 10 seconds timeout
      socketTimeoutMS: 45000, // 45 seconds socket timeout
    });
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    
    // List all collections
    try {
      const collections = await conn.connection.db.listCollections().toArray();
      console.log('\n📚 Collections in database:');
      collections.forEach(collection => {
        console.log(`- ${collection.name}`);
      });
    } catch (err) {
      console.error('❌ Error listing collections:', err.message);
    }
    
    return conn;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    console.error('Error details:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
