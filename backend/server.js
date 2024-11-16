/*const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const bcrypt=require('bcrypt');
const mongoose=require('mongoose');
dotenv.config();


const app = express();

app.use(express.json());// // Middleware to parse JSON
// Connect to MongoDB
/*connectDB();*/
/*app.use(cors());
/*
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('Connected to MongoDB'))
.catch((error)=>console.error('MongoDB connection error: ',error));

/*app.use(bodyParser.json());*/
// Routes
/*const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");*/
/*app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);*/
/*
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
});
/*
const User=mongoose.model('User',userSchema);

app.post('/api/signup',async(req,res)=>{
    const{name,email,password}=req.body;

    if (!name|| !email || !password) {
        return res.status(400).json({ message: 'Name and Email and password are required.' });
      }

      try{
        const ExistingUser=await User.findOne({email});
        if(ExistingUser)
        {
            return res.status(400).json({message:'User alredy exists'});
        }
        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=new User({
            name,
            email,
            password:hashedPassword,
        });

        await newUser.save();

        res.status(201).json({message: 'User created successfully'});
      }
      catch(error)
      {
        console.error('Error during signup: ',error);
        res.status(500).json({message: 'Internal Server error'});
      }
});



app.get('/api/users',async(req,res)=>{
    try{
        const users=await User.find();
        res.json(users);
    }
    catch(error)
    {
        console.error('Error fetching users ',error );
        res.status(500).json({message:'Error fetching users '});
    }
});

app.post('/api/login',(req,res)=>{
    res.json({message:'Login route hitted'});
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});*/




























/*

const express = require("express");
const cors = require("cors"); // CORS middleware
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // You may want to use JWT for secure authentication

dotenv.config();

const app = express();

// CORS middleware configuration
const corsOptions = {
  origin: 'http://localhost:3001', // Allow requests from your frontend (React app)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // You can add more headers if needed
};

app.use(cors(corsOptions)); // Use CORS middleware with the specified options

// Middleware to parse JSON requests
app.use(express.json()); 

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error: ", error));

// User schema definition
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

// Signup Route
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, Email, and Password are required." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    console.error("Error during signup: ", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required." });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Create a JWT token (if using JWT for authentication)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // expires in 1 hour
    });

    res.status(200).json({
      message: "Login successful.",
      token, // Send the token back to the user
    });
  } catch (error) {
    console.error("Error during login: ", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
});

// Fetch all users (for debugging or admin purposes)
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).json({ message: "Error fetching users." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

*/


const express = require("express");
const cors = require("cors"); // CORS middleware
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // JWT for secure authentication

dotenv.config();

const app = express();

// CORS middleware configuration
const corsOptions = {
  origin: 'http://localhost:3001', // Allow requests from your frontend (React app)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // You can add more headers if needed
};

app.use(cors(corsOptions)); // Use CORS middleware with the specified options

// Middleware to parse JSON requests
app.use(express.json()); 

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error: ", error));

// User schema definition
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

// Signup Route
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, Email, and Password are required." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    console.error("Error during signup: ", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
});






// Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required." });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // expires in 1 hour
    });

    // Send user details along with the token
    res.status(200).json({
      message: "Login successful.",
      token,
      user: {
        name: user.name,
        email: user.email,
      }, // Include user details in response
    });
  } catch (error) {
    console.error("Error during login: ", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
});

// Fetch all users (for debugging or admin purposes)
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).json({ message: "Error fetching users." });
  }
});

// Connect to the database and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
