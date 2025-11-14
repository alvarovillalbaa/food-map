declare module 'react-simple-maps' {
  import * as React from 'react'

  export interface Geography {
    rsmKey: string
    properties: {
      ISO_A2?: string
      NAME?: string
      [key: string]: any
    }
    [key: string]: any
  }

  export interface ComposableMapProps {
    projectionConfig?: {
      scale?: number
      center?: [number, number]
    }
    className?: string
    children?: React.ReactNode
  }

  export interface GeographiesProps {
    geography: string
    children?: (params: { geographies: Geography[] }) => React.ReactNode
  }

  export interface GeographyProps {
    geography: Geography
    fill?: string
    stroke?: string
    strokeWidth?: number
    style?: {
      default?: React.CSSProperties
      hover?: React.CSSProperties
      pressed?: React.CSSProperties
    }
    className?: string
  }

  export function ComposableMap(props: ComposableMapProps): JSX.Element
  export function Geographies(props: GeographiesProps): JSX.Element
  export function Geography(props: GeographyProps): JSX.Element
}

