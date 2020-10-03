const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ajai:ajai2194@cluster0.o7vzv.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
