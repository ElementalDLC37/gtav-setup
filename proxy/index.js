const { google } = require('googleapis');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const zlib = require('zlib');

const app = express();
app.use(cors());

async function uploadFile(){
    const GOOGLE_API_FOLDER_ID = '1RNHEzT_HveUiLdyBp5ZwuizWY0wutlAI'

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: './drive.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        })

        const driveService = google.drive({
            version: 'v3',
            auth
        })

        const fileMetaData = {
            'name': 'snowplace.jpg',
            'parents': [GOOGLE_API_FOLDER_ID],
        }

        const media = {
            mimeType: 'image/jpg',
            body: fs.createReadStream('./snow.jpg')
        }

        const response = await driveService.files.get({
            fileId: GOOGLE_API_FOLDER_ID,
            alt: 'media',
            media: media,
            field: 'id'
        },
        { 
            responseType: 'arraybuffer'
        })

        const imageBuffer = Buffer.from(response.data, 'binary');

        console.log(imageBuffer.length)

        return imageBuffer

    } catch(err){
        console.log('Upload file error', err)
    }
}

app.get('/', async(req, res) => {
    const buffer = await uploadFile();

    res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': buffer.length
    });
    res.end(buffer);
  });
  
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });

