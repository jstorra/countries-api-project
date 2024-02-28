export const getData = async () => {
    try {
        const api = 'https://restcountries.com/v3.1/all';
        let data = await (await fetch(api)).json();

        if (!Array.isArray(data)) {
            throw new Error('La respuesta de la API no es un arreglo.');
        }
        return {data, api};
    } catch (error) {
        console.error('Ocurrió un error al obtener los países:', error);
    }
}