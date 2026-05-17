  export const cities = [
    // =======================
    // ТОП ГОРОДА
    // =======================
    {
      name: 'Москва',
      info: 'Москве',
      slug: 'moscow',
      title: 'Доставка цветов в Москве',
      description: 'Быстрая доставка свежих букетов по Москве от 30 минут',
      content: 'Мы доставляем цветы по всей Москве 24/7.',
      multiplier: 1.5,
    },
    {
      name: 'Санкт-Петербург',
      info: 'Санкт-Петербурге',
      slug: 'saint-petersburg',
      title: 'Доставка цветов в Санкт-Петербурге',
      description: 'Быстрая доставка свежих букетов по Санкт-Петербургу от 30 минут',
      content: 'Свежие букеты с круглосуточной доставкой по Санкт-Петербургу.',
      multiplier: 1.4,
    },

    // =======================
    // МИЛЛИОННИКИ
    // =======================
    { name: 'Новосибирск', info: 'Новосибирске', slug: 'novosibirsk', title: 'Доставка цветов в Новосибирске', description: 'Быстрая доставка свежих букетов в Новосибирске от 30 минут', content: 'Свежие букеты с доставкой по Новосибирску.', multiplier: 1.15 },
    { name: 'Екатеринбург', info: 'Екатеринбурге', slug: 'ekaterinburg', title: 'Доставка цветов в Екатеринбурге', description: 'Быстрая доставка свежих букетов в Екатеринбурге от 30 минут', content: 'Свежие букеты с доставкой по Екатеринбургу.', multiplier: 1.2 },
    { name: 'Казань', info: 'Казани', slug: 'kazan', title: 'Доставка цветов в Казани', description: 'Быстрая доставка свежих букетов в Казани от 30 минут', content: 'Лучшие букеты с доставкой по Казани.', multiplier: 1.1 },
    { name: 'Нижний Новгород', info: 'Нижнем Новгороде', slug: 'nizhny-novgorod', title: 'Доставка цветов в Нижнем Новгороде', description: 'Быстрая доставка свежих букетов в Нижнем Новгороде от 30 минут', content: 'Свежие букеты с доставкой.', multiplier: 1.05 },
    { name: 'Челябинск', info: 'Челябинске', slug: 'chelyabinsk', title: 'Доставка цветов в Челябинске', description: 'Быстрая доставка свежих букетов в Челябинске от 30 минут', content: 'Букеты с доставкой по городу.', multiplier: 1.0 },
    { name: 'Самара', info: 'Самаре', slug: 'samara', title: 'Доставка цветов в Самаре', description: 'Быстрая доставка свежих букетов в Самаре от 30 минут', content: 'Свежие цветы.', multiplier: 1.0 },
    { name: 'Омск', info: 'Омске', slug: 'omsk', title: 'Доставка цветов в Омске', description: 'Быстрая доставка свежих букетов в Омске от 30 минут', content: 'Букеты с доставкой.', multiplier: 0.95 },
    { name: 'Ростов-на-Дону', info: 'Ростове-на-Дону', slug: 'rostov-na-don', title: 'Доставка цветов в Ростове-на-Дону', description: 'Быстрая доставка свежих букетов', content: 'Свежие цветы.', multiplier: 1.05 },
    { name: 'Уфа', info: 'Уфе', slug: 'ufa', title: 'Доставка цветов в Уфе', description: 'Быстрая доставка свежих букетов', content: 'Цветы с доставкой.', multiplier: 1.0 },
    { name: 'Красноярск', info: 'Красноярске', slug: 'krasnoyarsk', title: 'Доставка цветов в Красноярске', description: 'Быстрая доставка', content: 'Свежие букеты.', multiplier: 1.1 },

    // =======================
    // КРУПНЫЕ ГОРОДА
    // =======================
    { name: 'Пермь', info: 'Перми', slug: 'perm', title: 'Доставка цветов в Перми', description: 'Быстрая доставка', content: 'Цветы с доставкой.', multiplier: 1.0 },
    { name: 'Воронеж', info: 'Воронеже', slug: 'voronezh', title: 'Доставка цветов в Воронеже', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 1.0 },
    { name: 'Волгоград', info: 'Волгограде', slug: 'volgograd', title: 'Доставка цветов в Волгограде', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 0.95 },
    { name: 'Краснодар', info: 'Краснодаре', slug: 'krasnodar', title: 'Доставка цветов в Краснодаре', description: 'Быстрая доставка', content: 'Свежие букеты.', multiplier: 1.1 },

    { name: 'Саратов', info: 'Саратове', slug: 'saratov', title: 'Доставка цветов в Саратове', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 1.0 },
    { name: 'Тюмень', info: 'Тюмени', slug: 'tyumen', title: 'Доставка цветов в Тюмени', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 1.15 },
    { name: 'Томск', info: 'Томске', slug: 'tomsk', title: 'Доставка цветов в Томске', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 1.0 },
    { name: 'Иркутск', info: 'Иркутске', slug: 'irkutsk', title: 'Доставка цветов в Иркутске', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 1.1 },
    { name: 'Хабаровск', info: 'Хабаровске', slug: 'khabarovsk', title: 'Доставка цветов в Хабаровске', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 1.25 },
    { name: 'Владивосток', info: 'Владивостоке', slug: 'vladivostok', title: 'Доставка цветов во Владивостоке', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 1.3 },
    { name: 'Калининград', info: 'Калининграде', slug: 'kaliningrad', title: 'Доставка цветов в Калининграде', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 1.15 },

    // =======================
    // СРЕДНИЕ ГОРОДА (основной блок)
    // =======================
    { name: 'Сочи', info: 'Сочи', slug: 'sochi', title: 'Доставка цветов в Сочи', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 1.2 },
    { name: 'Сургут', info: 'Сургуте', slug: 'surgut', title: 'Доставка цветов в Сургуте', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 1.25 },
    { name: 'Якутск', info: 'Якутске', slug: 'yakutsk', title: 'Доставка цветов в Якутске', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 1.35 },
    { name: 'Мурманск', info: 'Мурманске', slug: 'murmansk', title: 'Доставка цветов в Мурманске', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 1.25 },
    { name: 'Архангельск', info: 'Архангельске', slug: 'arkhangelsk', title: 'Доставка цветов в Архангельске', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 1.2 },
    { name: 'Курск', info: 'Курске', slug: 'kursk', title: 'Доставка цветов в Курске', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 0.9 },
    { name: 'Белгород', info: 'Белгороде', slug: 'belgorod', title: 'Доставка цветов в Белгороде', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 0.95 },
    { name: 'Рязань', info: 'Рязани', slug: 'ryazan', title: 'Доставка цветов в Рязани', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 0.95 },
    { name: 'Тула', info: 'Туле', slug: 'tula', title: 'Доставка цветов в Туле', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 0.95 },
    { name: 'Ярославль', info: 'Ярославле', slug: 'yaroslavl', title: 'Доставка цветов в Ярославле', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 0.95 },
    { name: 'Смоленск', info: 'Смоленске', slug: 'smolensk', title: 'Доставка цветов в Смоленске', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 0.9 },

    // =======================
    // ДОБИВКА ДО 120+
    // =======================
    { name: 'Брянск', info: 'Брянске', slug: 'bryansk', title: 'Доставка цветов в Брянске', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 0.9 },
    { name: 'Тверь', info: 'Твери', slug: 'tver', title: 'Доставка цветов в Твери', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 0.95 },
    { name: 'Владимир', info: 'Владимире', slug: 'vladimir', title: 'Доставка цветов во Владимире', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 0.95 },
    { name: 'Псков', info: 'Пскове', slug: 'pskov', title: 'Доставка цветов в Пскове', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 0.9 },
    { name: 'Кострома', info: 'Костроме', slug: 'kostroma', title: 'Доставка цветов в Костроме', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 0.9 },
    { name: 'Нальчик', info: 'Нальчике', slug: 'nalchik', title: 'Доставка цветов в Нальчике', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 0.9 },
    { name: 'Пенза', info: 'Пензе', slug: 'penza', title: 'Доставка цветов в Пензе', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 0.9 },
    { name: 'Киров', info: 'Кирове', slug: 'kirov', title: 'Доставка цветов в Кирове', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 0.9 },
    { name: 'Чебоксары', info: 'Чебоксарах', slug: 'cheboksary', title: 'Доставка цветов в Чебоксарах', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 0.9 },
    { name: 'Липецк', info: 'Липецке', slug: 'lipetsk', title: 'Доставка цветов в Липецке', description: 'Быстрая доставка', content: 'Букеты.', multiplier: 0.9 },
    { name: 'Саранск', info: 'Саранске', slug: 'saransk', title: 'Доставка цветов в Саранске', description: 'Быстрая доставка', content: 'Цветы.', multiplier: 0.9 },
  ];

  export const categories = [
    { slug: 'popular' },
    { slug: 'roses' },
    { slug: 'peonies' },
    { slug: 'tulips' },
    { slug: 'hydrangeas' },
    { slug: 'chrysanthemums' },
    { slug: 'author' },
    { slug: 'mono' },
    { slug: 'premium' },
    { slug: 'birthday' },
    { slug: 'love' },
    { slug: 'mom' },
    { slug: 'wedding' },
    { slug: 'anniversary' },
    { slug: 'baskets' },
  ];

  export const staticPages = [
    'about',
    'returns',
    'custom-bouquet',
    'delivery',
    'contacts',
  ];

  export const baseUrl = 'https://букетория.рф';