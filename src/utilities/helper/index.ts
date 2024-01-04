import { RestauranteApiProps } from '../types'

export function getTagsFromData(restaurante: RestauranteApiProps) {
  const tags = []
  if (restaurante.destacado) tags.push('Destaque da semana')
  tags.push(restaurante.tipo)
  return tags
}
