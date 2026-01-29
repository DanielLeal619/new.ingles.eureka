/**
 * Simula una llamada a una API de autenticación
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<Object>} Datos del usuario simulado
 */
export const loginUser = async (email, password) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Estudiante Eureka",
                email: email,
                role: "student",
                token: "mock-jwt-token-12345"
            });
        }, 2000); // 2 segundos de espera simulada
    });
};

/**
 * Simula el registro de un nuevo usuario
 * @param {Object} userData 
 * @returns {Promise<Object>} Datos del usuario registrado
 */
export const registerUser = async (userData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: Math.floor(Math.random() * 1000) + 1,
                name: `${userData.firstName} ${userData.lastName}`,
                email: userData.email,
                role: "student",
                token: `mock-jwt-token-${Date.now()}`
            });
        }, 2000);
    });
};
