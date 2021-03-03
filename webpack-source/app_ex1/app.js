import data from "./data.json"
import {a, b} from "./const"
import path from "path"
import Web3 from "web3"

$("<h1>Hello webpack</h1>").appendTo("body")
$("<h2>" + a + "</h2>").appendTo("body")
$("<h2>" + b + "</h2>").appendTo("body")
$("<h2>" + data.data + "</h2>").appendTo("body")