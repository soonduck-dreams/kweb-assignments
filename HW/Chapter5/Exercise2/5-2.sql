-- 1
SELECT users.id, users.name, tickets.seat_number FROM tickets INNER JOIN users ON tickets.user = users.id INNER JOIN trains ON tickets.train = trains.id WHERE trains.id = 11 ORDER BY tickets.seat_number ASC;
-- 2
SELECT users.id, users.name, Count(*) AS trains_count, 0.1 * Sum(trains.distance) AS total_distance FROM tickets INNER JOIN users ON tickets.user = users.id INNER JOIN trains ON tickets.train = trains.id GROUP BY users.name ORDER BY total_distance DESC LIMIT 6;
-- 3
SELECT trains.id, types.name AS type, srcs.name AS src_stn, dests.name AS dst_stn, Timediff(trains.arrival, trains.departure) AS travel_time FROM trains INNER JOIN types ON trains.type = types.id INNER JOIN stations AS srcs ON trains.source = srcs.id INNER JOIN stations AS dests ON trains.destination = dests.id ORDER BY travel_time DESC LIMIT 6;
-- 4
SELECT types.name AS type, srcs.name AS src_stn, dests.name AS dst_stn, trains.departure, trains.arrival, Round(0.001 * types.fare_rate * trains.distance, -2) AS fare FROM trains INNER JOIN types ON trains.type = types.id INNER JOIN stations AS srcs ON trains.source = srcs.id INNER JOIN stations AS dests ON trains.destination = dests.id ORDER BY trains.departure ASC;
-- 5
SELECT trains.id, types.name AS type, srcs.name AS src_stn, dests.name AS dst_stn, Count(tickets.seat_number) AS occupied, types.max_seats AS maximum FROM tickets INNER JOIN trains ON tickets.train = trains.id INNER JOIN types ON trains.type = types.id INNER JOIN stations AS srcs ON trains.source = srcs.id INNER JOIN stations AS dests ON trains.destination = dests.id GROUP BY trains.id ORDER BY trains.id;
-- 6
SELECT trains.id, types.name AS type, srcs.name AS src_stn, dests.name AS dst_stn, Count(tickets.seat_number) AS occupied, types.max_seats AS maximum FROM tickets RIGHT OUTER JOIN trains ON tickets.train = trains.id INNER JOIN types ON trains.type = types.id INNER JOIN stations AS srcs ON trains.source = srcs.id INNER JOIN stations AS dests ON trains.destination = dests.id GROUP BY trains.id ORDER BY trains.id;