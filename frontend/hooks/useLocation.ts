"use client"

import { useEffect, useState } from "react"

interface Location {
  city: string | null
  loading: boolean
  error: string | null
}

export function useLocation(): Location {
  const [location, setLocation] = useState<Location>({
    city: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    // Попытка получить город через IP геолокацию
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()
        setLocation({
          city: data.city || "Москва",
          loading: false,
          error: null,
        })
      } catch (err) {
        // Если нет интернета или ошибка, используем Москву по умолчанию
        setLocation({
          city: "Москва",
          loading: false,
          error: null,
        })
      }
    }

    fetchLocation()
  }, [])

  return location
}
