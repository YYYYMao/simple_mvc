controller = require("./controller")
var url = {};
url["/start"] = controller.start;
url["/upload"] = controller.upload;
url["/add"] = controller.add;
url["/list"] = controller.list;
url["/edit"] = controller.edit;
url["/remove"] = controller.remove;
url["/info"] = controller.info;
module.exports = url;