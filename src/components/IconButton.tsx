import { Icon } from '@screentime/cheddar-ds'
import type { IconName } from '@screentime/cheddar-ds'
import type { ButtonHTMLAttributes } from 'react'

type IconButtonProps = {
  icon: IconName
  label: string
  tone?: 'purple' | 'magenta' | 'lavender'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function IconButton({
  icon,
  label,
  tone = 'purple',
  className = '',
  type = 'button',
  ...buttonProps
}: IconButtonProps) {
  return (
    <button
      {...buttonProps}
      className={`local-icon-button local-icon-button--${tone} ${className}`.trim()}
      type={type}
      aria-label={label}
    >
      <Icon
        className={`local-icon-button__icon ${icon.startsWith('arrow-') ? 'local-icon-button__icon--arrow' : ''}`}
        name={icon}
        aria-hidden
      />
    </button>
  )
}
