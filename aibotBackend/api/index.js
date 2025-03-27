const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {GoogleGenAI} = require('@google/genai');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) => {
    const content = req.body.content;
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
      const response = ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: content,
      }).then((response) =>{
        res.json(response);
      }).catch((error) => {
        res.json(error);
      });
});

app.listen(3000, () => {
  console.log('Backend listening on port 3000');
});