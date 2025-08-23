export interface Marker {
  id: string
  name: string
  description: string
  tooltip: string
  color: string
  x: number
  y: number
}
export interface MarkerList {
  title: string
  markers: Marker[]
}
