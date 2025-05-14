import { useState } from "react";
import { noticias } from "../data/noticias";

export const NoticiaAccordion = () => {

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-[70%] mx-auto mt-8 space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">Catálogo de Noticias</h2>
      {noticias.map(noticia => (
        <div
          key={noticia.id}
          className="border border-gray-300 rounded-md shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggle(noticia.id)}
            className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
          >
            <h3 className="text-lg font-semibold">{noticia.titulo}</h3>
            <p className="text-sm text-gray-600">{noticia.descripcion}</p>
          </button>

          {activeId === noticia.id && (
            <div className="px-4 py-3 bg-white border-t border-gray-200 space-y-2">
              {noticia.cuerpo && <p>{noticia.cuerpo}</p>}
              {noticia.fechaPublicacion && <p><strong>Fecha:</strong> {noticia.fechaPublicacion}</p>}
              {noticia.autor && <p><strong>Tema:</strong> {noticia.autor}</p>}
              {noticia.direccion && <p><strong>Dirección:</strong> {noticia.direccion}</p>}
              {noticia.imagenes && noticia.imagenes.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {noticia.imagenes.map((src, index) => (
                    <img key={index} src={src} alt={`Imagen ${index + 1}`} className="w-full h-96 object-cover rounded" />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
