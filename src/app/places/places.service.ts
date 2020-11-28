import { Injectable } from "@angular/core";
import { Place } from "./place.model";
@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private places: Place[] = [
    {
      id: "1",
      nombre: "Torre Eiffel",
      imagenUrl:
        "https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_9e2cb8a2.jpg",
      comentarios: ["Es un lugar asombroso", "Una experiencia asombrosa"],
    },
    {
      id: "2",
      nombre: "Estatua de la libertad",
      imagenUrl:
        "https://farm7.static.flickr.com/6237/6282121179_b50e6ddbbf_z.jpg",
      comentarios: ["Es un lugar asombroso", "Una experiencia asombrosa"],
    },
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  getPlace(id: string) {
    return {
      ...this.places.find((place) => {
        return place.id === id;
      }),
    };
  }

  addPlace(nombre: string, imagenUrl: string) {
    this.places.push({
      id: this.places.length + 1 + "",
      nombre,
      imagenUrl,
      comentarios: [],
    });
  }
  
  deletePlace(id: string) {
    this.places.filter((place) => {
      return place.id !== id;
    });
  }


}
