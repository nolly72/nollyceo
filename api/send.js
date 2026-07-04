export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // === ВСТАВЬТЕ ВАШИ ДАННЫЕ СЮДА ===
    const TELEGRAM_TOKEN = '8994877322:AAF1XB8dlwb5lFl_tI0RsMztI5829Kglebw';
    const TELEGRAM_CHAT_ID = '1707707954'; 
    // ==================================

    try {
        // Гарантированно собираем данные, даже если Vercel передал их как поток
        let buffers = [];
        for await (const chunk of req) {
            buffers.push(chunk);
        }
        const rawBody = Buffer.concat(buffers).toString();
        
        // Парсим полученную строку в JSON
        const body = JSON.parse(rawBody);
        const { name, phone, messenger } = body;

        if (!name || !phone) {
            return res.status(400).json({ message: 'Имя и телефон обязательны' });
        }

        // Формируем текст сообщения без использования сложной разметки (чтобы избежать синтаксических ошибок Telegram)
        const text = `🔔 Новая заявка NOLLY.CEO!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Мессенджер: ${messenger || 'Не указан'}`;

        // Отправка в Telegram
        const telegramResponse = await fetch(`https://telegram.org{TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text
            })
        });

        const resData = await telegramResponse.json();

        if (telegramResponse.ok) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(500).json({ message: 'Telegram API Error', details: resData });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
}
