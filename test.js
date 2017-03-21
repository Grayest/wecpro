express.Router().get('/wechat', function(req, res) {
    res.send(req.query.echostr);
}
