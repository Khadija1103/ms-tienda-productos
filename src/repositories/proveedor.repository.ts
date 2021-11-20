import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Proveedor, ProveedorRelations, ProductoOServicio} from '../models';
import {ProductoOServicioRepository} from './producto-o-servicio.repository';

export class ProveedorRepository extends DefaultCrudRepository<
  Proveedor,
  typeof Proveedor.prototype.id,
  ProveedorRelations
> {

  public readonly productoOServicios: HasManyRepositoryFactory<ProductoOServicio, typeof Proveedor.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ProductoOServicioRepository') protected productoOServicioRepositoryGetter: Getter<ProductoOServicioRepository>,
  ) {
    super(Proveedor, dataSource);
    this.productoOServicios = this.createHasManyRepositoryFactoryFor('productoOServicios', productoOServicioRepositoryGetter,);
    this.registerInclusionResolver('productoOServicios', this.productoOServicios.inclusionResolver);
  }
}
