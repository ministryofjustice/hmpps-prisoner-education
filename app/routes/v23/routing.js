
var version = "/v23/";
var checklist = "checklist/";
var profile = "profile/";


module.exports = function(router) {

  // SETUP
  router.post(version + 'setup', function (req, res) {
      res.redirect(version + 'dps-home')
  })

  // LIST PAGE
  router.post(version + 'list-all', function (req, res) {
    if ((req.session.data['search'] == "hall") || (req.session.data['search'] == "Hall"))
    {
      res.redirect(version + 'list-all-search')
    }
    else
    {
      res.redirect(version + 'list-all-no-results')
    }
  })

  // LIST PAGE - NO RESULTS
  router.post(version + 'list-all-no-results', function (req, res) {
    if ((req.session.data['search'] == "hall") || (req.session.data['search'] == "Hall"))
    {
      res.redirect(version + 'list-all-search')
    }
    else
    {
      res.redirect(version + 'list-all-no-results')
    }
  })

  // LIST PAGE - SEARCH RESULTS
  router.post(version + 'list-all-search', function (req, res) {
    if ((req.session.data['search'] == "hall") || (req.session.data['search'] == "Hall"))
    {
      res.redirect(version + 'list-all-search')
    }
    else
    {
      res.redirect(version + 'list-all-no-results')
    }
  })



  // RIGHT TO WORK
  router.post(version + checklist + 'q1-right-to-work', function (req, res) {
    if (req.session.data['right-to-work'] == "Yes")
    {
      res.redirect(version + checklist + 'q2-opt-in-for-support')
    }
    else
    {
      res.redirect(version + checklist + 'exit-page-ineligible')
    }
  })

  // OPT IN FOR SUPPORT
  router.post(version + checklist + 'q2-opt-in-for-support', function (req, res) {
    if (req.session.data['opt-in-for-support'] == "Yes")
    {
      res.redirect(version + checklist + 'q3-has-already-got')
    }
    else
    {
      res.redirect(version + checklist + 'q2a-reason-for-decline')
    }
  })

  // REASON FOR DECLINE
  //// this dynamic bit doesn't work atm /////
  router.post(version + checklist + 'q2a-reason-for-decline', function (req, res) {
    if (req.session.data['reason-for-decline'] == "Lacks confidence in their ability to get a job", "Lacks motivation to get a job"){
      res.redirect(version + checklist + 'q2b-what-needs-to-change')
    }
    else
    {
      res.redirect(version + checklist + 'check-answers-does-not-want-support')
    }
  })

  // HAS ALREADY GOT
  router.post(version + checklist + 'q2b-what-needs-to-change', function (req, res) {
      res.redirect(version + checklist + 'check-answers-does-not-want-support')
  })


  // HAS ALREADY GOT
  router.post(version + checklist + 'q3-has-already-got', function (req, res) {
      res.redirect(version + checklist + 'q4-might-be-impacted-by')
  })

  // MIGHT BE IMPACTED BY
  //// needs making dynamic for follow up q's /////
  router.post(version + checklist + 'q4-might-be-impacted-by', function (req, res) {
      res.redirect(version + checklist + 'q4a-caring-responsibilities')
  })

  // CARING RESPONSIBILITIES
  //// needs making dynamic for follow up q's /////
  router.post(version + checklist + 'q4a-caring-responsibilities', function (req, res) {
      res.redirect(version + checklist + 'q4b-mental-health')
  })

  // MENTAL HEALTH
  //// needs making dynamic for follow up q's /////
  router.post(version + checklist + 'q4b-mental-health', function (req, res) {
      res.redirect(version + checklist + 'q4c-dependency')
  })

  // DEPENDENCY
  //// needs making dynamic for follow up q's /////
  router.post(version + checklist + 'q4c-dependency', function (req, res) {
      res.redirect(version + checklist + 'q5-job-sectors')
  })

  // JOB SECTORS
  router.post(version + checklist + 'q5-job-sectors', function (req, res) {
      res.redirect(version + checklist + 'q6-job-role')
  })

  // JOB ROLE
  router.post(version + checklist + 'q6-job-role', function (req, res) {
      res.redirect(version + checklist + 'q7-work-experience')
  })

  // WORK EXPERIENCE
  router.post(version + checklist + 'q7-work-experience', function (req, res) {
      res.redirect(version + checklist + 'q8-qualifications')
  })

  // WORK-RELATED QUALIFICATIONS
  router.post(version + checklist + 'q8-qualifications', function (req, res) {
      res.redirect(version + checklist + 'check-answers')
  })


  // CHECK-ANSWERS
  router.post(version + checklist + 'check-answers', function (req, res) {
      res.redirect(version + profile + 'support-needed/case-work-readiness')
  })


//////////////           PROFILE         /////////////////////////


// TO DO LIST TASK - NOT STARTED
router.post(version + 'todo-not-started', function (req, res) {
    res.redirect(version + profile + 'support-needed/case-work-readiness')
})

// TO DO LIST TASK - IN PROGRESS
router.post(version + 'todo-in-progress', function (req, res) {
    res.redirect(version + profile + 'support-needed/case-work-readiness')
})

// TO DO LIST TASK - IN PROGRESS, ADD NOTES
router.post(version + 'todo-in-progress-add-note', function (req, res) {
    res.redirect(version + profile + 'support-needed/case-work-readiness')
})

// TO DO LIST TASK - COMPLETE, BLANK
router.post(version + 'todo-complete-blank', function (req, res) {
    res.redirect(version + profile + 'support-needed/case-work-readiness')
})

// CHANGE STATUS
router.post(version + 'confirm-change-status', function (req, res) {
    if ((req.session.data['prisoner-name'] == "RD") && (req.session.data['status'] == "No right to work"))
    {
      res.redirect(version + profile + 'no-right-to-work/roberts-daniels')
    }
    else if ((req.session.data['prisoner-name'] == "RD") && (req.session.data['status'] == "Does not want support"))
    {
      res.redirect(version + checklist + 'q2a-reason-for-decline')
    }
    else if ((req.session.data['prisoner-name'] == "LB") && (req.session.data['status'] == "No right to work"))
    {
      res.redirect(version + profile + 'does-not-want-support/lee-baron')
    }
    else if ((req.session.data['prisoner-name'] == "LB") && (req.session.data['status'] == "Does not want support"))
    {
      res.redirect(version + profile + 'does-not-want-support/lee-baron')
    }
    else if ((req.session.data['prisoner-name'] == "LB") || (req.session.data['prisoner-name'] == "RD"))
    {
      res.redirect(version + 'complete-checklist-haltpage')
    }
    else
    {
      res.redirect(version + profile + 'support-needed/case-work-readiness')
    }
})

// COMPLETE CHECKLIST HALTPAGE
router.post(version + 'complete-checklist-haltpage', function (req, res) {
    res.redirect(version + checklist + 'q3-has-already-got')
})

// NO RIGHT TO WORK PROFILE
router.post(version + profile + 'no-right-to-work/robert-daniels', function (req, res) {
  res.redirect(version + 'confirm-change-status')
})



module.exports = router




}
