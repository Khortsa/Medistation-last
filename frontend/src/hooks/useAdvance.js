import { useState } from 'react'


export const useSubscription = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
 

  const subscription = async (nom, prenom) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/courses/advance', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ nom, prenom })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
        
      // update loading state
      setIsLoading(false)
    }
  }

  return { subscription, isLoading, error }
}