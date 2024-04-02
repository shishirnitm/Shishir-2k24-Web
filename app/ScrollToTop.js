import { useState, useEffect } from 'react'
export const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  
    return (
      <button
        className={`fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 ${
          showButton ? '' : 'hidden'
        }`}
        onClick={scrollToTop}
      >
        Back to Top
      </button>
    )
  }