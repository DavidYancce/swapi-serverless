import { Starship, StarshipInSpanish } from './startship.dto';

export function translateObject(object: Starship): StarshipInSpanish {
  return {
    MGLT: object.MGLT,
    capacidadCarga: object.cargo_capacity,
    consumibles: object.consumables,
    costoEnCreditos: object.cost_in_credits,
    creado: object.created,
    tripulacion: object.crew,
    editado: object.edited,
    calificacionHyperdrive: object.hyperdrive_rating,
    longitud: object.length,
    fabricante: object.manufacturer,
    velocidadMaximaAtmosferica: object.max_atmosphering_speed,
    modelo: object.model,
    nombre: object.name,
    pasajeros: object.passengers,
    peliculas: object.films,
    pilotos: object.pilots,
    claseNaveEstelar: object.starship_class,
    url: object.url,
  };
}
