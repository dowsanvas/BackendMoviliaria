const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "MV",
    password: "administrador",
    port: 5432,
});

async function getMantenimientos(req, res) {

    try {
        const client = await pool.connect();
        const result = await client.query('select * from mantenimientos');
        client.release();
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
}

async function getMantenimientoID(req, res) {
    const { vehiculo_id } = req.body;

    try {
        const client = await pool.connect();
        const query = 'SELECT * FROM mantenimientos WHERE vehiculo_id = $1';
        const result = await client.query(query, [vehiculo_id]);
        client.release();

        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
}

async function getIDs(req, res) {

    try {
        const client = await pool.connect();
        const result = await client.query('select id from mantenimientos');
        client.release();
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
}

async function createMantenimiento(req, res) {
    const { vehiculo_id, detalles, tipo, kilometraje, alertas, fecha, comentario } = req.body;
    const query = 'INSERT INTO mantenimientos(vehiculo_id, detalles, tipo, kilometraje, alertas, fecha, comentario) VALUES ($1,$2,$3,$4,$5,$6,$7)';
    const values = [vehiculo_id, detalles, tipo, kilometraje, alertas, fecha, comentario];

    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Se guardo el mantenimiento' });
        } else {
            res.status(400).json({ message: 'No se guardo el mantenimiento' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });

    }
}

async function deleteMantenimiento(req, res) {
    const { id } = req.body;
    const query = 'Delete from mantenimientos where id=$1';
    const values = [id];

    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Se guardo el mantenimiento' });
        } else {
            res.status(400).json({ message: 'No se guardo el mantenimiento' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });

    }
}

async function updateMantenimiento(req, res) {
    const { id } = req.body;
    const query = 'UPDATE mantenimientos SET alertas = \'Realizado\' WHERE id = $1';
    const values = [id];

    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Se guardo el mantenimiento' });
        } else {
            res.status(400).json({ message: 'No se guardo el mantenimiento' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });

    }
}

async function updateMantenimiento1(req, res) {
    const { detalles, tipo, kilometraje, fecha, comentario, id } = req.body;
    const query = 'UPDATE mantenimientos SET detalles=$1, tipo=$2, kilometraje=$3, fecha=$4, comentario=$5 where id=$6';
    const values = [detalles, tipo, kilometraje, fecha, comentario, id];
    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();
        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Se actualizó el mantenimiento' });

        } else {

            res.status(400).json({ message: 'No se actualizó el mantenimiento' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });

    }
}

module.exports = {
    getMantenimientos,
    getMantenimientoID,
    getIDs,
    createMantenimiento,
    deleteMantenimiento,
    updateMantenimiento,
    updateMantenimiento1
};