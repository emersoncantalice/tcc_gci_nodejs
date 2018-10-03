'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('exec_1_full.json');
let data = JSON.parse(rawdata);

var sorted = data.sort(function(a, b) {return a.time_since_init - b.time_since_init});

let dataOrder = JSON.stringify(sorted);
fs.writeFileSync('exec_machine_1_all.json', dataOrder);