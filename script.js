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
const t1 = ["Индивидуальный UI/UX дизайн", "Разработка до 5 страниц", "Полная адаптивность под телефоны", "Базовая SEO-подготовка", "Интерактивные формы связи", "Плавная анимация блоков", "Срок сдачи от 3 дней", "Подключение вашего домена", "Финальное тестирование проекта", "Установка SSL-сертификата безопасности", "Хостинг на 1 месяц в подарок", "Техническая поддержка 7 дней", "Интеграция Яндекс.Метрики", "Удобная CMS-система", "Инструкция по управлению сайтом"];
const t2 = ["Премиум UI/UX дизайн студийного уровня", "Разработка до 20 страниц сайта", "Уникальная кастомная 3D-анимация", "Полная интеграция с вашей CRM", "Интерактивный калькулятор стоимости", "Мультиязычность проекта", "Личный кабинет пользователя", "Подключение платежных систем", "Срок сдачи от 7 дней", "Проведение A/B тестирования", "Максимальная оптимизация скорости загрузки", "Интеграция чат-бота поддержки", "Хостинг на 6 месяцев в подарок", "Приоритетная поддержка 30 дней", "Глубокий маркетинговый анализ рынка"];
const t3 = ["Бизнес-ориентированный дизайн", "Разработка до 10 страниц сайта", "Глубокая мобильная оптимизация", "Написание кастомных скриптов", "Интеграция каталога товаров", "Связка с социальными сетями", "Срок сдачи от 5 дней", "Настройка email-рассылок", "Защита сайта от DDOS-атак", "Создание корпоративной почты", "Хостинг на 3 месяца в подарок", "Техническая поддержка 14 дней", "Разработка Favicon и бренд-стиля", "Настройка целей аналитики", "Установка онлайн-консультанта"];

const pN = ["NOLLY CARS", "NOLLY LAWYERS", "Техно сервис", "NOLLY P1LS", "ONE MORE BEAUTY", "Aura Prestige", "NOLLY WEATHER", "NOLLY AGENCY", "NOLLY PULSE", "AREA-ZONE", "NOLLY BUILDING", "Эвакутаор МСК", "Sens", "Omega Crypto"];
const pT = ["Аренда авто", "Услуги адвоката", "Вызов мастера", "Ночной клуб", "Салон красоты", "Салон красоты #2", "Современный прогноз погоды", "Ваше здороьве", "Компьютерный клуб", "Строительство домов", "Эвакуация авто с формой онлайн-заявки", "Салон красоты #3", "Ресторанный альянс", "Защищенный кошелек"];
const pL = ["cyber", "prime", "vortex", "aura", "helios", "quantum", "apex", "titanium", "nova", "luxe", "monolith", "zenith", "stellar", "omega"];

document.addEventListener("DOMContentLoaded", () => {
    const l = (id, arr) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = arr.map(i => `<li>${i}</li>`).join('');
    };
    l("p-list-1", t1); l("p-list-2", t2); l("p-list-3", t3);

    const pG = document.getElementById("portfolioGrid");
    if (pG) {
        pG.innerHTML = pN.map((n, i) => {
            // Для первого проекта (Cyber Capital) ставим вашу реальную ссылку и картинку, для остальных — по шаблону
            const link = i === 0 ? "https://vercel.app" : `https://nolly.ceo{pL[i]}`;
            const img = i === 0 ? "img/nolly-cars.jpg" : `img/project${i + 1}.jpg`;
            
            return `<div class="portfolio-item">
                <div class="p-img" style="background-image:url('${img}')"></div>
                <div class="p-info">
                    <h3>${n}</h3>
                    <p>${pT[i]}</p>
                    <a href="${link}" target="_blank">Перейти к проекту &rarr;</a>
                </div>
            </div>`;
        }).join('');
    }

    const qB = document.getElementById("aiQuestions");
    if (qB) qB.innerHTML = q.map((text, i) => `<button class="script-btn" onclick="sendScript(${i + 1})">${text}</button>`).join('');
    document.querySelectorAll(".open-contact").forEach(b => b.addEventListener("click", e => {
        e.preventDefault();
        sM(true);
    }));
    document.getElementById("closeModal")?.addEventListener("click", () => sM(false));
    document.getElementById("modalOverlay")?.addEventListener("click", e => {
        if (e.target.id === "modalOverlay") sM(false);
    });
    document.getElementById("aiToggleBtn")?.addEventListener("click", tA);
    document.getElementById("closeAi")?.addEventListener("click", tA);
});

function sM(o) { 
    const modal = document.getElementById("modalOverlay");
    if(modal) modal.style.display = o ? "flex" : "none"; 
}
function tA() { 
    const a = document.getElementById("assistant"); 
    if(a) a.style.display = a.style.display === "flex" ? "none" : "flex"; 
}
function sendScript(id) { 
    const text = q[id - 1]; 
    appendMessage(text, 'user'); 
    setTimeout(() => { 
        appendMessage(a[id] || "Менеджер ответит вам в течение пары минут.", 'bot'); 
    }, 400); 
}
function appendMessage(t, s) { 
    const b = document.getElementById('assistantBody'); 
    if (!b) return; 
    const m = document.createElement('div'); 
    m.className = `msg ${s}`; 
    m.innerText = t; 
    b.appendChild(m); 
    b.scrollTop = b.scrollHeight; 
}
function submitForm(e) { 
    e.preventDefault(); 
    alert("Заявка успешно отправлена на высшем уровне! Архитектор NOLLY.CEO свяжется с вами."); 
    sM(false); 
    e.target.reset(); 
}
