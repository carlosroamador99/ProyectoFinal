import mongoose, { Schema } from 'mongoose'

const restauranteSchema = new Schema({
  nombre: {
    type: String
  },
  calle: {
    type: String
  },
  descripcion: {
    type: String
  },
  localizacion: {
    type: String
  },
  horario: {
    type: String
  },
  cod_postal: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

restauranteSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nombre: this.nombre,
      calle: this.calle,
      descripcion: this.descripcion,
      localizacion: this.localizacion,
      horario: this.horario,
      cod_postal: this.cod_postal,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Restaurante', restauranteSchema)

export const schema = model.schema
export default model
