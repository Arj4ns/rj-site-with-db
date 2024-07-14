import express from "express"

const app = express();
app.use(express.json());


const start = async () => {
    try {
        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();