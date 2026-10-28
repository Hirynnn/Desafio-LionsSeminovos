import type { Category, Transmission, Vehicle } from '../types/vehicle'

const photo = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const HERO_IMAGE = photo('1580273916550-e323be2ae537', 1920)

export const categoryLabels: Record<Category, string> = { hatch: 'Hatch', sedan: 'Sedan', suv: 'SUV', picape: 'Picape' }
export const transmissionLabels: Record<Transmission, string> = { manual: 'Manual', automatico: 'Automático' }
export const PRICE_STEPS = [70000, 100000, 130000, 160000, 220000]
export const MIN_YEARS = [2019, 2020, 2021, 2022, 2023]

// Dados fictícios, apenas para demonstração.
export const vehicles: Vehicle[] = [
  { id: 'corolla-xei-2021', brand: 'Toyota', model: 'Corolla', version: 'XEi 2.0 Flex', year: 2021, km: 52000, price: 124900, category: 'sedan', transmission: 'automatico', fuel: 'Flex', image: photo('1568605117036-5fe5e7bab0b7'), featured: true, highlights: ['Central multimídia', 'Câmera de ré', 'Ar-condicionado digital', 'Sensores de estacionamento'] },
  { id: 'civic-exl-2019', brand: 'Honda', model: 'Civic', version: 'EXL 2.0 Flex', year: 2019, km: 68000, price: 109900, category: 'sedan', transmission: 'automatico', fuel: 'Flex', image: photo('1494976388531-d1058494cdd8'), highlights: ['Bancos em couro', 'Teto solar', 'Chave presencial', 'Faróis em LED'] },
  { id: 'tcross-highline-2022', brand: 'Volkswagen', model: 'T-Cross', version: 'Highline 1.4 TSI', year: 2022, km: 38000, price: 134900, category: 'suv', transmission: 'automatico', fuel: 'Flex', image: photo('1492144534655-ae79c964c9d7'), featured: true, highlights: ['Painel digital', 'Carregador sem fio', 'Piloto automático', 'Rodas de liga 17"'] },
  { id: 'compass-longitude-2022', brand: 'Jeep', model: 'Compass', version: 'Longitude 1.3 T270', year: 2022, km: 41000, price: 142900, category: 'suv', transmission: 'automatico', fuel: 'Flex', image: photo('1533473359331-0135ef1b58bf'), featured: true, highlights: ['Tela de 10,1"', 'Bancos com ajuste elétrico', 'Câmera de ré', 'Partida por botão'] },
  { id: 'hb20-comfort-2021', brand: 'Hyundai', model: 'HB20', version: 'Comfort 1.0 Flex', year: 2021, km: 47000, price: 62900, category: 'hatch', transmission: 'manual', fuel: 'Flex', image: photo('1552519507-da3b142c6e3d'), highlights: ['Direção elétrica', 'Vidros elétricos', 'Central multimídia', 'Econômico na cidade'] },
  { id: 'onix-ltz-2020', brand: 'Chevrolet', model: 'Onix', version: 'LTZ 1.0 Turbo', year: 2020, km: 59000, price: 69900, category: 'hatch', transmission: 'automatico', fuel: 'Flex', image: photo('1555215695-3004980ad54e'), highlights: ['Motor turbo', 'Wi-Fi nativo', 'Ar-condicionado', 'Câmbio automático'] },
  { id: 'toro-freedom-2022', brand: 'Fiat', model: 'Toro', version: 'Freedom 1.3 T270', year: 2022, km: 36000, price: 139900, category: 'picape', transmission: 'automatico', fuel: 'Flex', image: photo('1583121274602-3e2820c69888'), featured: true, highlights: ['Caçamba com tampa', 'Multimídia 7"', 'Controle de tração', 'Sensor de chuva'] },
  { id: 'hilux-srv-2020', brand: 'Toyota', model: 'Hilux', version: 'SRV 2.8 4x4 Diesel', year: 2020, km: 82000, price: 219900, category: 'picape', transmission: 'automatico', fuel: 'Diesel', image: photo('1619767886558-efdc259cde1a'), highlights: ['Tração 4x4', 'Bancos em couro', 'Controle de estabilidade', 'Câmera de ré'] },
  { id: 'polo-track-2023', brand: 'Volkswagen', model: 'Polo', version: 'Track 1.0 Flex', year: 2023, km: 21000, price: 74900, category: 'hatch', transmission: 'manual', fuel: 'Flex', image: photo('1542362567-b07e54358753'), highlights: ['Baixa quilometragem', 'Ar-condicionado', 'Direção elétrica', 'Multimídia'] },
  { id: 'duster-iconic-2021', brand: 'Renault', model: 'Duster', version: 'Iconic 1.6 Flex', year: 2021, km: 54000, price: 89900, category: 'suv', transmission: 'manual', fuel: 'Flex', image: photo('1503376780353-7e6692767b70'), highlights: ['Altura do solo elevada', 'Multimídia', 'Câmera de ré', 'Rodas de liga'] },
]

export const brands = [...new Set(vehicles.map((v) => v.brand))].sort()
export const modelsByBrand = (brand: string) =>
  [...new Set(vehicles.filter((v) => !brand || v.brand === brand).map((v) => v.model))].sort()
export const getVehicleById = (id: string | undefined) => vehicles.find((v) => v.id === id)
