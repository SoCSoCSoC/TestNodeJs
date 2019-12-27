var exec = require("child_process").exec
var querystring = require("querystring")
var formidable = require("formidable")
var fs = require("fs")

function start(response, postData) {
    console.log("Request handler 'start' was called");

    // function sleep(ms) {
    //     var startTime = new Date().getTime();
    //     while(new Date().getTime() < startTime + ms);
    // }
    // sleep(10000)

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '<input type="file" value="upload">' +
        '</form>' +
        '</body>' +
        '</html>';
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(body);
        response.end();
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called");
    var form = new formidable.IncomingForm()
    console.log("about to parse");
    form.parse(request, function(error, fields, files){
        console.log();
        
    })
    
}

function show(response, postData) {
    console.log("Request handler `show` was called");
    fs.readFile("./tmp/test.png", "binary", function(error, file){
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"})
            response.write(error+'\n')
            response.end()
        }else {
            response.writeHead(200, {"Content-Type": "image/png"})
            response.write(file, "binary")
            response.end()
        }
    })
    
}

exports.start = start
exports.upload = upload
exports.show = show