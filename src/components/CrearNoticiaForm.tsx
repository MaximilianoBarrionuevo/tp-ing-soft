export const CrearNoticiaForm = () => {
    return (
        <div className="w-[30%] mx-auto mt-8">
                <form className="grid justify-center space-y-4 transition-all duration-300">
                    <div className="w-full flex justify-between gap-x-5">
                        <div className="w-full">
                            <label htmlFor="titulo" className="block font-semibold text-gray-700">Título</label>
                            <input
                                type="text"
                                id="titulo"
                                name="titulo"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Ingrese el título"
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="tema" className="block font-semibold text-gray-700">Tema</label>
                            <input
                                type="text"
                                id="tema"
                                name="tema"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Ingrese el tema"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="descripcion" className="block font-semibold text-gray-700">Descripción</label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Ingrese la descripción"
                            rows={2}
                        />
                    </div>

                    <div>
                        <label htmlFor="cuerpo" className="block font-semibold text-gray-700">Cuerpo</label>
                        <textarea
                            id="cuerpo"
                            name="cuerpo"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Ingrese el cuerpo"
                            rows={4}
                        />
                    </div>

                    <div className="w-full flex gap-x-5">
                        <div className="w-full">
                            <label htmlFor="imagenes" className="block font-semibold text-gray-700">Imágenes</label>
                            <input
                                type="file"
                                id="imagenes"
                                name="imagenes"
                                accept="image/*"
                                multiple
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="direccion" className="block font-semibold text-gray-700">Dirección</label>
                            <input
                                type="text"
                                id="direccion"
                                name="direccion"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Ej: Avenida Siempreviva 123"
                            />
                        </div>

                        <div className="flex justify-center items-end w-96 ">
                            <button
                                type="submit"
                                className="px-6 py-[10px] bg-green-600 text-sm text-white rounded-md hover:bg-green-700 cursor-pointer"
                            >
                                Crear Noticia
                            </button>
                        </div>
                    </div>

                </form>
        </div>
    );
};
