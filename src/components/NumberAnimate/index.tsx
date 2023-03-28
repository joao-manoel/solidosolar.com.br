import { animated, useSpring } from "react-spring"

interface NumberAnimateProps {
  n: number
}

export const NumberAnimate = ({ n }: NumberAnimateProps) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: {mass: 1, tension: 20, friction: 10}
  })

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}