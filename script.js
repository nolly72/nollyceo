const q=[
"Каковы сроки?","Что входит в 25к?","Какие технологии?","Как начать?",
"Нужен договор?","Делаете SEO?","Где ваши кейсы?","Есть скидки?",
"Правки бесплатны?","Связаться с шефом"
];
const a={
1:"Простые проекты создаем за 3-5 дней, премиальные сайты любой сложности — за 7-14 дней.",
2:"В тариф 25к входит всё: премиум UI/UX, до 20 страниц, 3D-анимация, CRM, платежки, личный кабинет, хостинг на 6 месяцев.",
3:"Наш премиум-стек: чистый HTML5/CSS3/JS, React, Vue, Node.js, Webflow, WordPress или Tilda под ваши задачи.",
4:"Нажмите на кнопку «Связаться со мной» или выберите тариф и оставьте контакты в открывшемся окне.",
5:"Работаем официально по договору ИП/ООО. Фиксируем финальную стоимость, точные сроки и гарантии.",
6:"Да! В каждый тариф заложена базовая SEO-оптимизация: теги, карта сайта, ускорение загрузки под Яндекс и Google.",
7:"В блоке кейсов выше представлены 14 готовых проектов. Нажмите «Перейти к проекту» под любым из них.",
8:"При заказе сегодня дарим хостинг и премиум-домен .RU на год! Для крупных проектов есть гибкие скидки.",
9:"Да! Все правки в рамках технического задания выполняются бесплатно до полного утверждения вами проекта.",
10:"Запрос отправлен руководителю! Оставьте свои контакты в форме связи, и наш CEO свяжется с вами лично."
};
const t1=["Индивидуальный UI/UX дизайн","Разработка до 5 страниц","Полная адаптивность под телефоны","Базовая SEO-подготовка","Интерактивные формы связи","Плавная анимация блоков","Срок сдачи от 3 дней","Подключение вашего домена","Финальное тестирование проекта","Установка SSL-сертификата безопасности","Хостинг на 1 месяц в подарок","Техническая поддержка 7 дней","Интеграция Яндекс.Метрики","Удобная CMS-система","Инструкция по управлению сайтом"];
const t2=["Премиум UI/UX дизайн студийного уровня","Разработка до 20 страниц сайта","Уникальная кастомная 3D-анимация","Полная интеграция с вашей CRM","Интерактивный калькулятор стоимости","Мультиязычность проекта","Личный кабинет пользователя","Подключение платежных систем","Срок сдачи от 7 дней","Проведение A/B тестирования","Максимальная оптимизация скорости загрузки","Интеграция чат-бота поддержки","Хостинг на 6 месяцев в подарок","Приоритетная поддержка 30 дней","Глубокий маркетинговый анализ рынка"];
const t3=["Бизнес-ориентированный дизайн","Разработка до 10 страниц сайта","Глубокая мобильная оптимизация","Написание кастомных скриптов","Интеграция каталога товаров","Связка с социальными сетями","Срок сдачи от 5 дней","Настройка email-рассылок","Защита сайта от DDOS-атак","Создание корпоративной почты","Хостинг на 3 месяца в подарок","Техническая поддержка 14 дней","Разработка Favicon и бренд-стиля","Настройка целей аналитики","Установка онлайн-консультанта"];

document.addEventListener("DOMContentLoaded",()=>{
const l=(id,arr)=>{const el=document.getElementById(id);if(el)el.innerHTML=arr.map(i=>`<li>${i}</li>`).join('');};
l("p-list-1",t1);l("p-list-2",t2);l("p-list-3",t3);
const qB=document.getElementById("aiQuestions");
if(qB)qB.innerHTML=q.map((text,i)=>`<button class="script-btn" onclick="sendScript(${i+1})">${text}</button>`).join('');
document.querySelectorAll(".open-contact").forEach(b=>b.addEventListener("click",e=>{e.preventDefault();sM(true);}));
document.getElementById("closeModal")?.addEventListener("click",()=>sM(false));
document.getElementById("modalOverlay")?.addEventListener("click",e=>{if(e.target.id==="modalOverlay")sM(false);});
document.getElementById("aiToggleBtn")?.addEventListener("click",tA);
document.getElementById("closeAi")?.addEventListener("click",tA);
});

