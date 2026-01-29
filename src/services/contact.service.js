/**
 * Simula el envío de un mensaje de contacto
 * @param {Object} data - Datos del mensaje { name, email, subject, message }
 * @returns {Promise<boolean>}
 */
export const sendMessage = async (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Mensaje enviado:", data);
            resolve(true);
        }, 1500); // 1.5 segundos de espera
    });
};
