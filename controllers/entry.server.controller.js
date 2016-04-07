import Entry from '../models/entry.server.model.js';

// create and save an entry from post request data
// this function is then used in a route
const create = function(req, res) {
  var entry = new Entry({
    title: req.body.title,
    description: req.body.description
    // schema takes care of created date
  });

  // try to save the model - use callback to process what happens
  entry.save((err) => {
    if (err) {
      console.log(err);
      res.redirect(400, '/');
    } else {
      console.log("saved entry: " + req.body.title);
      res.redirect(200, '/');
    }
  });
};

export default create;
