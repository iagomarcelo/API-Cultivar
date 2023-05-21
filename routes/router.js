const router = require("express").Router();

// Customer Router
const customerRouter = require("./customerRoutes");
const productRouter = require("./productRoutes");
const farmerRouter = require("./farmerRoutes");
const soldProductRouter = require("./soldProductRoutes");

router.use("/", customerRouter);
router.use("/", productRouter);
router.use("/", farmerRouter);
router.use("/", soldProductRouter);

module.exports = router;