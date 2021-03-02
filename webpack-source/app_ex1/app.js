import data from "./data.json"
import {a, b} from "./const"
const path = require('path')

$("<h1>Hello webpack</h1>").appendTo("body")
$("<h2>" + a + "</h2>").appendTo("body")
$("<h2>" + b + "</h2>").appendTo("body")
$("<h2>" + data.data + "</h2>").appendTo("body")