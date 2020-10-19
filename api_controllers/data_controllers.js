const data = require('./data.json');
const { home } = require('./home_controller');
module.exports.data = function (req, res) {
    if (parseInt(req.params.value) === 1) {
        return res.status(200).json({
            'data': data[0]
        })
    }
    else if (parseInt(req.params.value) > 1 & parseInt(req.params.value) <= 500) {
        new_data = [];
        for (var i = 0; i <= parseInt(req.params.value); i++) {
            new_data.push(data[i]);
        }
        return res.status(200).json(new_data);
    }
    else if (req.params.value === 'All') {
        return res.status(200).json(data);
    }
    else {
        return res.status(200).json({
            messaage: 'Something error occured with the Api Check the Documention for more details'
        })
    }




}
