import { memo } from 'react'

export const Small = memo(({ counter }) => {
  console.log('me renderize')

  return <small>{counter}</small>
})
