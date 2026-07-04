// ==========================================
// 1. ДАННЫЕ И МАССИВЫ (ТАРИФЫ, КЕЙСЫ, ЧАТ-БОТ)
// ==========================================

const t1 = ["Индивидуальный UI/UX дизайн", "Разработка до 5 страниц", "Полная адаптивность под телефоны", "Базовая SEO-подготовка", "Интерактивные формы связи", "Плавная анимация блоков", "Срок сдачи от 3 дней", "Подключение вашего домена", "Финальное тестирование проекта", "Установка SSL-сертификата безопасности", "Хостинг на 1 месяц в подарок", "Техническая поддержка 7 дней", "Интеграция Яндекс.Метрики", "Удобная CMS-система", "Инструкция по управлению сайтом"];
const t2 = ["Премиум UI/UX дизайн студийного уровня", "Разработка до 20 страниц сайта", "Уникальная кастомная 3D-анимация", "Полная интеграция с вашей CRM", "Интерактивный калькулятор стоимости", "Мультиязычность проекта", "Личный кабинет пользователя", "Подключение платежных систем", "Срок сдачи от 7 дней", "Проведение A/B тестирования", "Максимальная оптимизация скорости загрузки", "Интеграция чат-бота поддержки", "Хостинг на 6 месяцев в подарок", "Приоритетная поддержка 30 дней", "Глубокий маркетинговый анализ рынка"];
const t3 = ["Бизнес-ориентированный дизайн", "Разработка до 10 страниц сайта", "Глубокая мобильная оптимизация", "Написание кастомных скриптов", "Интеграция каталога товаров", "Связка с социальными сетями", "Срок сдачи от 5 дней", "Настройка email-рассылок", "Защита сайта от DDOS-атак", "Создание корпоративной почты", "Хостинг на 3 месяца в подарок", "Техническая поддержка 14 дней", "Разработка Favicon и бренд-стиля", "Настройка целей аналитики", "Установка онлайн-консультанта"];

const pN = ["NOLLY CARS", "NOLLY LAWYERS", "Техно сервис", "NOLLY P1LS", "ONE MORE BEAUTY", "Aura Prestige", "NOLLY WEATHER", "NOLLY AGENCY", "NOLLY PULSE", "AREA-ZONE", "NOLLY BUILDING", "Эвакутаор МСК", "Sens", "Omega Crypto"];
const pT = ["Аренда авто", "Услуги адвоката", "Вызов мастера", "Ночной клуб", "Салон красоты", "Салон красоты #2", "Современный прогноз погоды", "Ваше здороьве", "Компьютерный клуб", "Строительство домов", "Эвакуация авто с формой онлайн-заявки", "Салон красоты #3", "Ресторанный альянс", "Защищенный кошелек"];
const pL = ["cyber", "prime", "vortex", "aura", "helios", "quantum", "apex", "titanium", "nova", "luxe", "monolith", "zenith", "stellar", "omega"];

const q = ["Каковы сроки?", "Что входит в 25к?", "Какие технологии?", "Как начать?", "Нужен договор?", "Делаете SEO?", "Где ваши кейсы?", "Есть скидки?", "Правки бесплатны?", "Связаться с шефом"];
const a = {
    1: "Простые проекты создаем за 3-5 дней, премиальные сайты любой сложности — за 7-14 дней.",
    2: "В тариф 25к входит всё: премиум UI/UX, до 20 страниц, 3D-анимация, CRM, платежки, личный кабинет, хостинг на 6 месяцев.",
    3: "Наш премиум-стек: чистый HTML5/CSS3/JS, React, Vue, Node.js, Webflow, WordPress или Tilda под ваши задачи.",
    4: "Нажмите на кнопку «Связаться со мной» или выберите тариф и оставьте контакты в открывшемся окне.",
    5: "Работаем официально по договору ИП/ООО. Фиксируем финальную стоимость, точные сроки и гарантии.",
    6: "Да! В каждый тариф заложена базовая SEO-оптимизация: теги, карта сайта, ускорение загрузки под Яндекс и Google.",
    7: "В блоке кейсов выше представлены 14 готовых проектов. Нажмите «Перейти к проекту» под любым из них.",
    8: "При заказе сегодня дарим хостинг и премиум-домен .RU на год! Для крупных проектов есть гибкие скидки.",
    9: "Да! Все правки в рамках технического задания выполняются бесплатно до полного утверждения вами проекта.",
    10: "Запрос отправлен руководителю! Оставьте свои контакты в форме связи, и наш CEO свяжется с вами лично."
};

