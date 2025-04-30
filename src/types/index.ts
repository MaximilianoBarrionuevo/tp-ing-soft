
export interface Noticia {
    id: number;
    titulo: string;
    descripcion: string;
    cuerpo: string;
    fechaPublicacion: string;
    tema: string;
    direccion?: string;
    imagenes?: string[];
  }