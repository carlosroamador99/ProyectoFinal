import mongoose, { Schema } from 'mongoose'

const menuSchema = new Schema({
  entrantes: [{
    type: String
  }],
  primr_plato: [{
    type: String
  }],
  seg_plato: [{
    type: String
  }],
  postre: [{
    type: String
  }],
  bebidas: [{
    type: String
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

menuSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      entrantes: this.entrantes,
      primr_plato: this.primr_plato,
      seg_plato: this.seg_plato,
      postre: this.postre,
      bebidas: this.bebidas,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Menu', menuSchema)

export const schema = model.schema
export default model
