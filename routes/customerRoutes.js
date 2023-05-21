const router = require("express").Router();

const customerController = require("../controllers/customerController");

//Endpoints
router.route("/customer").post((req, res) => customerController.create(req, res));

router.route("/customers/").get((req, res) => customerController.getAll(req, res));

router.route("/customers/:id").get((req, res) => customerController.get(req, res));

router.route("/customers/:id").delete((req, res) => customerController.delete(req, res));

router.route("/customers/:id").put((req, res) => customerController.update(req, res));


module.exports = router;