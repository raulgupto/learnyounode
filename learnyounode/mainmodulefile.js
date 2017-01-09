var fs=require("fs");
var file=process.argv[2];
var extension=process.argv[3];
var exportingmodulefile=require("./exportingmodulefile");
exportingmodulefile.readfilefilterasync(file,extension);