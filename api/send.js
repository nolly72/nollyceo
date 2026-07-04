export default async function handler(req, res) {
    // Разрешаем только POST-запросы
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // === ВСТАВЬТЕ ВАШИ ДАННЫЕ СЮДА ===
    const TELEGRAM_TOKEN = '8994877322:AAF1XB8dlwb5lFl_tI0RsMztI5829Kglebw';
    const TELEGRAM_CHAT_ID = '1707707954'; // Например: '543210987' (обязательно в кавычках)
    // ==================================

    try {
        // На всякий случай проверяем, как пришли данные (объектом или строкой)
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        const { name, phone, messenger } = body;

        // Если поля пустые, выдаем ошибку
        if (!name || !phone) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const text = `🔔 **Новая заявка NOLLY.CEO!**\n\n👤 **Имя:** ${name}\n📞 **Телефон:** ${phone}\n💬 **Мессенджер:** ${messenger || 'Не указан'}`;

        // Отправляем запрос в Telegram через встроенный в Vercel fetch
        const telegramResponse = await fetch(`https://telegram.org{TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'Markdown' // Поменяли на Markdown для надежности верстки текста
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
