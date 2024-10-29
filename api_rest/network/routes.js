const usuario = require('../components/usuario/interface')

/**
 * @swagger
 * tags:
 *     name: usuario
 *     description: Operaciones relacionadas con usuarios
 * 
 * /

/**
 * @swagger
 * /usuario:
 *   post:
 *     tags:
 *       - Registra Usuario
 *     summary: Inserta un nuevo usuario
 *     description: Crea un nuevo usuario con nombre y apellido. Devuelve el objeto del usuario creado con la fecha de registro.    
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - apellido
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: El nombre del usuario
 *                 example: "Santiago"
 *               apellido:
 *                 type: string
 *                 description: El apellido del usuario
 *                 example: "Parra"
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   description: El nombre del usuario
 *                   example: "Santiago"
 *                 apellido:
 *                   type: string
 *                   description: El apellido del usuario
 *                   example: "Parra"
 *                 fecha_registro:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de Creacion
 *                   example: 2024-10-27T23:17:222
 *                 fecha_actualizacion:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de Creacion
 *                   example: 2024-10-27T23:17:222
 *       400:
 *         description: Error en la creación del usuario
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Obtiene un usuario
 *     responses:
 *       200:
 *         description: Usuario obtenido con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 body:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       nombre:
 *                         type: string
 *                       apellido:
 *                         type: string
 *                       fecha_registro:
 *                         type: string
 *                         format: date-time
 *                       fecha_actualizacion:
 *                         type: string
 *                         format: date-time
 *       400:
 *         description: Error al obtener el usuario
 */
const routes = function( server ) {
    server.use('/usuario', usuario)
}

module.exports = routes