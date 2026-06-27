// 1. Ваши массивы с актуальными данными
const pN = ["NOLLY CARS", "NOLLY LAWYERS", "Техно сервис", "NOLLY P1LS", "ONE MORE BEAUTY", "Aura Prestige", "NOLLY WEATHER", "NOLLY AGENCY", "NOLLY PULSE", "AREA-ZONE", "NOLLY BUILDING", "Эвакутаор МСК", "Sens", "Omega Crypto"];
const pT = ["Аренда авто", "Услуги адвоката", "Вызов мастера", "Ночной клуб", "Салон красоты", "Салон красоты #2", "Современный прогноз погоды", "Ваше здороьве", "Компьютерный клуб", "Строительство домов", "Эвакуация авто с формой онлайн-заявки", "Салон красоты #3", "Ресторанный альянс", "Защищенный кошелек"];
const pL = ["cyber", "prime", "vortex", "aura", "helios", "quantum", "apex", "titanium", "nova", "luxe", "monolith", "zenith", "stellar", "omega"];

// 2. Ваши оригинальные ссылки на сайты на Vercel
const pLinks = [
    "https://cars-phi-self.vercel.app/",
    "https://lawyers-nine.vercel.app/",
    "https://texnika-mu.vercel.app/",
    "https://upsite-iota.vercel.app/",
    "https://onemorebeautry.vercel.app/",
    "https://studio-brown-theta.vercel.app/",
    "https://crypto-peach-nine.vercel.app/",
    "https://gadgett.vercel.app/",
    "https://highproject2.vercel.app/",
    "https://testpc2.vercel.app/",
    "https://nollybulddd.vercel.app/", // 11
    "https://site12.com",               // 12 (Замените на вашу ссылку Vercel, если есть)
    "https://site13.com",               // 13 (Замените на вашу ссылку Vercel, если есть)
    "https://site14.com"                // 14 (Замените на вашу ссылку Vercel, если есть)
];

// 3. Автоматический рендеринг карточек
const portfolioContainer = document.getElementById('portfolio-container');

if (portfolioContainer) {
    portfolioContainer.innerHTML = ""; // Очищаем контейнер от старой разметки

    pN.forEach((name, index) => {
        // Для первого сайта оставляем картинку nolly-cars.jpg, для остальных — по порядку
        const imgPath = index === 0 ? 'img/nolly-cars.jpg' : `img/portfolio${index + 1}.jpg`;
        
        const card = document.createElement('div');
        card.className = 'portfolio-item';
        
        card.innerHTML = `
            <div class="p-img" style="background-image: url('${imgPath}');"></div>
            <div class="p-info">
                <h3>${name}</h3>
                <p>${pT[index]}</p>
                <span class="p-tag" style="display: inline-block; font-size: 11px; text-transform: uppercase; color: #ffb703; margin-bottom: 12px; letter-spacing: 1px;">[${pL[index]}]</span>
                <a href="${pLinks[index]}" target="_blank">Смотреть сайт →</a>
            </div>
        `;
        
        portfolioContainer.appendChild(card);
    });
}
