var PORT = 60000;

var http = require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');

types = {
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "audio/x-wav",
  "wma": "audio/x-ms-wma",
  "wmv": "video/x-ms-wmv",
  "xml": "text/xml"
};

var server = http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});  
	response.write('{"data":{"navs":[{"id":0,"type":"热销榜","url":"","unique":"1"},{"id":1,"type":"特惠套餐","url":""},{"id":2,"type":"现烤披萨","url":""},{"id":3,"type":"配料区","url":""}],"foods":[{"id":0,"typeid":2,"name":"乐滋烤肠披萨","price":10,"sales":17,"imgUrl":"/images/item-1.jpg","quantity":0},{"id":1,"typeid":2,"name":"墨西哥肌肉披萨","price":20,"sales":50,"imgUrl":"/images/item-2.jpg","quantity":0},{"id":2,"typeid":2,"name":"海鲜芝士披萨","price":30,"sales":50,"imgUrl":"/images/item-3.jpg","quantity":0},{"id":3,"typeid":0,"name":"热销榜1","price":12,"sales":58,"imgUrl":"http://img.ycwb.com/life/attachement/jpg/site2/20140213/00219740822d1466c1311c.jpg","quantity":0},{"id":4,"typeid":0,"name":"热销榜2","price":67,"sales":54,"imgUrl":"/images/item-4.jpg","quantity":0},{"id":5,"typeid":0,"name":"热销榜3","price":45,"sales":12,"imgUrl":"/images/item-4.jpg","quantity":0},{"id":6,"typeid":1,"name":"特惠套餐1","price":45,"sales":12,"imgUrl":"/images/item-5.jpg","quantity":0},{"id":7,"typeid":1,"name":"特惠套餐2","price":45,"sales":12,"imgUrl":"/images/item-5.jpg","quantity":0},{"id":8,"typeid":1,"name":"特惠套餐3","price":45,"sales":12,"imgUrl":"/images/item-5.jpg","quantity":0},{"id":9,"typeid":3,"name":"配料区1","price":2,"sales":12,"imgUrl":"/images/item-6.jpg","quantity":0},{"id":10,"typeid":3,"name":"配料区1","price":2,"sales":12,"imgUrl":"/images/item-6.jpg","quantity":0},{"id":11,"typeid":3,"name":"配料区1","price":2,"sales":12,"imgUrl":"/images/item-6.jpg","quantity":0}],"totalPrice":0,"currentTypeId":2}}');
            response.end();
            
            return;
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");