export const crearPublicaciones = async (datos) => {
    const response = await fetch('/publicacion', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })

    const data = await response.json()
    return data;
}

export const obtenerPublicaciones = async () => {
    // Consulta al servidor por los datos de publicaciones
    const response = await fetch('/publicaciones');
    const publicaciones = await response.json();
    return publicaciones
}
export const actualizarPublicacion = async (id) => {
    fetch()
  
}

export const eliminarPublicacion = async (id) => {
    fetch()
  
}

// FUNCIONES PARA MOSTRAR DATOS
export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
    let registros = '';
    publicaciones.forEach(pub => {
        registros += `
        
            <div class="post-box">
                <img src="${pub.url_imagen}"  alt="" class="post-img">
                <a href="#" class="post-title">${pub.titulo}</a>
                <span class="post-date">${pub.fecha_publicacion}</span>
                <p class="post-description">${pub.detalle}</p>
                <p class="post-firma">${pub.firma_autor}</p>
            </div>
        `
    });

    elemento.innerHTML = registros
}
