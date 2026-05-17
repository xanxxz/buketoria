import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding started...');

  // 🏙 Cities
  const cities = [
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

  for (const city of cities) {
    await prisma.city.upsert({
      where: { slug: city.slug },
      update: {},
      create: city,
    });
  }

  // 🌸 Categories (СНАЧАЛА)
  const categories = [
   {
      name: 'Популярные',
      slug: 'popular',
    },
    // 🔥 Популярные цветы
    {
      name: 'Розы',
      slug: 'roses',
    },
    {
      name: 'Пионы',
      slug: 'peonies',
    },
    {
      name: 'Тюльпаны',
      slug: 'tulips',
    },
    {
      name: 'Гортензии',
      slug: 'hydrangeas',
    },
    {
      name: 'Хризантемы',
      slug: 'chrysanthemums',
    },

    // 🔥 Авторские
    {
      name: 'Авторские букеты',
      slug: 'author',
    },
    {
      name: 'Монобукеты',
      slug: 'mono',
    },
    {
      name: 'Премиум букеты',
      slug: 'premium',
    },

    // 🔥 Поводы
    {
      name: 'На день рождения',
      slug: 'birthday',
    },
    {
      name: 'Для любимой',
      slug: 'love',
    },
    {
      name: 'Для мамы',
      slug: 'mom',
    },
    {
      name: 'На свадьбу',
      slug: 'wedding',
    },
    {
      name: 'На юбилей',
      slug: 'anniversary',
    },
    {
      name: 'Цветочные корзины',
      slug: 'baskets',
    },
  ];

  const createdCategories: Record<string, string> = {};

  for (const c of categories) {
    const category = await prisma.category.upsert({
      where: { slug: c.slug },
      update: {},
      create: c,
    });

    createdCategories[c.slug] = category.id;
  }

    // 🌹 Products (ПОСЛЕ категорий)
  const products = [
    {
      name: 'Розы бестселлеры',
      slug: 'rozy-bestsellery',
      categorySlug: 'popular',
      description: 'Самые популярные классические розы, которые чаще всего выбирают.',
      baseMinPrice: 4900,
      baseMaxPrice: 8900,
      image: 'https://s3.twcstorage.ru/flowers/rozy-bestsellery.jpg',
    },
    {
      name: 'Пионы хиты',
      slug: 'piony-khity',
      categorySlug: 'popular',
      description: 'Пышные пионы — один из самых востребованных букетов.',
      baseMinPrice: 5200,
      baseMaxPrice: 9200,
      image: 'https://s3.twcstorage.ru/flowers/piony-khity.jpg',
    },
    {
      name: 'Тюльпаны хиты сезона',
      slug: 'tyulpany-khity-sezona',
      categorySlug: 'popular',
      description: 'Яркие тюльпаны, которые выбирают чаще всего весной.',
      baseMinPrice: 2900,
      baseMaxPrice: 5900,
      image: 'https://s3.twcstorage.ru/flowers/tyulpany-khity-sezona.jpg',
    },
    {
      name: 'Авторские хиты',
      slug: 'avtorskie-khity',
      categorySlug: 'popular',
      description: 'Самые популярные авторские композиции флористов.',
      baseMinPrice: 6500,
      baseMaxPrice: 10900,
      image: 'https://s3.twcstorage.ru/flowers/avtorskie-khity.jpg',
    },
    {
      name: 'Премиум бестселлеры',
      slug: 'premium-bestsellery',
      categorySlug: 'popular',
      description: 'Элитные букеты, которые чаще всего выбирают в подарок.',
      baseMinPrice: 9900,
      baseMaxPrice: 16900,
      image: 'https://s3.twcstorage.ru/flowers/premium-bestsellery.jpg',
    },
    {
      name: 'Сезонные хиты',
      slug: 'sezonnye-khity',
      categorySlug: 'popular',
      description: 'Лучшие сезонные букеты по популярности.',
      baseMinPrice: 4500,
      baseMaxPrice: 8500,
      image: 'https://s3.twcstorage.ru/flowers/sezonnye-khity.jpg',
    },
    {
      name: 'Алые розы',
      slug: 'alye-rozy',
      categorySlug: 'roses',
      description: 'Классические красные розы для ярких признаний.',
      baseMinPrice: 2000,
      baseMaxPrice: 100000,
      image: 'https://s3.twcstorage.ru/flowers/alye-rozy.jpg',
    },
    {
      name: 'Белоснежные розы',
      slug: 'belosnezhnye-rozy',
      categorySlug: 'roses',
      description: 'Элегантные белые розы для утончённых композиций.',
      baseMinPrice: 2000,
      baseMaxPrice: 100000,
      image: 'https://s3.twcstorage.ru/flowers/belosnezhnye-rozy.jpg',
    },
    {
      name: 'Розовые розы',
      slug: 'rozovye-rozy',
      categorySlug: 'roses',
      description: 'Нежные розовые розы с романтичным настроением.',
      baseMinPrice: 1900,
      baseMaxPrice: 100000,
      image: 'https://s3.twcstorage.ru/flowers/rozovye-rozy.jpg',
    },
    {
      name: 'Кремовые розы',
      slug: 'kremovye-rozy',
      categorySlug: 'roses',
      description: 'Тёплые кремовые оттенки для уютного букета.',
      baseMinPrice: 2200,
      baseMaxPrice: 8600,
      image: 'https://s3.twcstorage.ru/flowers/kremovye-rozy.jpg',
    },
    {
      name: 'Французские розы',
      slug: 'frantsuzskie-rozy',
      categorySlug: 'roses',
      description: 'Изысканные садовые розы с пышными бутонами.',
      baseMinPrice: 2500,
      baseMaxPrice: 9900,
      image: 'https://s3.twcstorage.ru/flowers/frantsuzskie-rozy.jpg',
    },

    // 🔥 Пионы
    {
      name: 'Розовые пионы',
      slug: 'rozovye-piony',
      categorySlug: 'peonies',
      description: 'Воздушные пионы нежно-розовых оттенков.',
      baseMinPrice: 2000,
      baseMaxPrice: 6900,
      image: 'https://s3.twcstorage.ru/flowers/rozovye-piony.jpg',
    },
    {
      name: 'Белые пионы',
      slug: 'belye-piony',
      categorySlug: 'peonies',
      description: 'Элегантные белые пионы для светлых композиций.',
      baseMinPrice: 2200,
      baseMaxPrice: 7100,
      image: 'https://s3.twcstorage.ru/flowers/belye-piony.jpg',
    },
    {
      name: 'Коралловые пионы',
      slug: 'korallovye-piony',
      categorySlug: 'peonies',
      description: 'Яркие коралловые пионы с насыщенным оттенком.',
      baseMinPrice: 2200,
      baseMaxPrice: 7600,
      image: 'https://s3.twcstorage.ru/flowers/korallovye-piony.jpg',
    },
    {
      name: 'Пудровые пионы',
      slug: 'pudrovye-piony',
      categorySlug: 'peonies',
      description: 'Нежные пудровые пионы с романтичным настроением.',
      baseMinPrice: 2500,
      baseMaxPrice: 7200,
      image: 'https://s3.twcstorage.ru/flowers/pudrovye-piony.jpg',
    },
    {
      name: 'Пышные пионы',
      slug: 'pyshnye-piony',
      categorySlug: 'peonies',
      description: 'Объёмный букет из крупных ароматных пионов.',
      baseMinPrice: 3000,
      baseMaxPrice: 7900,
      image: 'https://s3.twcstorage.ru/flowers/pyshnye-piony.jpg',
    },
    {
      name: 'Микс пионов',
      slug: 'miks-pionov',
      categorySlug: 'peonies',
      description: 'Сочетание пионов разных оттенков в одном букете.',
      baseMinPrice: 2300,
      baseMaxPrice: 7500,
      image: 'https://s3.twcstorage.ru/flowers/miks-pionov.jpg',
    },

    // 🔥 Тюльпаны
    {
      name: 'Красные тюльпаны',
      slug: 'krasnye-tyulpany',
      categorySlug: 'tulips',
      description: 'Яркие красные тюльпаны для эффектного букета.',
      baseMinPrice: 1500,
      baseMaxPrice: 5400,
      image: 'https://s3.twcstorage.ru/flowers/krasnye-tyulpany.jpg',
    },
    {
      name: 'Белые тюльпаны',
      slug: 'belye-tyulpany',
      categorySlug: 'tulips',
      description: 'Нежные белые тюльпаны в минималистичном стиле.',
      baseMinPrice: 1500,
      baseMaxPrice: 5200,
      image: 'https://s3.twcstorage.ru/flowers/belye-tyulpany.jpg',
    },
    {
      name: 'Розовые тюльпаны',
      slug: 'rozovye-tyulpany',
      categorySlug: 'tulips',
      description: 'Лёгкий весенний букет из розовых тюльпанов.',
      baseMinPrice: 1200,
      baseMaxPrice: 5300,
      image: 'https://s3.twcstorage.ru/flowers/rozovye-tyulpany.jpg',
    },
    {
      name: 'Жёлтые тюльпаны',
      slug: 'zheltye-tyulpany',
      categorySlug: 'tulips',
      description: 'Солнечные тюльпаны для яркого настроения.',
      baseMinPrice: 1200,
      baseMaxPrice: 5100,
      image: 'https://s3.twcstorage.ru/flowers/zheltye-tyulpany.jpg',
    },
    {
      name: 'Фиолетовые тюльпаны',
      slug: 'fioletovye-tyulpany',
      categorySlug: 'tulips',
      description: 'Элегантные тюльпаны глубокого фиолетового оттенка.',
      baseMinPrice: 2000,
      baseMaxPrice: 5600,
      image: 'https://s3.twcstorage.ru/flowers/fioletovye-tyulpany.jpg',
    },
    {
      name: 'Микс тюльпанов',
      slug: 'miks-tyulpanov',
      categorySlug: 'tulips',
      description: 'Разноцветный букет из свежих весенних тюльпанов.',
      baseMinPrice: 1400,
      baseMaxPrice: 5900,
      image: 'https://s3.twcstorage.ru/flowers/miks-tyulpanov.jpg',
    },

    // 🔥 Гортензии
    {
      name: 'Голубые гортензии',
      slug: 'golubye-gortenzii',
      categorySlug: 'hydrangeas',
      description: 'Пышные голубые гортензии с нежными лепестками.',
      baseMinPrice: 2700,
      baseMaxPrice: 6900,
      image: 'https://s3.twcstorage.ru/flowers/golubye-gortenzii.jpg',
    },
    {
      name: 'Белые гортензии',
      slug: 'belye-gortenzii',
      categorySlug: 'hydrangeas',
      description: 'Элегантные белые гортензии для воздушных букетов.',
      baseMinPrice: 2500,
      baseMaxPrice: 7200,
      image: 'https://s3.twcstorage.ru/flowers/belye-gortenzii.jpg',
    },
    {
      name: 'Розовые гортензии',
      slug: 'rozovye-gortenzii',
      categorySlug: 'hydrangeas',
      description: 'Нежные розовые гортензии в романтичном стиле.',
      baseMinPrice: 2400,
      baseMaxPrice: 7100,
      image: 'https://s3.twcstorage.ru/flowers/rozovye-gortenzii.jpg',
    },
    {
      name: 'Сиреневые гортензии',
      slug: 'sirenevye-gortenzii',
      categorySlug: 'hydrangeas',
      description: 'Изящные сиреневые оттенки для утончённого букета.',
      baseMinPrice: 2500,
      baseMaxPrice: 7600,
      image: 'https://s3.twcstorage.ru/flowers/sirenevye-gortenzii.jpg',
    },
    {
      name: 'Микс гортензий',
      slug: 'miks-gortenziy',
      categorySlug: 'hydrangeas',
      description: 'Сочетание ярких и пастельных гортензий в одном букете.',
      baseMinPrice: 2300,
      baseMaxPrice: 7900,
      image: 'https://s3.twcstorage.ru/flowers/miks-gortenziy.jpg',
    },
    {
      name: 'Пышные гортензии',
      slug: 'pyshnye-gortenzii',
      categorySlug: 'hydrangeas',
      description: 'Объёмный букет из крупных свежих гортензий.',
      baseMinPrice: 3000,
      baseMaxPrice: 8200,
      image: 'https://s3.twcstorage.ru/flowers/pyshnye-gortenzii.jpg',
    },

    // 🔥 Хризантемы
    {
      name: 'Белые хризантемы',
      slug: 'belye-hrizantemy',
      categorySlug: 'chrysanthemums',
      description: 'Свежие белые хризантемы для нежного букета.',
      baseMinPrice: 2400,
      baseMaxPrice: 4900,
      image: 'https://s3.twcstorage.ru/flowers/belye-hrizantemy.jpg',
    },
    {
      name: 'Жёлтые хризантемы',
      slug: 'zheltye-hrizantemy',
      categorySlug: 'chrysanthemums',
      description: 'Яркие жёлтые хризантемы с солнечным настроением.',
      baseMinPrice: 2500,
      baseMaxPrice: 5100,
      image: 'https://s3.twcstorage.ru/flowers/zheltye-hrizantemy.jpg',
    },
    {
      name: 'Розовые хризантемы',
      slug: 'rozovye-hrizantemy',
      categorySlug: 'chrysanthemums',
      description: 'Нежные розовые хризантемы для романтичной композиции.',
      baseMinPrice: 2600,
      baseMaxPrice: 5300,
      image: 'https://s3.twcstorage.ru/flowers/rozovye-hrizantemy.jpg',
    },
    {
      name: 'Сиреневые хризантемы',
      slug: 'sirenevye-hrizantemy',
      categorySlug: 'chrysanthemums',
      description: 'Элегантные сиреневые оттенки в пышном букете.',
      baseMinPrice: 2700,
      baseMaxPrice: 5500,
      image: 'https://s3.twcstorage.ru/flowers/sirenevye-hrizantemy.jpg',
    },
    {
      name: 'Кустовые хризантемы',
      slug: 'kustovye-hrizantemy',
      categorySlug: 'chrysanthemums',
      description: 'Объёмные кустовые хризантемы с множеством бутонов.',
      baseMinPrice: 2900,
      baseMaxPrice: 5900,
      image: 'https://s3.twcstorage.ru/flowers/kustovye-hrizantemy.jpg',
    },
    {
      name: 'Микс хризантем',
      slug: 'miks-hrizantem',
      categorySlug: 'chrysanthemums',
      description: 'Разноцветный букет из свежих хризантем.',
      baseMinPrice: 3000,
      baseMaxPrice: 6200,
      image: 'https://s3.twcstorage.ru/flowers/miks-hrizantem.jpg',
    },

    // 🔥 Авторские
    {
      name: 'Нежный авторский букет',
      slug: 'nezhnyy-avtorskiy-buket',
      categorySlug: 'author',
      description: 'Авторская композиция в пастельных оттенках.',
      baseMinPrice: 3200,
      baseMaxPrice: 9900,
      image: 'https://s3.twcstorage.ru/flowers/nezhnyy-avtorskiy-buket.jpg',
    },
    {
      name: 'Яркий авторский букет',
      slug: 'yarkiy-avtorskiy-buket',
      categorySlug: 'author',
      description: 'Смелое сочетание сезонных цветов и акцентов.',
      baseMinPrice: 3200,
      baseMaxPrice: 10500,
      image: 'https://s3.twcstorage.ru/flowers/yarkiy-avtorskiy-buket.jpg',
    },
    {
      name: 'Премиум букет',
      slug: 'premium-buket',
      categorySlug: 'author',
      description: 'Роскошная авторская композиция для особого случая.',
      baseMinPrice: 5900,
      baseMaxPrice: 14900,
      image: 'https://s3.twcstorage.ru/flowers/premium-buket.jpg',
    },
    {
      name: 'Воздушный букет',
      slug: 'vozdushnyy-buket',
      categorySlug: 'author',
      description: 'Лёгкий и объёмный букет с нежной палитрой.',
      baseMinPrice: 3900,
      baseMaxPrice: 9400,
      image: 'https://s3.twcstorage.ru/flowers/vozdushnyy-buket.jpg',
    },
    {
      name: 'Сезонный микс',
      slug: 'sezonnyy-miks',
      categorySlug: 'author',
      description: 'Авторский букет из лучших сезонных цветов.',
      baseMinPrice: 3500,
      baseMaxPrice: 10200,
      image: 'https://s3.twcstorage.ru/flowers/sezonnyy-miks.jpg',
    },
    {
      name: 'Эстетичный букет',
      slug: 'estetichnyy-buket',
      categorySlug: 'author',
      description: 'Стильная композиция с современным оформлением.',
      baseMinPrice: 5000,
      baseMaxPrice: 11200,
      image: 'https://s3.twcstorage.ru/flowers/estetichnyy-buket.jpg',
    },

    // 🔥 Монобукеты
    {
      name: 'Монобукет из роз',
      slug: 'monobuket-iz-roz',
      categorySlug: 'mono',
      description: 'Стильный монобукет из свежих роз одного оттенка.',
      baseMinPrice: 3900,
      baseMaxPrice: 7900,
      image: 'https://s3.twcstorage.ru/flowers/monobuket-iz-roz.jpg',
    },
    {
      name: 'Монобукет из пионов',
      slug: 'monobuket-iz-pionov',
      categorySlug: 'mono',
      description: 'Пышный букет только из ароматных пионов.',
      baseMinPrice: 4200,
      baseMaxPrice: 8600,
      image: 'https://s3.twcstorage.ru/flowers/monobuket-iz-pionov.jpg',
    },
    {
      name: 'Монобукет из тюльпанов',
      slug: 'monobuket-iz-tyulpanov',
      categorySlug: 'mono',
      description: 'Минималистичный букет из ярких тюльпанов.',
      baseMinPrice: 3200,
      baseMaxPrice: 5900,
      image: 'https://s3.twcstorage.ru/flowers/monobuket-iz-tyulpanov.jpg',
    },
    {
      name: 'Монобукет из гортензий',
      slug: 'monobuket-iz-gortenziy',
      categorySlug: 'mono',
      description: 'Объёмная композиция из крупных гортензий.',
      baseMinPrice: 3400,
      baseMaxPrice: 9100,
      image: 'https://s3.twcstorage.ru/flowers/monobuket-iz-gortenziy.jpg',
    },
    {
      name: 'Монобукет из хризантем',
      slug: 'monobuket-iz-hrizantem',
      categorySlug: 'mono',
      description: 'Свежий и воздушный букет из хризантем.',
      baseMinPrice: 2900,
      baseMaxPrice: 5600,
      image: 'https://s3.twcstorage.ru/flowers/monobuket-iz-hrizantem.jpg',
    },
    {
      name: 'Монобукет XL',
      slug: 'monobuket-xl',
      categorySlug: 'mono',
      description: 'Большой монобукет для эффектного подарка.',
      baseMinPrice: 7900,
      baseMaxPrice: 13900,
      image: 'https://s3.twcstorage.ru/flowers/monobuket-xl.jpg',
    },

    // 🔥 Премиум
    {
      name: 'Премиум розы',
      slug: 'premium-rozy',
      categorySlug: 'premium',
      description: 'Роскошный букет из отборных длинных роз.',
      baseMinPrice: 7900,
      baseMaxPrice: 16900,
      image: 'https://s3.twcstorage.ru/flowers/premium-rozy.jpg',
    },
    {
      name: 'Премиум пионы',
      slug: 'premium-piony',
      categorySlug: 'premium',
      description: 'Элитная композиция из крупных ароматных пионов.',
      baseMinPrice: 8900,
      baseMaxPrice: 17900,
      image: 'https://s3.twcstorage.ru/flowers/premium-piony.jpg',
    },
    {
      name: 'Королевский букет',
      slug: 'korolevskiy-buket',
      categorySlug: 'premium',
      description: 'Объёмный букет с премиальными сортами цветов.',
      baseMinPrice: 12900,
      baseMaxPrice: 21900,
      image: 'https://s3.twcstorage.ru/flowers/korolevskiy-buket.jpg',
    },
    {
      name: 'Luxury bouquet',
      slug: 'luxury-bouquet',
      categorySlug: 'premium',
      description: 'Современная премиум-композиция в luxury стиле.',
      baseMinPrice: 14900,
      baseMaxPrice: 24900,
      image: 'https://s3.twcstorage.ru/flowers/luxury-bouquet.jpg',
    },
    {
      name: 'VIP композиция',
      slug: 'vip-kompoziciya',
      categorySlug: 'premium',
      description: 'Статусный букет для особых событий и подарков.',
      baseMinPrice: 13900,
      baseMaxPrice: 22900,
      image: 'https://s3.twcstorage.ru/flowers/vip-kompoziciya.jpg',
    },
    {
      name: 'Премиум микс',
      slug: 'premium-miks',
      categorySlug: 'premium',
      description: 'Сочетание редких цветов в эксклюзивной упаковке.',
      baseMinPrice: 11900,
      baseMaxPrice: 19900,
      image: 'https://s3.twcstorage.ru/flowers/premium-miks.jpg',
    },

    // 🔥 День рождения
    {
      name: 'Нежный букет на день рождения',
      slug: 'nezhnyy-buket-na-den-rozhdeniya',
      categorySlug: 'birthday',
      description: 'Воздушная композиция в пастельных оттенках для праздника.',
      baseMinPrice: 3500,
      baseMaxPrice: 7900,
      image: 'https://s3.twcstorage.ru/flowers/nezhnyy-buket-na-den-rozhdeniya.jpg',
    },
    {
      name: 'Яркий праздничный букет',
      slug: 'yarkiy-prazdnichnyy-buket',
      categorySlug: 'birthday',
      description: 'Красочная композиция для незабываемого дня рождения.',
      baseMinPrice: 4000,
      baseMaxPrice: 8600,
      image: 'https://s3.twcstorage.ru/flowers/yarkiy-prazdnichnyy-buket.jpg',
    },
    {
      name: 'Букет для мамы',
      slug: 'buket-dlya-mamy',
      categorySlug: 'birthday',
      description: 'Тёплый и элегантный букет для любимой мамы.',
      baseMinPrice: 4000,
      baseMaxPrice: 8400,
      image: 'https://s3.twcstorage.ru/flowers/buket-dlya-mamy.jpg',
    },
    {
      name: 'Букет для девушки',
      slug: 'buket-dlya-devushki',
      categorySlug: 'birthday',
      description: 'Романтичная композиция с нежными цветами.',
      baseMinPrice: 3000,
      baseMaxPrice: 8200,
      image: 'https://s3.twcstorage.ru/flowers/buket-dlya-devushki.jpg',
    },
    {
      name: 'Праздничный микс',
      slug: 'prazdnichnyy-miks',
      categorySlug: 'birthday',
      description: 'Сочетание сезонных цветов в яркой упаковке.',
      baseMinPrice: 3500,
      baseMaxPrice: 9100,
      image: 'https://s3.twcstorage.ru/flowers/prazdnichnyy-miks.jpg',
    },
    {
      name: 'Большой букет на день рождения',
      slug: 'bolshoy-buket-na-den-rozhdeniya',
      categorySlug: 'birthday',
      description: 'Эффектная композиция для особенного поздравления.',
      baseMinPrice: 6900,
      baseMaxPrice: 12900,
      image: 'https://s3.twcstorage.ru/flowers/bolshoy-buket-na-den-rozhdeniya.jpg',
    },

    // 🔥 Любовь
    {
      name: 'Романтичные розы',
      slug: 'romantichnye-rozy',
      categorySlug: 'love',
      description: 'Классический букет роз для признания в чувствах.',
      baseMinPrice: 4000,
      baseMaxPrice: 8900,
      image: 'https://s3.twcstorage.ru/flowers/romantichnye-rozy.jpg',
    },
    {
      name: 'Нежный букет для любимой',
      slug: 'nezhnyy-buket-dlya-lyubimoy',
      categorySlug: 'love',
      description: 'Воздушная композиция в пастельных оттенках.',
      baseMinPrice: 2500,
      baseMaxPrice: 8600,
      image: 'https://s3.twcstorage.ru/flowers/nezhnyy-buket-dlya-lyubimoy.jpg',
    },
    {
      name: 'Букет с пионами',
      slug: 'buket-s-pionami',
      categorySlug: 'love',
      description: 'Пышные пионы и нежное оформление для особого момента.',
      baseMinPrice: 4000,
      baseMaxPrice: 9900,
      image: 'https://s3.twcstorage.ru/flowers/buket-s-pionami.jpg',
    },
    {
      name: 'Авторская композиция Love',
      slug: 'avtorskaya-kompoziciya-love',
      categorySlug: 'love',
      description: 'Стильный букет с современным оформлением.',
      baseMinPrice: 5500,
      baseMaxPrice: 11200,
      image: 'https://s3.twcstorage.ru/flowers/avtorskaya-kompoziciya-love.jpg',
    },
    {
      name: 'Сердце из цветов',
      slug: 'serdce-iz-cvetov',
      categorySlug: 'love',
      description: 'Эффектная композиция в форме сердца.',
      baseMinPrice: 5900,
      baseMaxPrice: 14900,
      image: 'https://s3.twcstorage.ru/flowers/serdce-iz-cvetov.jpg',
    },
    {
      name: 'Премиум букет для любимой',
      slug: 'premium-buket-dlya-lyubimoy',
      categorySlug: 'love',
      description: 'Роскошный букет для самых важных признаний.',
      baseMinPrice: 10000,
      baseMaxPrice: 16900,
      image: 'https://s3.twcstorage.ru/flowers/premium-buket-dlya-lyubimoy.jpg',
    },

    // 🔥 Для мамы
    {
      name: 'Нежный букет для мамы',
      slug: 'nezhnyy-buket-dlya-mamy',
      categorySlug: 'mom',
      description: 'Тёплая композиция в пастельных оттенках для любимой мамы.',
      baseMinPrice: 3000,
      baseMaxPrice: 7900,
      image: 'https://s3.twcstorage.ru/flowers/nezhnyy-buket-dlya-mamy.jpg',
    },
    {
      name: 'Пионы для мамы',
      slug: 'piony-dlya-mamy',
      categorySlug: 'mom',
      description: 'Пышные ароматные пионы в элегантной упаковке.',
      baseMinPrice: 4000,
      baseMaxPrice: 9200,
      image: 'https://s3.twcstorage.ru/flowers/piony-dlya-mamy.jpg',
    },
    {
      name: 'Розы для мамы',
      slug: 'rozy-dlya-mamy',
      categorySlug: 'mom',
      description: 'Классический букет нежных роз для особого повода.',
      baseMinPrice: 3200,
      baseMaxPrice: 8600,
      image: 'https://s3.twcstorage.ru/flowers/rozy-dlya-mamy.jpg',
    },
    {
      name: 'Воздушный микс',
      slug: 'vozdushnyy-miks',
      categorySlug: 'mom',
      description: 'Лёгкая композиция из сезонных цветов.',
      baseMinPrice: 2500,
      baseMaxPrice: 8800,
      image: 'https://s3.twcstorage.ru/flowers/vozdushnyy-miks.jpg',
    },
    {
      name: 'Авторский букет для мамы',
      slug: 'avtorskiy-buket-dlya-mamy',
      categorySlug: 'mom',
      description: 'Стильный букет с нежной цветовой палитрой.',
      baseMinPrice: 4200,
      baseMaxPrice: 9900,
      image: 'https://s3.twcstorage.ru/flowers/avtorskiy-buket-dlya-mamy.jpg',
    },
    {
      name: 'Большой букет для мамы',
      slug: 'bolshoy-buket-dlya-mamy',
      categorySlug: 'mom',
      description: 'Эффектная композиция для важного поздравления.',
      baseMinPrice: 7900,
      baseMaxPrice: 12900,
      image: 'https://s3.twcstorage.ru/flowers/bolshoy-buket-dlya-mamy.jpg',
    },

    // 🔥 Свадьба
    {
      name: 'Свадебный букет невесты',
      slug: 'svadebnyy-buket-nevesty',
      categorySlug: 'wedding',
      description: 'Нежная и элегантная композиция для образа невесты.',
      baseMinPrice: 5900,
      baseMaxPrice: 13900,
      image: 'https://s3.twcstorage.ru/flowers/svadebnyy-buket-nevesty.jpg',
    },
    {
      name: 'Белый свадебный букет',
      slug: 'belyy-svadebnyy-buket',
      categorySlug: 'wedding',
      description: 'Классический букет в белых оттенках.',
      baseMinPrice: 6200,
      baseMaxPrice: 14200,
      image: 'https://s3.twcstorage.ru/flowers/belyy-svadebnyy-buket.jpg',
    },
    {
      name: 'Пастельный свадебный букет',
      slug: 'pastelnyy-svadebnyy-buket',
      categorySlug: 'wedding',
      description: 'Нежная композиция в мягких пастельных оттенках.',
      baseMinPrice: 8000,
      baseMaxPrice: 13500,
      image: 'https://s3.twcstorage.ru/flowers/pastelnyy-svadebnyy-buket.jpg',
    },
    {
      name: 'Премиум свадебный букет',
      slug: 'premium-svadebnyy-buket',
      categorySlug: 'wedding',
      description: 'Роскошный букет для особенного дня.',
      baseMinPrice: 12900,
      baseMaxPrice: 18900,
      image: 'https://s3.twcstorage.ru/flowers/premium-svadebnyy-buket.jpg',
    },
    {
      name: 'Свадебная композиция с пионами',
      slug: 'svadebnaya-kompoziciya-s-pionami',
      categorySlug: 'wedding',
      description: 'Пышные пионы в элегантном свадебном оформлении.',
      baseMinPrice: 9900,
      baseMaxPrice: 16900,
      image: 'https://s3.twcstorage.ru/flowers/svadebnaya-kompoziciya-s-pionami.jpg',
    },
    {
      name: 'Минималистичный свадебный букет',
      slug: 'minimalistichnyy-svadebnyy-buket',
      categorySlug: 'wedding',
      description: 'Современный лаконичный букет для стильной свадьбы.',
      baseMinPrice: 3500,
      baseMaxPrice: 12900,
      image: 'https://s3.twcstorage.ru/flowers/minimalistichnyy-svadebnyy-buket.jpg',
    },

    // 🔥 Юбилей
    {
      name: 'Праздничный букет на юбилей',
      slug: 'prazdnichnyy-buket-na-yubiley',
      categorySlug: 'anniversary',
      description: 'Яркая композиция для торжественного юбилея.',
      baseMinPrice: 5000,
      baseMaxPrice: 9900,
      image: 'https://s3.twcstorage.ru/flowers/prazdnichnyy-buket-na-yubiley.jpg',
    },
    {
      name: 'Роскошный юбилейный букет',
      slug: 'roskoshnyy-yubileynyy-buket',
      categorySlug: 'anniversary',
      description: 'Объёмный букет с премиальными цветами.',
      baseMinPrice: 8900,
      baseMaxPrice: 14900,
      image: 'https://s3.twcstorage.ru/flowers/roskoshnyy-yubileynyy-buket.jpg',
    },
    {
      name: 'Классический букет на юбилей',
      slug: 'klassicheskiy-buket-na-yubiley',
      categorySlug: 'anniversary',
      description: 'Элегантная композиция в классическом стиле.',
      baseMinPrice: 4000,
      baseMaxPrice: 10200,
      image: 'https://s3.twcstorage.ru/flowers/klassicheskiy-buket-na-yubiley.jpg',
    },
    {
      name: 'Яркий микс на юбилей',
      slug: 'yarkiy-miks-na-yubiley',
      categorySlug: 'anniversary',
      description: 'Сочетание насыщенных цветов для праздника.',
      baseMinPrice: 4500,
      baseMaxPrice: 10900,
      image: 'https://s3.twcstorage.ru/flowers/yarkiy-miks-na-yubiley.jpg',
    },
    {
      name: 'Премиум юбилейная композиция',
      slug: 'premium-yubileynaya-kompoziciya',
      categorySlug: 'anniversary',
      description: 'Статусный букет для важного события.',
      baseMinPrice: 10000,
      baseMaxPrice: 16900,
      image: 'https://s3.twcstorage.ru/flowers/premium-yubileynaya-kompoziciya.jpg',
    },
    {
      name: 'Нежный букет на юбилей',
      slug: 'nezhnyy-buket-na-yubiley',
      categorySlug: 'anniversary',
      description: 'Лёгкая и утончённая праздничная композиция.',
      baseMinPrice: 3000,
      baseMaxPrice: 9500,
      image: 'https://s3.twcstorage.ru/flowers/nezhnyy-buket-na-yubiley.jpg',
    },
    // 🔥 Корзины
    {
      name: 'Корзина с розами',
      slug: 'korzina-s-rozami',
      categorySlug: 'baskets',
      description: 'Элегантная цветочная корзина с классическими розами.',
      baseMinPrice: 3900,
      baseMaxPrice: 12900,
      image: 'https://s3.twcstorage.ru/flowers/korzina-s-rozami.jpg',
    },
    {
      name: 'Корзина с пионами',
      slug: 'korzina-s-pionami',
      categorySlug: 'baskets',
      description: 'Пышная корзина из ароматных пионов.',
      baseMinPrice: 3500,
      baseMaxPrice: 13900,
      image: 'https://s3.twcstorage.ru/flowers/korzina-s-pionami.jpg',
    },
    {
      name: 'Весенняя корзина',
      slug: 'vesennyaya-korzina',
      categorySlug: 'baskets',
      description: 'Яркая композиция из сезонных весенних цветов.',
      baseMinPrice: 3200,
      baseMaxPrice: 11800,
      image: 'https://s3.twcstorage.ru/flowers/vesennyaya-korzina.jpg',
    },
    {
      name: 'Премиум цветочная корзина',
      slug: 'premium-tsvetochnaya-korzina',
      categorySlug: 'baskets',
      description: 'Роскошная корзина с отборными цветами.',
      baseMinPrice: 7000,
      baseMaxPrice: 16900,
      image: 'https://s3.twcstorage.ru/flowers/premium-tsvetochnaya-korzina.jpg',
    },
    {
      name: 'Нежная корзина',
      slug: 'nezhnyaya-korzina',
      categorySlug: 'baskets',
      description: 'Лёгкая композиция в пастельных оттенках.',
      baseMinPrice: 4800,
      baseMaxPrice: 10900,
      image: 'https://s3.twcstorage.ru/flowers/nezhnyaya-korzina.jpg',
    },
    {
      name: 'Большая цветочная корзина',
      slug: 'bolshaya-tsvetochnaya-korzina',
      categorySlug: 'baskets',
      description: 'Объёмная корзина для эффектного подарка.',
      baseMinPrice: 11900,
      baseMaxPrice: 19900,
      image: 'https://s3.twcstorage.ru/flowers/bolshaya-tsvetochnaya-korzina.jpg',
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        baseMinPrice: product.baseMinPrice,
        baseMaxPrice: product.baseMaxPrice,
        image: product.image,

        // 🔥 relation
        categoryId: createdCategories[product.categorySlug],
      },
    });
  }

  console.log('✅ Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });