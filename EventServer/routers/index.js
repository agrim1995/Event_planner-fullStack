const express = require('express')

const managerRouter = require('./ManagerRouter')
const eventRouter = require('./EventsRouter')
const stateRouter = require('./StateRouter')
const cityRouter = require("./CityRouter")
const locationROuter = require("./LocationRouter")
const serviceRouter = require("./ServiceRouter")
const budgetRouter = require("./BudgetRouter")
const enquiryRouter = require("./EnquiryRouter")
const bookingRouter = require("./BookingRouter")
const locationEventRouter = require("./locationEventsRouter")


const router = express.Router()

router.use("/manager", managerRouter)
router.use("/event", eventRouter)

router.use("/state", stateRouter)
router.use("/city", cityRouter)
router.use("/location", locationROuter)
router.use("/servicemaster", serviceRouter)
router.use("/budget", budgetRouter)
router.use("/enquiry", enquiryRouter)
router.use("/booking", bookingRouter)
router.use("/locationEvent", locationEventRouter)







// router.use("/comment",commentRouter)



module.exports = router