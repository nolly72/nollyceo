export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // === ВСТАВЬТЕ ВАШИ ДАННЫЕ СЮДА ===
    const TELEGRAM_TOKEN = '8994877322:AAF1XB8dlwb5lFl_tI0RsMztI5829Kglebw';
    const TELEGRAM_CHAT_ID = '1707707954'; 
    // ==================================

    try {
        const { name, phone, messenger } = req.body;

        const text = `🔔 Новая заявка NOLLY.CEO!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Мессенджер: ${messenger}`;

        const telegramResponse = await fetch(`https://telegram.org{TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });

        if (telegramResponse.ok) {
            return res.status(200).json({ success: true });
        } else {
            const errData = await telegramResponse.json();
            return res.status(500).json({ message: 'Telegram API Error', details: errData });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
}
