const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'right-to-work-answer'
router.post("/1-right-to-work-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var rightToWork = req.session.data['1-right-to-work']

  // Check whether the variable matches a condition
  if (rightToWork == "Yes"){
    // Send user to next page
    res.redirect("/v19/checklist/scenario-1/q2-opt-in-for-support")
  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/scenario-1/exit-page-ineligible")
  }

})



// Run this code when a form is submitted to 'opt-in-for-support-answer'
router.post("/1-opt-in-for-support-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var optIn = req.session.data['1-opt-in-for-support']

  // Check whether the variable matches a condition
  if (optIn == "Yes"){
    // Send user to next page
    res.redirect("/v19/checklist/scenario-1/q3-has-already-got")
  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/scenario-1/q2a-reason-for-decline")
  }

})


// Run this code when a form is submitted to 'reason-for-decline-answer'
router.post("/1-reason-for-decline-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reasonForDecline = req.session.data['1-reason-for-decline-answer']

  // Check whether the variable matches a condition
  if (reasonForDecline == " Lacks confidence in their ability to get a job", " Lacks motivation to get a job"){
    // Send user to next page
    res.redirect("/v19/checklist/scenario-1/q2b-what-needs-to-change")
  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/scenario-1/check-answers-does-not-want-support-2")
  }

})



// Run this code when a form is submitted to 'might-be-impacted-by-answer'
router.post("/1-might-be-impacted-by-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var impact = req.session.data['1-might-be-impacted-by']

  // Check whether the variable matches a condition
  if (impact == " Reliant on drugs or alcohol"){
    // Send user to next page
    res.redirect("/v19/checklist/scenario-1/q4a-management-of-dependency")

 //  // Check whether the variable matches a condition
 // or (impact == " Mental health conditions or diagnoses"){
 //    // Send user to next page
 //    res.redirect("/v19/checklist/scenario-1/q4b-management-of-mental-health")
 //
 //    // Check whether the variable matches a condition
 //    if (impact == " Family issues"){
 //      // Send user to next page
 //      res.redirect("/v19/checklist/scenario-1/q5-work-goals")
 //
 //      // Check whether the variable matches a condition
 //      if (impact == " Family issues"){
 //        // Send user to next page
 //        res.redirect("/v19/checklist/scenario-1/q5-work-goals")

  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/scenario-1/q5-work-goals")
  }

  })

//for scenario-2

// Run this code when a form is submitted to 'right-to-work-answer'
router.post("/2-right-to-work-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var rightToWork = req.session.data['2-right-to-work']

  // Check whether the variable matches a condition
  if (rightToWork == "Yes"){
    // Send user to next page
    res.redirect("/v19/checklist/scenario-2/q2-opt-in-for-support")
  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/scenario-2/exit-page-ineligible")
  }

})



// Run this code when a form is submitted to 'opt-in-for-support-answer'
router.post("/2-opt-in-for-support-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var optIn = req.session.data['2-opt-in-for-support']

  // Check whether the variable matches a condition
  if (optIn == "Yes"){
    // Send user to next page
    res.redirect("/v19/checklist/scenario-2/q3-has-already-got")
  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/scenario-2/q2a-reason-for-decline")
  }

})


// Run this code when a form is submitted to 'reason-for-decline-answer'
router.post("/2-reason-for-decline-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reasonForDecline = req.session.data['2-reason-for-decline-answer']

  // Check whether the variable matches a condition
  if (reasonForDecline == " Lacks confidence in their ability to get a job", " Lacks motivation to get a job"){
    // Send user to next page
    res.redirect("/v19/checklist/scenario-2/q2b-what-needs-to-change")
  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/scenario-2/check-answers-does-not-want-support-2")
  }

})



// Run this code when a form is submitted to 'might-be-impacted-by-answer'
router.post("/2-might-be-impacted-by-answer", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var impact = req.session.data['2-might-be-impacted-by']

  // Check whether the variable matches a condition
  if (impact == " Reliant on drugs or alcohol"){
    // Send user to next page
    res.redirect("/v19/checklist/scenario-2/q4a-management-of-dependency")

 //  // Check whether the variable matches a condition
 // or (impact == " Mental health conditions or diagnoses"){
 //    // Send user to next page
 //    res.redirect("/v19/checklist/scenario-1/q4b-management-of-mental-health")
 //
 //    // Check whether the variable matches a condition
 //    if (impact == " Family issues"){
 //      // Send user to next page
 //      res.redirect("/v19/checklist/scenario-1/q5-work-goals")
 //
 //      // Check whether the variable matches a condition
 //      if (impact == " Family issues"){
 //        // Send user to next page
 //        res.redirect("/v19/checklist/scenario-1/q5-work-goals")

  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/scenario-2/q5-work-goals")
  }

})

// Run this code when a form is submitted to 'reason-for-decline-answer'
router.post("/getReady-list-filter", function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var filter = req.session.data['/getReady-list-filter']

  // Check whether the variable matches a condition
  if (filter == "everyone"){
    // Send user to next page
    res.redirect("/v19/list-support-needed")

  } if (filter == "releases"){
    // Send user to next page
    res.redirect("/v19/list-support-needed-releases")

  } else {
    // Send user to ineligible page
    res.redirect("/v19/checklist/scenario-2/check-answers-does-not-want-support-2")
  }

})


module.exports = router
