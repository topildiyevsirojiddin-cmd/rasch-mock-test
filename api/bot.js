// Telegram Bot Webhook Handler (api/bot.js)
// Ushbu fayl Vercel Serverless Function sifatida ishlaydi.
// Telegram'dan xabar kelganda uni qayta ishlaydi va WebApp tugmasini yuboradi.

const BOT_TOKEN = '8979735647:AAHIBLpEVUJUie3OKYx5ziYH8Mhhi7ncEy8';

module.exports = async (req, res) => {
  // Webhookni avtomat sozlash (GET request orqali: /api/bot?setup=1)
  if (req.method === 'GET') {
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    if (req.query.setup === '1' && host) {
      const webhookUrl = `https://${host}/api/bot`;
      try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${encodeURIComponent(webhookUrl)}`);
        const result = await response.json();
        return res.status(200).send(`<h2>Webhook muvaffaqiyatli sozlandi!</h2><p>Natija: ${JSON.stringify(result)}</p><p>Webhook URL: <b>${webhookUrl}</b></p>`);
      } catch (err) {
        return res.status(500).send(`Webhook sozlashda xatolik: ${err.message}`);
      }
    }
    return res.status(200).send('Rasch Math Telegram Bot API ishlamoqda. Webhookni sozlash uchun brauzerda quyidagiga kiring: https://[SIZNING_DOMEN]/api/bot?setup=1');
  }

  // Telegram'dan kelgan POST so'rovlarni (xabarlarni) qayta ishlash
  if (req.method === 'POST') {
    try {
      const { message } = req.body;

      if (message && message.chat) {
        const chatId = message.chat.id;
        const text = message.text || '';
        const firstName = message.from.first_name || 'Nomzod';

        // Dinamik ravishda joriy Vercel domenini aniqlaymiz
        const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost:8080';
        const webAppUrl = `https://${host}`;

        if (text.startsWith('/start') || text) {
          const welcomeMessage = `Assalomu alaykum, *${firstName}*! 📐\n\n` +
            `🎓 **Rasch Math — Matematika Milliy Sertifikat Mok Test Platformasi**ga xush kelibsiz!\n\n` +
            `Ushbu bot orqali siz matematika fanidan Milliy sertifikat imtihonlariga **Rasch Moslashuvchan (CAT) modeli** va **DTM standartlari** bo'yicha tayyorgarlik ko'rasiz.\n\n` +
            `✨ **Platforma imkoniyatlari:**\n` +
            `• 📈 *Rasch CAT Test:* Savollar bilim darajangizga moslashadi.\n` +
            `• 📚 *30 ta Variant:* 900 ta saralangan va original DTM testlari.\n` +
            `• 📊 *Real vaqtli tahlil:* Logitlar hamda Wright Map chartlari.\n` +
            `• 💳 *Mos tariflar:* Starter, Standard va Premium paketlar.\n\n` +
            `👇 *Testni boshlash uchun quyidagi tugmani bosing:*`;

          await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text: welcomeMessage,
              parse_mode: 'Markdown',
              reply_markup: {
                inline_keyboard: [[
                  {
                    text: "🚀 Mok Testni Boshlash 📝",
                    web_app: { url: webAppUrl }
                  }
                ]]
              }
            })
          });
        }
      }
    } catch (error) {
      console.error('Telegram xabarni qayta ishlashda xatolik:', error);
    }

    return res.status(200).json({ ok: true });
  }

  return res.status(405).send('Method Not Allowed');
};
