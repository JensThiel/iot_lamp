const router = require("express").Router();

router
  .get("/", function(req, res) {
            res.render("index", {
              title: "LAMP"
            });
          
        });

module.exports = router;
