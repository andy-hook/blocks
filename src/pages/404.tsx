import React, { useEffect } from "react"
import SEO from "@components/seo"
import styled from "styled-components"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"
import Title from "@components/shared/title/title"

const NotFoundPage = () => {
  const { setLoadingStatus } = useLoadingStatusContext()

  useEffect(() => {
    setLoadingStatus(false)
  }, [])

  return (
    <>
      <SEO />
      <Container>
        <h1>
          <Title size="xl" intensity="high">
            404
          </Title>
        </h1>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`

export default NotFoundPage
