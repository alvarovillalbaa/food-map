declare module 'react-simple-maps' {
  import { ReactNode } from 'react'

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
    children?: ReactNode
  }

  export interface GeographiesProps {
    geography: string
    children?: (params: { geographies: Geography[] }) => ReactNode
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

  export const ComposableMap: React.FC<ComposableMapProps>
  export const Geographies: React.FC<GeographiesProps>
  export const Geography: React.FC<GeographyProps>
}

