const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/gemini-chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: message }
      ],
      max_tokens: 150,
    });

    const reply = completion.data.choices[0].message.content || 'Maaf, saya tidak dapat menjawab saat ini.';
    res.json({ reply });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/*
Instructions:
1. Install dependencies:
   npm install express body-parser openai dotenv

2. Create a .env file in the root directory with:
   OPENAI_API_KEY=your_actual_openai_api_key

3. Run the server:
   node server.js

4. Make sure your frontend fetches from the correct backend URL (e.g., http://localhost:3001/api/gemini-chat)
*/
