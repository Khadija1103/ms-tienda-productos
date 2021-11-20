import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ProductoOServicio,
  Proveedor,
} from '../models';
import {ProductoOServicioRepository} from '../repositories';

export class ProductoOServicioProveedorController {
  constructor(
    @repository(ProductoOServicioRepository)
    public productoOServicioRepository: ProductoOServicioRepository,
  ) { }

  @get('/producto-o-servicios/{id}/proveedor', {
    responses: {
      '200': {
        description: 'Proveedor belonging to ProductoOServicio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Proveedor)},
          },
        },
      },
    },
  })
  async getProveedor(
    @param.path.string('id') id: typeof ProductoOServicio.prototype.id,
  ): Promise<Proveedor> {
    return this.productoOServicioRepository.idproveedo(id);
  }
}
