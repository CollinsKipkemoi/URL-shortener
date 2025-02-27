import express, {Request, Response} from 'express';

const app = express();
const PORT = 3100

app.get('/api/', (req: Request, res: Response) => {
     res.json({
        message: 'Welcome to the API!'
     });
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});