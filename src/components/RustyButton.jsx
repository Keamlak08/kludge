import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import './RustyButton.css'

const RIVE_SRC = null
const RIVE_STATE_MACHINE = 'ButtonSM'

export default function RustyButton({
  children,
  href,
  onClick,
  variant = 'solid',
  target,
  rel,
  className = '',
}) {
  const { rive, RiveComponent } = useRive(
    RIVE_SRC
      ? {
          src: RIVE_SRC,
          stateMachines: RIVE_STATE_MACHINE,
          autoplay: true,
        }
      : { src: '', stateMachines: '', autoplay: false }
  )
  const hoverInput = useStateMachineInput(rive, RIVE_STATE_MACHINE, 'isHovered')
  const pressInput = useStateMachineInput(rive, RIVE_STATE_MACHINE, 'isPressed')

  function handleMouseEnter() {
    if (hoverInput) hoverInput.value = true
  }
  function handleMouseLeave() {
    if (hoverInput) hoverInput.value = false
    if (pressInput) pressInput.value = false
  }
  function handleMouseDown() {
    if (pressInput) pressInput.value = true
  }
  function handleMouseUp() {
    if (pressInput) pressInput.value = false
  }

  const sharedProps = {
    className: `rusty-btn rusty-btn--${variant} ${RIVE_SRC ? 'has-rive' : ''} ${className}`,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown:  handleMouseDown,
    onMouseUp:    handleMouseUp,
    onClick,
  }

  const inner = (
    <>
      {RIVE_SRC && (
        <span className="rusty-btn__rive" aria-hidden="true">
          <RiveComponent />
        </span>
      )}

      <span className="rusty-btn__label">{children}</span>
    </>
  )

  if (href) {
    return <a href={href} target={target} rel={rel} {...sharedProps}>{inner}</a>
  }
  return <button {...sharedProps}>{inner}</button>
}
