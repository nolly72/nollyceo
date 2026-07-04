const https = require('https');

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const TELEGRAM_TOKEN = '8994877322:AAF1XB8dlwb5lFl_tI0RsMztI5829Kglebw';
    const TELEGRAM_CHAT_ID = '1707707954'; 

    try {
        const { name, phone, messenger } = req.body;

        if (!name || !phone) {
            return res.status(400).json({ message: 'Имя и телефон обязательны' });
        }

        // Чистый текст без спецсимволов, чтобы Telegram не ругался на разметку
        const text = `Новая заявка NOLLY.CEO!\n\nИмя: ${name}\nТелефон: ${phone}\nМессенджер: ${messenger || 'Не указан'}`;

        const payload = JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text
        });

        const options = {
            hostname: 'api.telegram.org',
            port: 443,
            path: `/bot${TELEGRAM_TOKEN}/sendMessage`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        const tgReq = https.request(options, (tgRes) => {
            let data = '';
            tgRes.on('data', (chunk) => { data += chunk; });
            
            tgRes.on('end', () => {
                if (tgRes.statusCode === 200) {
                    return res.status(200).json({ success: true });
                } else {
                    // Если ошибку вернул сам Telegram, мы увидим её в логах Vercel
                    return res.status(500).json({ 
                        message: 'Telegram API Error', 
                        statusCode: tgRes.statusCode, 
                        details: data 
                    });
                }
            });
        });

        tgReq.on('error', (error) => {
            return res.status(500).json({ message: 'HTTPS Request Error', error: error.message });
        });

        tgReq.write(payload);
        tgReq.end();

    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
}
