function openMenu() {
  document.getElementById("drawer").classList.add("open");
}
function closeMenu() {
  document.getElementById("drawer").classList.remove("open");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeMenu();
});

const I18N = {
  "Кафе": ["Кафе", "Cafe"],
  "Меню": ["Меню", "Menu"],
  "Меню:": ["Меню:", "Menu:"],
  "Бронирование": ["Бронювання", "Booking"],
  "Контакты": ["Контакти", "Contacts"],
  "КОФЕ • ВЫПЕЧКА • ОБЩЕНИЕ": ["КАВА • ВИПІЧКА • СПІЛКУВАННЯ", "COFFEE • PASTRY • SOCIALIZE"],
  "🍲 Супы": ["🍲 Супи", "🍲 Soups"],
  "🥔 Пюре": ["🥔 Пюре", "🥔 Purées"],
  "🍝 Пасты": ["🍝 Пасти", "🍝 Pasta"],
  "🥗 Салаты": ["🥗 Салати", "🥗 Salads"],
  "🍰 Десерты": ["🍰 Десерти", "🍰 Desserts"],
  "☕ Напитки": ["☕ Напої", "☕ Drinks"],
  "Супы": ["Супи", "Soups"],
  "Пюре": ["Пюре", "Purées"],
  "Пасты": ["Пасти", "Pasta"],
  "Салаты": ["Салати", "Salads"],
  "Десерты": ["Десерти", "Desserts"],
  "Напитки": ["Напої", "Drinks"],
  "🕒 Работаем ежедневно с 8:00 до 22:00": ["🕒 Працюємо щодня з 8:00 до 22:00", "🕒 Open daily 8:00 AM – 10:00 PM"],

  "Борщ с говядиной": ["Борщ з яловичиною", "Beef borscht"],
  "Классический борщ со сметаной и зеленью": ["Класичний борщ зі сметаною та зеленню", "Classic borscht with sour cream and herbs"],
  "Крем-суп из тыквы": ["Крем-суп з гарбуза", "Pumpkin cream soup"],
  "Нежный суп со сливками и тыквенными семечками": ["Ніжний суп з вершками та гарбузовим насінням", "Delicate soup with cream and pumpkin seeds"],
  "Грибной крем-суп": ["Грибний крем-суп", "Mushroom cream soup"],
  "Шампиньоны, сливки и гренки": ["Печериці, вершки та грінки", "Mushrooms, cream and croutons"],
  "Куриный бульон": ["Курячий бульйон", "Chicken broth"],
  "Прозрачный бульон с лапшой и яйцом": ["Прозорий бульйон з локшиною та яйцем", "Clear broth with noodles and egg"],
  "Том-ям с креветками": ["Том-ям з креветками", "Tom Yum with shrimp"],
  "Острый тайский суп на кокосовом молоке": ["Гострий тайський суп на кокосовому молоці", "Spicy Thai soup with coconut milk"],

  "Картофельное пюре": ["Картопляне пюре", "Mashed potatoes"],
  "На сливочном масле и молоке": ["На вершковому маслі та молоці", "With butter and milk"],
  "Пюре из цветной капусты": ["Пюре з цвітної капусти", "Cauliflower purée"],
  "Лёгкое, со сливками и мускатным орехом": ["Легке, з вершками та мускатним горіхом", "Light, with cream and nutmeg"],
  "Пюре из батата": ["Пюре з батата", "Sweet potato purée"],
  "Сладкий картофель с корицей": ["Солодка картопля з корицею", "Sweet potato with cinnamon"],
  "Гороховое пюре": ["Гороховe пюре", "Pea purée"],
  "С жареным луком и зеленью": ["Зі смаженою цибулею та зеленню", "With fried onion and herbs"],

  "Карбонара": ["Карбонара", "Carbonara"],
  "Спагетти, бекон, желток и пармезан": ["Спагеті, бекон, жовток і пармезан", "Spaghetti, bacon, egg yolk and parmesan"],
  "Болоньезе": ["Болоньєзе", "Bolognese"],
  "Спагетти с мясным соусом из томатов": ["Спагеті з м’ясним соусом з томатів", "Spaghetti with meat and tomato sauce"],
  "Альфредо с курицей": ["Альфредо з куркою", "Chicken Alfredo"],
  "Феттуччине в сливочном соусе с пармезаном": ["Фетучіні у вершковому соусі з пармезаном", "Fettuccine in creamy sauce with parmesan"],
  "Паста с морепродуктами": ["Паста з морепродуктами", "Seafood pasta"],
  "Креветки, мидии и кальмары в томатном соусе": ["Креветки, мідії та кальмари в томатному соусі", "Shrimp, mussels and squid in tomato sauce"],
  "Паста с песто": ["Паста з песто", "Pesto pasta"],
  "Базиликовый песто, кедровые орехи, томаты черри": ["Базиліковий песто, кедрові горіхи, томати чері", "Basil pesto, pine nuts, cherry tomatoes"],

  "Цезарь с курицей": ["Цезар з куркою", "Chicken Caesar"],
  "Ромэн, куриное филе, пармезан, соус цезарь": ["Ромен, куряче філе, пармезан, соус цезар", "Romaine, chicken fillet, parmesan, Caesar dressing"],
  "Греческий салат": ["Грецький салат", "Greek salad"],
  "Овощи, оливки и сыр фета": ["Овочі, оливки та сир фета", "Vegetables, olives and feta"],

  "Чизкейк": ["Чізкейк", "Cheesecake"],
  "Нью-Йорк с ягодным соусом": ["Нью-Йорк з ягідним соусом", "New York style with berry sauce"],
  "Круассан": ["Круасан", "Croissant"],
  "Свежий, с миндальным кремом": ["Свіжий, з мигдалевим кремом", "Fresh, with almond cream"],
  "Тирамису": ["Тірамісу", "Tiramisu"],
  "Маскарпоне, кофе и савоярди": ["Маскарпоне, кава та савоярді", "Mascarpone, coffee and ladyfingers"],

  "Эспрессо": ["Еспресо", "Espresso"],
  "Двойной шот свежей обжарки": ["Подвійний шот свіжого обсмаження", "Double shot, freshly roasted"],
  "Капучино": ["Капучино", "Cappuccino"],
  "Эспрессо и молочная пенка": ["Еспресо та молочна пінка", "Espresso with milk foam"],
  "Лимонад домашний": ["Домашній лимонад", "Homemade lemonade"],
  "Лимон, мята, лёд": ["Лимон, м’ята, лід", "Lemon, mint, ice"],

  "Информация о заведении": ["Інформація про заклад", "Venue information"],
  "Рабочее время:": ["Робочий час:", "Opening hours:"],
  "Адрес:": ["Адреса:", "Address:"],
  "ул. Центральная, 5": ["вул. Центральна, 5", "5 Tsentralna St."],
  "Телефон:": ["Телефон:", "Phone:"],
  "Забронировать столик": ["Забронювати столик", "Book a table"],

  "Авторизуйтесь": ["Авторизуйтесь", "Log in"],
  ", чтобы упростить процесс заказа и пользоваться дополнительными функциями.": [", щоб спростити процес замовлення та користуватися додатковими функціями.", ", to simplify ordering and use extra features."],
  "Заходите на наш сайт": ["Завітайте на наш веб-сайт", "Visit our website"],
  "Мы в соцсетях": ["Ми в соцмережах", "We're on social media"],
  "Полезная информация": ["Корисна інформація", "Useful information"],
  "Список аллергенов": ["Список алергенів", "Allergen list"],
  "Информация о компании": ["Інформація про компанію", "About the company"],
  "Политика cookie": ["Політика cookie", "Cookie policy"],
  "Условия пользования": ["Умови користування", "Terms of use"],
  "Политика конфиденциальности": ["Політика конфіденційності", "Privacy policy"]
};

const UNITS = { uk: { "г": "г", "мл": "мл" }, en: { "г": "g", "мл": "ml" } };

function translateText(text, lang) {
  if (lang === "ru") return text;
  const i = lang === "uk" ? 0 : 1;
  const w = text.match(/^(.*)\. (\d+) (г|мл)$/);
  if (w && I18N[w[1]]) {
    return I18N[w[1]][i] + ". " + w[2] + " " + UNITS[lang][w[3]];
  }
  return I18N[text] ? I18N[text][i] : text;
}

function setLang(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const tag = node.parentNode.tagName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "OPTION") continue;
    if (node.__orig === undefined) node.__orig = node.nodeValue;
    const trimmed = node.__orig.trim();
    if (!trimmed) continue;
    const result = translateText(trimmed, lang);
    node.nodeValue = node.__orig.replace(trimmed, () => result);
  }
  document.documentElement.lang = lang;
  document.getElementById("lang").value = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

(function () {
  let saved = "ru";
  try { saved = localStorage.getItem("lang") || "ru"; } catch (e) {}
  setLang(saved);
})();
