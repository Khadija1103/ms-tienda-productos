import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Marca} from './marca.model';
import {Categoria} from './categoria.model';
import {Foto} from './foto.model';
import {Proveedor} from './proveedor.model';

@model()
export class ProductoOServicio extends Entity {
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
  precio: number;

  @property({
    type: 'string',
    required: true,
  })
  descuento: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @belongsTo(() => Marca, {name: 'tiene_marca'})
  idmarca: string;

  @belongsTo(() => Categoria, {name: 'tiene_categoria'})
  idcategoria: string;

  @hasMany(() => Foto)
  fotos: Foto[];

  @belongsTo(() => Proveedor, {name: 'idproveedo'})
  idproveedor: string;

  constructor(data?: Partial<ProductoOServicio>) {
    super(data);
  }
}

export interface ProductoOServicioRelations {
  // describe navigational properties here
}

export type ProductoOServicioWithRelations = ProductoOServicio & ProductoOServicioRelations;
