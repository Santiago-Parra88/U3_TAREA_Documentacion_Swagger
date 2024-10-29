const usuario = require('../components/usuario/interface')

/**
 * @swagger
 * tags:
 *     name: usuario
 *     description: Operaciones relacionadas con usuarios
 * 
 */
//Se escpecifica la ruta Agregar Usuario
/**
 * @swagger
 * /usuario:
 *   post:
 *     tags:
 *       - Registra Usuario
 *     summary: Inserta un nuevo usuario
 *     description: Crea un nuevo usuario recibiendo como parametro nombre y apellido. Devuelve el objeto del usuario creado con la fecha de registro.    
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
 *                   example: 2024-10-27T23:17:22Z
 *                 fecha_actualizacion:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de Actualizacion
 *                   example: 2024-10-27T23:17:22Z
 *       400:
 *         description: Error en la creación del usuario
 */
//Se escpecifica la ruta Listar Usuarios
/**
 * @swagger
 * /usuario:
 *   get:
 *     tags:
 *       - Obtiene Usuarios
 *     summary: Obtiene un usuarios
 *     responses:
 *       200:
 *         description: Usuario recuperado con éxito
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
//Se escpecifica la ruta actualizar Usuario
/**
 * @swagger
 * /usuario:
 *   put:
 *     tags:
 *       - Actualiza Usuario
 *     summary: Actualizar un usuario
 *     description: Metodo para Actualiza la información de un usuario existente en la base de datos segun el id.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: ID único del usuario a actualizar.
 *                 example: "6709dd71edfd42118d956628"
 *               nombre:
 *                 type: string
 *                 description: Nombre del usuario.
 *                 example: "Santiago"
 *               apellido:
 *                 type: string
 *                 description: Apellido del usuario.
 *                 example: "Parra"
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   description: Información actualizada del usuario.
 *       400:
 *         description: Error al actualizar el usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 */
//Se escpecifica la ruta eliminar Usuario
/**
 * @swagger
 * /usuario:
 *   delete:
 *     tags:
 *       - Eliminar Usuario
 *     summary: Eliminar un usuario
 *     description: Elimina un usuario existente en la base de datos mediante parametro ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: ID único del usuario a eliminar.
 *                 example: "6709dd61edfd42118d956625"
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   description: Información del usuario eliminado.
 *       400:
 *         description: Error al eliminar el usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   description: Mensaje de error.
 */
const routes = function( server ) {
    server.use('/usuario', usuario)
}

module.exports = routes