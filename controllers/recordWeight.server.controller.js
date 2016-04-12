import RecordWeight from '../models/recordWeight.server.model';

const create = (req, res) => {
  var weight = new RecordWeight({
    weight: req.body.weight,
    date: req.body.date
  });

  weight.save((err) => {
    if (err) {
      console.log(err);
      res.redirect(400, '/');
    } else {
      console.log("saved weight: " + req.body.weight);
      console.log("date: " + req.body.date);
      res.redirect(200,'/');
    }
  })
};

export default create;
