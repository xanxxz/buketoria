export const deliveryTimeMap = {
  asap: {
    label: 'Как можно быстрее',
    icon: '⚡',
    color: '#ef4444',
  },
  '2h': {
    label: 'Через 2 часа',
    icon: '⏱️',
    color: '#f59e0b',
  },
  '6h': {
    label: 'Через 6 часов',
    icon: '🕒',
    color: '#3b82f6',
  },
  tomorrow: {
    label: 'Завтра',
    icon: '📅',
    color: '#10b981',
  },
} as const;