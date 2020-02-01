import React, { useEffect, memo } from "react"
import gsap from "gsap"
import * as S from "./loader.style"

interface Props {
  visible?: boolean
  onLeaveComplete?: () => void
  onEnterComplete?: () => void
}

type divRef = React.MutableRefObject<HTMLDivElement>
type pathRef = React.MutableRefObject<SVGPathElement>

const Loader: React.FunctionComponent<Props> = memo(
  ({ visible, onLeaveComplete, onEnterComplete }) => {
    const containerRef: divRef = React.useRef() as divRef
    const markRef = React.useRef() as divRef
    const boltRef = React.useRef() as pathRef
    const markTL = gsap.timeline()
    const boltTL = gsap.timeline()

    const markOut = () => {
      markTL.to(markRef.current, {
        duration: 0.7,
        ease: "elastic.in(1, 0.7)",
        transform: "scale(0.1)",
        opacity: 0,
        onComplete: onLeaveComplete,
      })
    }

    const markIn = () => {
      markTL.fromTo(
        markRef.current,
        {
          scale: 0.1,
          rotation: -40,
        },
        {
          duration: 0.7,
          ease: "elastic.in(1, 0.6)",
          scale: 1,
          rotation: 0,
          opacity: 1,
          onComplete: onEnterComplete,
        }
      )
    }

    const boltIn = () => {
      boltTL.fromTo(
        boltRef.current,
        {
          opacity: 0,
          rotation: -30,
          scale: 0.1,
          transformOrigin: "bottom right",
        },
        {
          duration: 0.5,
          ease: "expo.out",
          delay: 0.05,
          rotation: 0,
          scale: 1,
          opacity: 1,
        }
      )
    }

    const animateIn = () => {
      boltIn()
      markIn()
    }

    const animateOut = () => {
      markOut()
    }

    useEffect(() => {
      visible ? animateIn() : animateOut()
    }, [visible])

    return (
      <S.Container ref={containerRef}>
        <S.Mark ref={markRef}>
          <S.MarkSVG viewBox="0 0 85 85">
            <defs>
              <linearGradient
                id="markGradient"
                x1="-35.42%"
                x2="86.43%"
                y1="20.18%"
                y2="73.79%"
              >
                <stop offset="0%" stopColor="#B55DE9" />
                <stop offset="100%" stopColor="#6B21CC" />
              </linearGradient>
            </defs>
            <path
              fill="url(#markGradient)"
              d="M17.52 11h50.26c3.6 0 6.52 2.92 6.52 6.52v50.26c0 3.6-2.92 6.52-6.52 6.52H17.52A6.52 6.52 0 0 1 11 67.78V17.52c0-3.6 2.92-6.52 6.52-6.52z"
              transform="rotate(45 42.65 42.65)"
            />
            <S.BoltPath
              ref={boltRef}
              d="M45.1 39.96l5.04-13.04c.25-.69-.8-1.13-1.39-.58L30.42 44.75c-.48.48-.05 1.12.67 1.04l6.82-.71-5.04 13.08c-.25.68.8 1.13 1.4.57l18.33-18.4c.47-.48.04-1.16-.68-1.08l-6.81.71z"
            />
          </S.MarkSVG>
        </S.Mark>
      </S.Container>
    )
  }
)

export default Loader
