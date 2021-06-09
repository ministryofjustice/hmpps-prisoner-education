module "hmpps-prisoner-education" {
  source     = "./modules/repository-collaborators"
  repository = "hmpps-prisoner-education"

  collaborators = [
      {
        github_user  = "simcast"
        permission   = "write"
        name         = "Simon Castillo"
        email        = "simon.castillo@digital.justice.gov.uk"
        org          = "HMPPS Digital"
        reason       = "Simon is another designer in HMPPS digital who is temporarily helping the team prototype designs for usability testing"
        added_by     = "Eve Bayram <eve.bayram@digital.justice.gov.uk>"
        review_after = "2021-07-31"
      },
    ]
