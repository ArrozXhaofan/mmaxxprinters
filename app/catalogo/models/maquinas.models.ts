export interface Maquina {
  id: number;
  modelo: string;
  imagen: string;
  categoria: string;
}


export interface Maquina2 {
  ID: number;
  MODELO: string;
  CATEGORIA: string;
  DESCRIPCION: string;
  IMAGEN: string;
  VELOCIDAD: VELOCIDAD[];
  MARCA: string;
  CANTIDAD_CABEZAL: string;
  AREA_IMPRESION: string;
  GARANTIA_MAQUINA: string;
  GARANTIA_CABEZAL: string;
  SUPERFICIE: SUPERFICIE[];
}

export interface SUPERFICIE {
  imagen: string;
  material: string;
  descripcion: string;
}

interface VELOCIDAD {
  pass: string;
  Velocidad: string;
}