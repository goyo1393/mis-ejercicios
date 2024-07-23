import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3000;
const getDogsUrl = "https://api.thedogapi.com/v1/images/search?limit=60&has_breeds=true";
const APK = "live_wSZ4qJqqdQCA0yeMOwMV4hDMyGUBgr7Eq2dUlp3TRY6BlkY3Q1wkRqOOJpXbXp07";

app.use(cors());

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(getDogsUrl, {
            headers: {
                'x-api-key': APK
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from the API:', error);
        res.status(500).send('Error fetching data from the API');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
