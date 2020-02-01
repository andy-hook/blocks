import React, {
  memo,
  MutableRefObject,
  useEffect,
  useCallback,
  useMemo,
} from "react"
import * as S from "./split-text.style"
import gsap from "gsap"

interface Props {
  children: string
  visible: boolean
  animate: boolean
  removeWidow?: boolean
}

type Refs<T> = Array<MutableRefObject<T>>

const SplitText: React.FunctionComponent<Props> = memo(
  ({ children, visible, animate, removeWidow = true }) => {
    const text = children
    const wordArray = text.split(" ")
    const letters = wordArray.join("")
    let refPos = 0

    const refs = letters.split("").map(React.createRef) as Refs<HTMLDivElement>
    const cachedRefs = React.useRef<Refs<HTMLDivElement>>(refs)

    const splitTextNodes = useMemo(() => {
      const words = wordArray.map((word, wordIndex) => {
        const charactersArray = word.split("")

        const renderLetters = charactersArray.map((letter, letterIndex) => {
          const ref = cachedRefs.current[refPos]
          refPos++

          return (
            <S.TitleWord key={letterIndex} ref={ref}>
              {letter}
            </S.TitleWord>
          )
        })

        return (
          <S.TitleWord key={wordIndex}>
            {renderLetters}
            {wordIndex !== wordArray.length - 1 ? " " : ""}
          </S.TitleWord>
        )
      })

      if (removeWidow) {
        const combineLastTwoWords = words.splice(wordArray.length - 2, 2)

        words.push(
          <S.TitleWord key={wordArray.length}>
            {combineLastTwoWords}
          </S.TitleWord>
        )
      }

      return words
    }, [])

    const animateShow = useCallback(() => {
      cachedRefs.current.map((listItem, index) => {
        gsap.fromTo(
          listItem.current,
          {
            opacity: 0,
            y: "0.5em",
          },
          {
            duration: 2,
            ease: "expo.out",
            delay: index * 0.01,
            y: "0em",
            opacity: 1,
            clearProps: "transform",
            overwrite: true,
          }
        )
      })
    }, [])

    const animateHide = useCallback(() => {
      cachedRefs.current.map((listItem, index) => {
        gsap.fromTo(
          listItem.current,
          {
            opacity: 1,
            y: "0em",
          },
          {
            duration: 2,
            ease: "expo.out",
            delay: index * 0.01,
            y: "0.5em",
            opacity: 0,
            clearProps: "transform",
            overwrite: true,
          }
        )
      })
    }, [])

    const show = () => {
      cachedRefs.current.map(listItem => {
        gsap.set(listItem.current, {
          opacity: 1,
        })
      })
    }

    const hide = () => {
      cachedRefs.current.map(listItem => {
        gsap.set(listItem.current, {
          opacity: 0,
        })
      })
    }

    useEffect(() => {
      if (animate) {
        if (visible) {
          animateShow()
        } else {
          animateHide()
        }
      } else {
        if (visible) {
          show()
        } else {
          hide()
        }
      }
    }, [visible])

    return <>{splitTextNodes}</>
  }
)

export default SplitText
