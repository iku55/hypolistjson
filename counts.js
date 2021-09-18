exports.counts = {
    year: [0, 3],
    month: [5, 6],
    day: [8, 9],
    hour: [11, 12],
    minute: [14, 15],
    second: [17, 20],
    latitude: [23, 31],
    longitude: [33, 42],
    depth: [44, 47],
    magnitude: [49, 55],
    name: [58, 81]
};
exports.getColumns = (row) => {
    return {
        year: row.substr(this.counts.year[0], this.counts.year[1] - this.counts.year[0] + 1),
        month: row.substr(this.counts.month[0], this.counts.month[1] - this.counts.month[0] + 1),
        day: row.substr(this.counts.day[0], this.counts.day[1] - this.counts.day[0] + 1),
        hour: row.substr(this.counts.hour[0], this.counts.hour[1] - this.counts.hour[0] + 1),
        minute: row.substr(this.counts.minute[0], this.counts.minute[1] - this.counts.minute[0] + 1),
        second: row.substr(this.counts.second[0], this.counts.second[1] - this.counts.second[0] + 1),
        latitude: row.substr(this.counts.latitude[0], this.counts.latitude[1] - this.counts.latitude[0] + 1),
        longitude: row.substr(this.counts.longitude[0], this.counts.longitude[1] - this.counts.longitude[0] + 1),
        depth: row.substr(this.counts.depth[0], this.counts.depth[1] - this.counts.depth[0] + 1),
        magnitude: row.substr(this.counts.magnitude[0], this.counts.magnitude[1] - this.counts.magnitude[0] + 1),
        name: row.substr(this.counts.name[0], this.counts.name[1] - this.counts.name[0] + 1),
    }
}