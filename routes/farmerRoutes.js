const router = require("express").Router();

const farmerController = require("../controllers/farmerController");

//Endpoints
router.route("/farmer").post((req, res) => farmerController.create(req, res));

router.route("/farmers/").get((req, res) => farmerController.getAll(req, res));

router.route("/farmers/:id").get((req, res) => farmerController.get(req, res));

router.route("/farmers/:id").delete((req, res) => farmerController.delete(req, res));

router.route("/farmers/:id").put((req, res) => farmerController.update(req, res));


module.exports = router;