// Точные ссылки для всех 14 проектов на Vercel
const pLinks = [
    "https://cars-phi-self.vercel.app/",
    "https://lawyers-nine.vercel.app/",
    "https://texnika-mu.vercel.app/",
    "https://upsite-iota.vercel.app/",
    "https://onemorebeautry.vercel.app/",
    "https://vercel.app",
    "https://crypto-peach-nine.vercel.app/",
    "https://gadgett.vercel.app/",
    "https://highproject2.vercel.app/",
    "https://pccompclub.vercel.app/",
    "https://nollybulddd.vercel.app/", // 11
    "https://evakuator-five.vercel.app/",               // 12 (Замените на вашу рабочую ссылку, если есть)
    "https://realbeauty.vercel.app/",               // 13 (Замените на вашу рабочую ссылку, если есть)
    "https://site14.com"                // 14 (Замените на вашу рабочую ссылку, если есть)
];


// ==========================================
// 2. ИНИЦИАЛИЗАЦИЯ ИНТЕРФАЕЙСА (DOM READY)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // Вывод списков услуг для тарифов
    const renderList = (id, arr) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = arr.map(i => `<li>${i}</li>`).join('');
    };
    renderList("p-list-1", t1); 
    renderList("p-list-2", t2); 
    renderList("p-list-3", t3);

    // Генерация 14 карточек портфолио
    const pG = document.getElementById("portfolioGrid");
    if (pG) {
        pG.innerHTML = pN.map((name, i) => {
            // Для первого проекта — nolly-cars.jpg, для остальных — portfolio2.jpg ... portfolio14.jpg
            const imgPath = i === 0 ? 'img/nolly-cars.jpg' : `img/portfolio${i + 1}.jpg`;
            const currentLink = pLinks[i] || "#";
            
            return `
                <div class="portfolio-item">
                    <div class="p-img" style="background-image: url('${imgPath}');"></div>
                    <div class="p-info">
                        <h3>${name}</h3>
                        <p>${pT[i]}</p>
                        <span class="p-tag" style="display: inline-block; font-size: 11px; text-transform: uppercase; color: #ffb703; margin-bottom: 12px; letter-spacing: 1px;">[${pL[i]}]</span>
                        <a href="${currentLink}" target="_blank">Смотреть сайт &rarr;</a>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Вывод кнопок быстрых вопросов в AI-ассистенте
    const qB = document.getElementById("aiQuestions");
    if (qB) {
        qB.innerHTML = q.map((text, i) => `<button class="script-btn" onclick="sendScript(${i + 1})">${text}</button>`).join('');
    }

    // События модального окна контактов
    document.querySelectorAll(".open-contact").forEach(b => b.addEventListener("click", e => {
        e.preventDefault();
        sM(true);
    }));
    document.getElementById("closeModal")?.addEventListener("click", () => sM(false));
    document.getElementById("modalOverlay")?.addEventListener("click", e => {
        if (e.target.id === "modalOverlay") sM(false);
    });

    // События AI-ассистента
    document.getElementById("aiToggleBtn")?.addEventListener("click", tA);
    document.getElementById("closeAi")?.addEventListener("click", tA);
});


// ==========================================
// 3. ГЛОБАЛЬНЫЕ ФУНКЦИИ УПРАВЛЕНИЯ
// ==========================================

// Открытие и закрытие модального окна
function sM(o) { 
    const modal = document.getElementById("modalOverlay");
    if(modal) modal.style.display = o ? "flex" : "none"; 
}

// Показ и скрытие чат-ассистента
function tA() { 
    const aEl = document.getElementById("assistant"); 
    if(aEl) aEl.style.display = aEl.style.display === "flex" ? "none" : "flex"; 
}

// Отправка быстрого вопроса в ассистент
function sendScript(id) { 
    const text = q[id - 1]; 
    appendMessage(text, 'user'); 
    setTimeout(() => { 
        appendMessage(a[id] || "Менеджер ответит вам в течение пары минут.", 'bot'); 
    }, 400); 
}

// Обработка отправки формы в Telegram
function submitForm(e) { 
    e.preventDefault(); 

    // === ВСТАВЬТЕ СВОИ ДАННЫЕ СЮДА ===
    const TELEGRAM_TOKEN = '8994877322:AAF1XB8dlwb5lFl_tI0RsMztI5829Kglebw';
    const TELEGRAM_CHAT_ID = '1707707954';
    // ==================================

    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    const originalButtonText = submitButton.innerText;
    submitButton.innerText = 'Отправка...';
    submitButton.disabled = true;

    // Собираем данные из полей
    const name = form.elements['name'].value;
    const phone = form.elements['phone'].value;
    const messenger = form.elements['messenger'].value;

    // Формируем красивый текст сообщения для Telegram
    const text = `🔔 Новая заявка NOLLY.CEO!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Мессенджер: ${messenger}`;

    // Отправляем запрос напрямую в API Telegram
    fetch(`https://telegram.org{TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: 'HTML'
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Заявка успешно отправлена на высшем уровне! Архитектор NOLLY.CEO свяжется с вами."); 
            sM(false); 
            form.reset(); 
        } else {
            alert('Ошибка отправки. Попробуйте еще раз.');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Ошибка сети при отправке в Telegram.');
    })
    .then(() => {
        submitButton.innerText = originalButtonText;
        submitButton.disabled = false;
    });
}
