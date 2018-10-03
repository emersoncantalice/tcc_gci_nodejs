'use strict';

const fs = require('fs');

let rawdata1 = fs.readFileSync('exec_1_full.json');
let rawdata2 = fs.readFileSync('exec_2_full.json');
let rawdata3 = fs.readFileSync('exec_3_full.json');
let rawdata4 = fs.readFileSync('exec_4_full.json');
let rawdata5 = fs.readFileSync('exec_5_full.json');

let data1 = JSON.parse(rawdata1);
let data2 = JSON.parse(rawdata2);
let data3 = JSON.parse(rawdata3);
let data4 = JSON.parse(rawdata4);
let data5 = JSON.parse(rawdata5);

var sorted1 = data1.sort(function(a, b) {return a.time_since_init - b.time_since_init});
var sorted2 = data2.sort(function(a, b) {return a.time_since_init - b.time_since_init});
var sorted3 = data3.sort(function(a, b) {return a.time_since_init - b.time_since_init});
var sorted4 = data4.sort(function(a, b) {return a.time_since_init - b.time_since_init});
var sorted5 = data5.sort(function(a, b) {return a.time_since_init - b.time_since_init});

let dataOrder1 = JSON.stringify(sorted1);
let dataOrder2 = JSON.stringify(sorted2);
let dataOrder3 = JSON.stringify(sorted3);
let dataOrder4 = JSON.stringify(sorted4);
let dataOrder5 = JSON.stringify(sorted5);

fs.writeFileSync('exec_machine_1_all_sorted.json', dataOrder1);
fs.writeFileSync('exec_machine_2_all_sorted.json', dataOrder2);
fs.writeFileSync('exec_machine_3_all_sorted.json', dataOrder3);
fs.writeFileSync('exec_machine_4_all_sorted.json', dataOrder4);
fs.writeFileSync('exec_machine_5_all_sorted.json', dataOrder5);