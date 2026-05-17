import styles from '../../privacy/Privacy.module.css';
import { prisma } from '@/lib/prisma';

import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = await prisma.city.findUnique({
    where: { slug: params.city },
  });

  const cityName = city?.name || 'России';

  return {
    title:
      `Политика конфиденциальности — доставка цветов ${cityName} | Букетория`,

    description:
      `Политика обработки персональных данных сервиса доставки цветов в ${cityName}. Защита данных, 152-ФЗ, безопасность заказов.`,

    alternates: {
      canonical: `/${params.city}/privacy`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PrivacyPage() {
  return (
    <>
      {/* 🔥 STRUCTURED DATA (TRUST BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',

            '@type': 'WebPage',

            name: 'Политика конфиденциальности',

            publisher: {
              '@type': 'Organization',
              name: 'Букетория',
            },

            description:
              'Политика обработки персональных данных сервиса доставки цветов',
          }),
        }}
      />

      <main className={styles.page}>
        <h1 className={styles.title}>
          Политика конфиденциальности сервиса доставки цветов
        </h1>

        <p className={styles.updated}>
          Дата последнего обновления: {new Date().toLocaleDateString()}
        </p>

        {/* 1 */}
        <section className={styles.section}>
          <h2>1. Общие положения</h2>
          <p>
            Настоящая политика обработки персональных данных составлена в
            соответствии с требованиями Федерального закона РФ №152-ФЗ
            «О персональных данных» и определяет порядок обработки и меры
            по обеспечению безопасности персональных данных.
          </p>
        </section>

        {/* 2 */}
        <section className={styles.section}>
          <h2>2. Оператор персональных данных</h2>
          <p>
            Оператором персональных данных является Дейнега Даниил Александрович,
            зарегистрированный в качестве плательщика налога на профессиональный доход (самозанятый).
          </p>
          <p>
            Контактный телефон: +7 (937) 252-22-42
          </p>
        </section>

        {/* 3 */}
        <section className={styles.section}>
          <h2>3. Персональные данные</h2>
          <ul>
            <li>Имя пользователя</li>
            <li>Номер телефона</li>
            <li>Комментарий к заказу</li>
            <li>Иная информация, предоставленная пользователем</li>
          </ul>
        </section>

        {/* 4 */}
        <section className={styles.section}>
          <h2>4. Цели обработки данных</h2>
          <ul>
            <li>Обработка заказов</li>
            <li>Связь с клиентом</li>
            <li>Организация доставки цветов</li>
            <li>Улучшение качества сервиса</li>
          </ul>
        </section>

        {/* 5 */}
        <section className={styles.section}>
          <h2>5. Правовые основания</h2>
          <p>
            Обработка персональных данных осуществляется на основании
            согласия пользователя при оформлении заказа на сайте.
          </p>
        </section>

        {/* 6 */}
        <section className={styles.section}>
          <h2>6. Условия хранения данных</h2>
          <p>
            Обработка персональных данных осуществляется с соблюдением
            принципов законности, минимизации и ограничения целей.
          </p>
        </section>

        {/* 7 */}
        <section className={styles.section}>
          <h2>7. Передача данных</h2>
          <p>
            Персональные данные могут передаваться партнёрам (флористам
            и службам доставки) только для выполнения заказа.
          </p>
        </section>

        {/* 8 */}
        <section className={styles.section}>
          <h2>8. Права пользователя</h2>
          <ul>
            <li>Получать информацию о своих данных</li>
            <li>Требовать исправления или удаления данных</li>
            <li>Отозвать согласие на обработку</li>
          </ul>
        </section>

        {/* 9 */}
        <section className={styles.section}>
          <h2>9. Защита данных</h2>
          <p>
            Оператор принимает технические и организационные меры
            для защиты персональных данных от утечки и неправомерного доступа.
          </p>
        </section>

        {/* 10 */}
        <section className={styles.section}>
          <h2>10. Заключительные положения</h2>
          <p>
            Используя сайт, пользователь подтверждает согласие с данной
            политикой конфиденциальности.
          </p>
        </section>
      </main>
    </>
  );
}