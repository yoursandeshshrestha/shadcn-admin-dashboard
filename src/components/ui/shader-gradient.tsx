'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export function AuthShaderGradient() {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}
    >
      <ShaderGradient
        type='plane'
        cAzimuthAngle={180}
        cPolarAngle={90}
        cDistance={10}
        cameraZoom={1}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={0}
        rotationZ={0}
        animate='on'
        loop='on'
        loopDuration={8}
        grain='on'
        shader='defaults'
        color1='#ff5005'
        color2='#dbba95'
        color3='#d0bce1'
        uSpeed={0.3}
        uStrength={4}
        uDensity={1.5}
        uFrequency={5.5}
        uAmplitude={0}
        uTime={0}
        reflection={0.1}
        lightType='3d'
        brightness={1.3}
        envPreset='city'
      />
    </ShaderGradientCanvas>
  )
}
