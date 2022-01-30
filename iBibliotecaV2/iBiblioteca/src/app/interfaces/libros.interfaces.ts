import { Libro } from "./libro.interfaces";

export interface Libros {
    numFound:      number;
    start:         number;
    numFoundExact: boolean;
    docs:          Array<Libro>;
    num_found:     number;
    q:             string;
    offset:        null;
  }