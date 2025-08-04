'use client'

import { Bubble } from '@typebot.io/react'

export default function TypebotWidget() {
  return (
    <Bubble
      typebot="obscuro-bt02l8z"
      apiHost="https://typebot.io"
      theme={{
        button: {
          backgroundColor: '#000000',
          customIconSrc:
            'https://s3.typebot.io/public/workspaces/cl364ny8u326798gcp5e0irt89/typebots/uif5hm47zgema88wubt02l8z/bubble-icon?v=1754271922934',
          size: 'medium',
        },
      }}
    />
  )
}
