import mongoose, { Schema } from 'mongoose'

const comentarioSchema = new Schema({
  valoracion: {
    type: String
  },
  comentario: {
    type: String
  },
  usuario: {
    type: Schema.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

comentarioSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      valoracion: this.valoracion,
      comentario: this.comentario,
      usuario: this.usuario,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Comentario', comentarioSchema)

export const schema = model.schema
export default model
