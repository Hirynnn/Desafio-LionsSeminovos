export type Category = 'hatch' | 'sedan' | 'suv' | 'picape'
export type Transmission = 'manual' | 'automatico'
export type Fuel = 'Flex' | 'Diesel' | 'Gasolina'

export interface Vehicle {
  id: string
  brand: string
  model: string
  version: string
  year: number
  km: number
  price: number
  category: Category
  transmission: Transmission
  fuel: Fuel
  image: string
  featured?: boolean
  highlights: string[]
}

export type FilterKey = 'brand' | 'model' | 'maxPrice' | 'minYear' | 'category' | 'transmission'
export type Filters = Record<FilterKey, string>
