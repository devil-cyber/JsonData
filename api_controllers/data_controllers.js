const db = require('../api_controllers/data_controllers');
// const { home } = require('./home_controller');
function home() {
    db.collection('movies').findOne({}, function (err, data) {
        console.log(data)
    });


}
home();
