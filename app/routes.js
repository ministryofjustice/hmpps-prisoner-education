const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'right-to-work-answer'
router.post("/right-to-work-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var rightToWork = req.session.data['right-to-work']

  // Check whether the variable matches a condition
  if (rightToWork == "yes"){
    // Send user to next page
    res.redirect("/v19/checklist/q2-opt-in-for-support")
  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/exit-page-ineligible")
  }

})



// Run this code when a form is submitted to 'opt-in-for-support-answer'
router.post("/opt-in-for-support-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var optIn = req.session.data['opt-in-for-support']

  // Check whether the variable matches a condition
  if (optIn == "yes"){
    // Send user to next page
    res.redirect("/v19/checklist/q3-has-already-got")
  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/q2a-reason-for-decline")
  }

})


// Run this code when a form is submitted to 'reason-for-decline-answer'
router.post("/reason-for-decline-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reasonForDecline = req.session.data['reason-for-decline-answer']

  // Check whether the variable matches a condition
  if (reasonForDecline == "confidence","motivation"){
    // Send user to next page
    res.redirect("/v19/checklist/q2b-what-needs-to-change")
  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/exit-page-does-not-want-support")
  }

})



// Run this code when a form is submitted to 'might-be-impacted-by-answer'
router.post("/might-be-impacted-by-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var impact = req.session.data['might-be-impacted-by']

  // Check whether the variable matches a condition
  if (impact == "drugs-or-alcohol"){
    // Send user to next page
    res.redirect("/v19/checklist/q4a-management-of-dependency")
  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/q5-work-goals")
  }

})


module.exports = router
