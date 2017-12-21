function jsonRead(code) {
//code uses this format: {name: name, params: [param1,param2]}
var paramlist = code.params;
//parameters in block definition will use parameter items from the array paramlist
runBlock(code.name);
}
