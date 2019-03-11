import mongoose, { Schema } from 'mongoose'

const imagenRestauranteSchema = new Schema({
  urlRestaurante: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

imagenRestauranteSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      urlRestaurante: this.urlRestaurante,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('ImagenRestaurante', imagenRestauranteSchema)

export const schema = model.schema
export default model
