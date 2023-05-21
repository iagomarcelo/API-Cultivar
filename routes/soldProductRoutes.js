const router = require("express").Router();

const soldProductController = require("../controllers/soldProductController");

//Endpoints
router.route("/soldProduct").post((req, res) => soldProductController.create(req, res));

router.route("/soldProducts/").get((req, res) => soldProductController.getAll(req, res));

router.route("/soldProducts/:id").get((req, res) => soldProductController.get(req, res));

router.route("/soldProducts/:id").delete((req, res) => soldProductController.delete(req, res));

router.route("/soldProducts/:id").put((req, res) => soldProductController.update(req, res));


module.exports = router;