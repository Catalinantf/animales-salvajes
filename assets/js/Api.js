//Realizar una consulta asíncrona utilizando una función async/await
//Realizar por lo menos una función autoejecutable IIFE

const consulta_api = (() => {
    try {
        const getData = async () => {
            const url = 'http://127.0.0.1:5500/animales.json';
            const animales = await fetch(url);
            const respuesta = await animales.json();
            return respuesta;
        }
        return {
            mostrar: getData()
        }
    } catch (error) {
        alert(error)
    }

})();
export default consulta_api