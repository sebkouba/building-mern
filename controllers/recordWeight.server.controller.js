import RecordWeight from '../models/recordWeight.server.model';

const create = (req, res) => {
  var weight = new RecordWeight({
    weight: req.body.weight
  });

  weight.save((err) => {
    if (err) {
      console.log(err);
      res.redirect(400, '/');
    } else {
      console.log("saved weight: " + req.body.weight);
      res.redirect(200,'/');
    }
  })
};

export default create;
