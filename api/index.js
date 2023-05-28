
const connectDB = require('./config/db');
const server = require('./config/app');


connectDB();


const PORT=process.env.PORT || 3001
server.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})