function sM(o){document.getElementById("modalOverlay").style.display=o?"flex":"none";}
function tA(){const a=document.getElementById("assistant");a.style.display=a.style.display==="flex"?"none":"flex";}
function sendScript(id){
const text=q[id-1];appendMessage(text,'user');
setTimeout(()=>{appendMessage(a[id]||"Менеджер ответит вам в течение пары минут.",'bot');},400);
}
function appendMessage(t,s){
const b=document.getElementById('assistantBody');if(!b)return;
const m=document.createElement('div');m.className=`msg ${s}`;m.innerText=t;
b.appendChild(m);b.scrollTop=b.scrollHeight;
}
function submitForm(e){
e.preventDefault();alert("Заявка успешно отправлена на высшем уровне! Архитектор NOLLY.CEO свяжется с вами.");
sM(false);e.target.reset();
}
.gallery-strip{min-height:auto;padding:40px 5%}
.strip-container{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.strip-item{height:250px;border-radius:24px;background-size:cover;background-position:center;border:1px solid rgba(255,255,255,0.03);transition:0.6s cubic-bezier(0.16,1,0.3,1)}
.strip-item:hover{transform:scale(1.03);border-color:rgba(255,215,0,0.2)}
.item-1{background-image:url('https://unsplash.com')}
.item-2{background-image:url('https://unsplash.com')}
.item-3{background-image:url('https://unsplash.com')}
.item-4{background-image:url('https://unsplash.com')}
.about{flex-direction:row;align-items:center;gap:100px;background:linear-gradient(180deg,#050508,#0b0b10)}
.about-img-wrapper{flex:1;position:relative;height:550px}
.about-main-img{width:85%;height:85%;background:url('https://unsplash.com') center/cover no-repeat;border-radius:32px;border:1px solid rgba(255,255,255,0.05);box-shadow:0 30px 60px rgba(0,0,0,0.6)}
.about-sub-img{position:absolute;width:55%;height:55%;bottom:0;right:0;background:url('https://unsplash.com') center/cover no-repeat;border-radius:24px;border:1px solid rgba(255,215,0,0.1);box-shadow:0 20px 40px rgba(0,0,0,0.8)}
.about-text{flex:1}
.section-subtitle{font-size:12px;text-transform:uppercase;letter-spacing:3px;color:#ffd700;display:block;margin-bottom:15px;font-weight:600}
.about h2,.skills h2,.portfolio h2,.pricing h2{font-family:'Syne',sans-serif;font-size:48px;font-weight:800;margin-bottom:35px;letter-spacing:-1px;line-height:1.1}
.about p{font-size:18px;color:rgba(255,255,255,0.6);font-weight:300}
.skills{background:#0b0b10}
.container-header{margin-bottom:60px}
.skills-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:35px}
.skill-card{background:rgba(255,255,255,0.01);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);padding:60px 40px;border-radius:28px;border:1px solid rgba(255,255,255,0.03);transition:0.5s cubic-bezier(0.16,1,0.3,1)}
.skill-card:hover{background:rgba(255,255,255,0.03);transform:translateY(-15px);border-color:rgba(255,215,0,0.3);box-shadow:0 30px 60px rgba(0,0,0,0.5)}
.skill-num{font-family:'Syne',sans-serif;font-size:16px;color:#ffd700;margin-bottom:25px;font-weight:700;letter-spacing:1px}
.skill-card h3{font-family:'Syne',sans-serif;font-size:24px;margin-bottom:20px;font-weight:700}
.skill-card p{font-size:15px;color:rgba(255,255,255,0.4);line-height:1.7}
.visual-break{min-height:60vh;background:url('https://unsplash.com') center/cover fixed no-repeat;align-items:center;text-align:center}
.break-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(5,5,8,0.85)}
.break-content{position:relative;z-index:2;max-width:800px}
.break-content h2{font-family:'Syne',sans-serif;font-size:42px;font-weight:700;line-height:1.3}
.portfolio{background:linear-gradient(180deg,#0b0b10,#050508)}
.portfolio-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:35px}
.portfolio-item{position:relative;height:380px;border-radius:28px;overflow:hidden;border:1px solid rgba(255,255,255,0.03);box-shadow:0 20px 40px rgba(0,0,0,0.4)}
.p-img{width:100%;height:100%;background-size:cover;background-position:center;transition:0.8s cubic-bezier(0.16,1,0.3,1);background-image:url('https://unsplash.com')}
.portfolio-item:hover .p-img{transform:scale(1.1) rotate(0.5deg);opacity:0.25;filter:blur(3px)}
.p-info{position:absolute;bottom:0;left:0;width:100%;padding:40px;background:linear-gradient(to top,rgba(5,5,8,1) 30%,rgba(5,5,8,0));transform:translateY(30px);transition:0.5s cubic-bezier(0.16,1,0.3,1);opacity:0}
.portfolio-item:hover .p-info{transform:translateY(0);opacity:1}
.p-info h3{font-family:'Syne',sans-serif;font-size:24px;margin-bottom:8px;font-weight:700}
.p-info p{font-size:14px;color:rgba(255,255,255,0.4);margin-bottom:20px}
.p-info a{color:#ffd700;text-decoration:none;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:2px}
.p-info a:hover{color:#fff}
.pricing-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:40px;align-items:stretch}
.price-card{background:rgba(255,255,255,0.01);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);padding:60px 45px;border-radius:32px;border:1px solid rgba(255,255,255,0.03);text-align:center;position:relative;transition:0.5s cubic-bezier(0.16,1,0.3,1);display:flex;flex-direction:column}
.price-card:hover{transform:translateY(-10px);border-color:rgba(255,255,255,0.08);box-shadow:0 40px 80px rgba(0,0,0,0.6)}
.price-card.popular{border:1px solid rgba(255,215,0,0.35);background:rgba(255,215,0,0.01);order:-1}
.price-card.popular:hover{border-color:#ffd700;box-shadow:0 30px 60px rgba(255,215,0,0.08)}
.badge{position:absolute;top:-15px;left:50%;transform:translateX(-50%);background:linear-gradient(90deg,#ffd700,#ffa500);color:#000;padding:6px 28px;font-size:11px;font-weight:700;border-radius:50px;text-transform:uppercase;letter-spacing:2px;box-shadow:0 10px 20px rgba(255,215,0,0.25)}
.price-card h3{font-family:'Syne',sans-serif;font-size:26px;margin-bottom:15px;font-weight:700}
.cost{font-family:'Syne',sans-serif;font-size:52px;font-weight:800;color:#fff;margin-bottom:40px;letter-spacing:-2px}
.price-card.popular .cost{background:linear-gradient(135deg,#fff,#ffd700);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.price-card ul{list-style:none;margin-bottom:45px;text-align:left;flex-grow:1}
.price-card li{font-size:14px;color:rgba(255,255,255,0.5);padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.02)}
.price-card li::before{content:'✦';color:#ffd700;margin-right:12px;font-size:11px}
.price-card .btn{width:100%}
.footer{padding:60px 5%;background:#020204;text-align:center;border-top:1px solid rgba(255,255,255,0.02)}
.footer p{font-size:13px;color:rgba(255,255,255,0.3);letter-spacing:1px}
.btn-contact-fixed{position:fixed;bottom:40px;left:40px;background:rgba(255,215,0,0.08);color:#ffd700;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,215,0,0.3);padding:20px 40px;border-radius:50px;text-decoration:none;font-weight:600;font-size:13px;z-index:999;letter-spacing:2px;box-shadow:0 10px 30px rgba(0,0,0,0.4);transition:0.4s cubic-bezier(0.16,1,0.3,1);text-transform:uppercase}
.btn-contact-fixed:hover{background:#ffd700;color:#000;box-shadow:0 20px 40px rgba(255,215,0,0.4);transform:scale(1.03) translateY(-2px)}
.btn-assistant-toggle{position:fixed;bottom:40px;right:40px;width:65px;height:65px;background:#111116;border:1px solid rgba(255,255,255,0.08);border-radius:50%;color:#fff;font-weight:600;font-size:14px;cursor:pointer;z-index:999;box-shadow:0 15px 30px rgba(0,0,0,0.5);transition:0.4s cubic-bezier(0.16,1,0.3,1);display:flex;align-items:center;justify-content:center}
.btn-assistant-toggle:hover{background:#ffd700;color:#000;border-color:#ffd700;transform:scale(1.08) rotate(5deg)}
.assistant-widget{position:fixed;bottom:120px;right:40px;width:390px;height:520px;background:rgba(12,12,18,0.7);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);border:1px solid rgba(255,255,255,0.05);border-radius:28px;z-index:999;display:none;flex-direction:column;box-shadow:0 30px 60px rgba(0,0,0,0.6);overflow:hidden;animation:slideUp 0.4s cubic-bezier(0.16,1,0.3,1)}
.assistant-header{background:rgba(255,255,255,0.02);padding:20px 25px;font-weight:600;font-size:15px;border-bottom:1px solid rgba(255,255,255,0.03);color:#ffd700;display:flex;justify-content:space-between;align-items:center}
.close-assistant{background:none;border:none;color:#fff;font-size:22px;cursor:pointer;opacity:0.5;transition:0.3s}
.close-assistant:hover{opacity:1;color:#ffd700}
.assistant-body{flex:1;padding:25px;overflow-y:auto;display:flex;flex-direction:column;gap:15px}
.msg{padding:14px 20px;border-radius:18px;font-size:14px;max-width:85%;line-height:1.5}
.msg.bot{background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.9);align-self:flex-start;border:1px solid rgba(255,255,255,0.01)}
.msg.user{background:#ffd700;color:#000;align-self:flex-end;font-weight:600}
.assistant-footer{padding:15px;background:rgba(0,0,0,0.2);display:flex;gap:8px;overflow-x:auto;white-space:nowrap;border-top:1px solid rgba(255,255,255,0.03)}
.script-btn{background:rgba(255,255,255,0.02);color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.05);padding:10px 18px;border-radius:50px;font-size:12px;font-weight:500;cursor:pointer;transition:0.3s}
.script-btn:hover{background:#ffd700;color:#000;border-color:#ffd700}
.modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(3,3,5,0.7);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:2000;display:none;align-items:center;justify-content:center;animation:fadeIn 0.3s ease}
.modal-window{background:#0e0e14;border:1px solid rgba(255,255,255,0.05);padding:50px;border-radius:32px;width:100%;max-width:480px;position:relative;box-shadow:0 40px 80px rgba(0,0,0,0.8)}
.modal-close{position:absolute;top:25px;right:25px;background:none;border:none;color:#fff;font-size:26px;cursor:pointer;opacity:0.5;transition:0.3s}
.modal-close:hover{opacity:1;color:#ffd700}
.modal-window h3{font-family:'Syne',sans-serif;font-size:32px;margin-bottom:15px;letter-spacing:-1px}
.modal-window p{color:rgba(255,255,255,0.5);font-size:15px;margin-bottom:30px;font-weight:300}
.modal-window input{width:100%;padding:18px 25px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:50px;color:#fff;font-size:15px;margin-bottom:15px;transition:0.3s;outline:none}
.modal-window input:focus{border-color:#ffd700;background:rgba(255,255,255,0.04)}
@keyframes slideUp{from{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@media(max-width:968px){
.header{padding:25px 5%}
.nav{display:none}
.about{flex-direction:column;gap:50px}
.about-img-wrapper{width:100%;height:400px;flex:none}
.hero h1{font-size:42px}
.hero p{font-size:16px}
.hero-actions{flex-direction:column}
.strip-container{grid-template-columns:1fr 1fr;gap:15px}
.pricing-grid{grid-template-columns:1fr;gap:40px}
.price-card.popular{order:0}
.assistant-widget{width:320px;height:450px;right:20px;bottom:100px}
.btn-assistant-toggle{right:20px;bottom:20px}
.btn-contact-fixed{left:20px;bottom:20px;padding:16px 30px;font-size:11px}
.modal-window{padding:35px;max-width:90%}
}
