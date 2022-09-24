import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { claas } from 'claas'

const Root = claas.custom(AvatarPrimitive.Root)`
  inline-flex item-center justify-center align-middle overflow-hidden 
  select-none
  w-10 h-10 rounded-full

`

const Image = claas.custom(AvatarPrimitive.Image)`
  w-full h-full object-cover rounded-full
`

const Fallback = claas.custom(AvatarPrimitive.Fallback)`
  w-full h-full flex items-center justify-center
  text-white dark:bg-[#3b3b3b]
  text-md font-medium
`

interface AvatarProps extends AvatarPrimitive.AvatarProps {
  src: string
  alt: string
}

export function Avatar(props: AvatarProps) {
  return (
    <Root {...props}>
      <Image src={props.src} alt={props.alt} />
      <Fallback delayMs={600}>{getInitials(props.alt).toUpperCase()}</Fallback>
    </Root>
  )
}

function getInitials(txt: string) {
  const words = txt.split(' ')
  if (words.length === 1) return words[0][0] + words[0][1]
  return words[0][0] + words[1][0]
}
