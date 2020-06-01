import React from 'react'
import { css } from '@emotion/core'
import MoonLoader from 'react-spinners/MoonLoader'

function Loading() {
  const styles = css`
    margin: 50px auto;
    display: block;
  `
  return (
    <div>
      <MoonLoader
        css={styles}
        size={50}
      />
    </div>
  )
}

export default Loading;