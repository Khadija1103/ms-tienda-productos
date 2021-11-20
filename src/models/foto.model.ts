import {Entity, model, property, belongsTo} from '@loopback/repository';
import {ProductoOServicio} from './producto-o-servicio.model';

@model()
export class Foto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @belongsTo(() => ProductoOServicio, {name: 'produvtoservicio'})
  idproductooservicio: string;

  @property({
    type: 'string',
  })
  productoOServicioId?: string;

  constructor(data?: Partial<Foto>) {
    super(data);
  }
}

export interface FotoRelations {
  // describe navigational properties here
}

export type FotoWithRelations = Foto & FotoRelations;
