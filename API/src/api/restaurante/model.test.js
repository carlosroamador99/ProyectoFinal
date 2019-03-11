import { Restaurante } from '.'

let restaurante

beforeEach(async () => {
  restaurante = await Restaurante.create({ nombre: 'test', calle: 'test', descripcion: 'test', localizacion: 'test', horario: 'test', cod_postal: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = restaurante.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(restaurante.id)
    expect(view.nombre).toBe(restaurante.nombre)
    expect(view.calle).toBe(restaurante.calle)
    expect(view.descripcion).toBe(restaurante.descripcion)
    expect(view.localizacion).toBe(restaurante.localizacion)
    expect(view.horario).toBe(restaurante.horario)
    expect(view.cod_postal).toBe(restaurante.cod_postal)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = restaurante.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(restaurante.id)
    expect(view.nombre).toBe(restaurante.nombre)
    expect(view.calle).toBe(restaurante.calle)
    expect(view.descripcion).toBe(restaurante.descripcion)
    expect(view.localizacion).toBe(restaurante.localizacion)
    expect(view.horario).toBe(restaurante.horario)
    expect(view.cod_postal).toBe(restaurante.cod_postal)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
