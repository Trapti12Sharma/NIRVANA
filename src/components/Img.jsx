import { useState } from 'react'

// Image with lazy loading, cover fit and a graceful fallback if the URL fails.
export default function Img({ src, alt, className = '', eager = false, ...rest }) {
  const [failed, setFailed] = useState(false)
  return (
    <img
      src={failed ? '/fallback.svg' : src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
      {...rest}
    />
  )
}
