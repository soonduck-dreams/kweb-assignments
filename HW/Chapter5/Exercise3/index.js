const  { runQuery } = require('./database.js');

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

const getFareById = async id => {
    const sql = 'SELECT users.name, Sum(Round(1e-3 * types.fare_rate * trains.distance, -2)) AS total_fare FROM tickets INNER JOIN users ON tickets.user = users.id INNER JOIN trains ON tickets.train = trains.id INNER JOIN types ON trains.type = types.id WHERE users.id = ? GROUP BY users.id';
    const result = await runQuery(sql, [id]);
    return result[0];
};

const getTrainStatusById = async id => {
    const sql = 'SELECT trains.id, types.max_seats - Count(tickets.seat_number) AS avail_seats FROM tickets RIGHT OUTER JOIN trains ON tickets.train = trains.id INNER JOIN types ON trains.type = types.id INNER JOIN stations AS srcs ON trains.source = srcs.id INNER JOIN stations AS dests ON trains.destination = dests.id WHERE trains.id = ? GROUP BY trains.id ORDER BY trains.id;'
    const result = await runQuery(sql, [id]);
    return result[0];
}

app.get('/fare', async (req, res) => {
    const uid = parseInt(req.query.uid);
    try {
        const result = await getFareById(uid);
        res.status(200).send(`${result.name}님의 총 요금은 ${result.total_fare}원입니다.`);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

app.get('/train/status', async (req, res) => {
    const tid = parseInt(req.query.tid);
    try {
        const result = await getTrainStatusById(tid);
        const statusMessage = result.avail_seats > 0 ? `${result.id}번 열차는 매진되지 않았습니다.` : `${result.id}번 열차는 매진되었습니다..`;
        res.status(200).send(statusMessage);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});