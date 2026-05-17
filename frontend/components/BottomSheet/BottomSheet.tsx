'use client';

import { Product } from '@/types/product';
import styles from './BottomSheet.module.css';
import { useEffect } from 'react';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useCreateOrder } from '@/hooks/useCreateOrder';
import { usePathname } from 'next/navigation';
import toast from 'react-hot-toast';

interface Props {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

type FormData = {
  name: string;
  phone: string;
  comment: string;
  address: string;
  deliveryTime: 'asap' | '2h' | '6h' | 'tomorrow';
};

export const BottomSheet = ({
  open,
  onClose,
  product,
}: Props) => {
  const pathname = usePathname();
  const { submit, loading } = useCreateOrder();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      deliveryTime: '2h',
    },
  });

  const deliveryTime = watch('deliveryTime');

  // ================= SUBMIT =================
  const onSubmit = async (data: FormData) => {
    if (!product) return;

    const payload = {
      productId: product.id,
      productName: product.name,
      price: product.baseMinPrice,
      citySlug: pathname.split('/')[1],
      ...data,
    };

    try {
      await submit(payload);

      toast.success('Заявка отправлена');
      reset();
      onClose();
    } catch {
      toast.error('Ошибка отправки');
    }
  };

  // ================= PHONE FORMAT =================
  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, '');

    if (digits.startsWith('8')) {
      digits = '7' + digits.slice(1);
    }

    if (!digits.startsWith('7')) {
      digits = '7' + digits;
    }

    digits = digits.slice(0, 11);

    const parts = [];

    if (digits.length > 1) parts.push('+7');

    const rest = digits.slice(1);

    if (rest.length > 0) parts.push(rest.slice(0, 3));
    if (rest.length > 3) parts.push(rest.slice(3, 6));
    if (rest.length > 6) parts.push(rest.slice(6, 8));
    if (rest.length > 8) parts.push(rest.slice(8, 10));

    return parts.join(' ');
  };

  // ================= BODY LOCK =================
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`${styles.overlay} ${open ? styles.show : ''}`}
        onClick={onClose}
      />

      {/* SHEET */}
      <div className={`${styles.sheet} ${open ? styles.open : ''}`}>
        <div className={styles.handle} />

        <h3>Оформить заказ</h3>

        <p className={styles.hint}>
          Укажите удобный способ связи — мы свяжемся с вами
        </p>

        {/* PRODUCT */}
        {product && (
          <div className={styles.productCard}>
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className={styles.productImage}
              />
            )}

            <div className={styles.productInfo}>
              <div className={styles.productTitle}>
                {product.name}
              </div>

              <div className={styles.productPrice}>
                от {product.baseMinPrice} ₽
              </div>

              <div className={styles.productDesc}>
                {product.description}
              </div>
            </div>
          </div>
        )}

        {/* QUICK ACTIONS */}
        <div className={styles.quickActions}>
          <a href="tel:+79289114969" className={styles.quickBtn}>
            <FiPhone size={16} />
            <span>Позвонить</span>
          </a>

          <a
            href="https://t.me/buket_oriaonline"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickBtn}
          >
            <FiMessageCircle size={16} />
            <span>Написать</span>
          </a>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* DELIVERY */}
          <div className={styles.timeBlock}>
            <span className={styles.label}>Когда доставить?</span>

            <div className={styles.timeOptions}>
              {[
                ['asap', 'Как можно быстрее'],
                ['2h', 'Через 2 часа'],
                ['6h', 'Через 6 часов'],
                ['tomorrow', 'Завтра'],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  className={`${styles.timeBtn} ${
                    deliveryTime === key ? styles.active : ''
                  }`}
                  onClick={() =>
                    setValue('deliveryTime', key as any)
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <span className={styles.label}>Контактные данные</span>

          {/* NAME */}
          <input
            placeholder="Ваше имя"
            {...register('name', { required: true })}
          />
          {errors.name && <p className={styles.error}>Введите имя</p>}

          {/* PHONE */}
          <input
            placeholder="Телефон"
            {...register('phone', {
              required: true,
              onChange: (e) => {
                setValue(
                  'phone',
                  formatPhone(e.target.value)
                );
              },
            })}
          />
          {errors.phone && (
            <p className={styles.error}>Введите телефон</p>
          )}

          {/* COMMENT */}
          <textarea placeholder="Комментарий" {...register('comment')} />

          {/* ADDRESS */}
          <input
            placeholder="Адрес доставки"
            {...register('address')}
          />

          {/* POLICY */}
          <label className={styles.checkbox}> 
            <input type="checkbox" required />
            <span className={styles.checkmark} /> 
            <span className={styles.text}> Я согласен с политикой конфиденциальности </span> 
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </form>
      </div>
    </>
  );
};