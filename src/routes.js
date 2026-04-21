import Admin from "./pages/admin/Admin"
import Auth from "./pages/auth/Auth"
import Case from "./pages/cases/Case"
import Cases from "./pages/cases/Cases"
import Company from "./pages/company/Company"
import Docs from "./pages/docs/Docs"
import Landing from "./pages/landing/Landing"
import Notify from "./pages/notify/Notify"
import Portfolio from "./pages/portfolio/Portfolio"
import Profile from "./pages/profile/Profile"
import Solution from "./pages/solution/Solution"
import { ADMIN_ROUTE, AUTH_ROUTE, CASE_ROUTE, CASES_ROUTE, COMPANY_ROUTE, DOCS_ROUTE, LANDING_ROUTE, NOTIFY_ROUTE, PORTFOLIO_ROUTE, PROFILE_ROUTE, SOLUTION_ROUTE } from "./utils/consts"

export const authRoutes = [
    { path: CASES_ROUTE, Component: Cases },
    { path: CASE_ROUTE, Component: Case },
    { path: PROFILE_ROUTE, Component: Profile },
    { path: COMPANY_ROUTE, Component: Company },
    { path: NOTIFY_ROUTE, Component: Notify },
    { path: PORTFOLIO_ROUTE, Component: Portfolio },
    { path: SOLUTION_ROUTE, Component: Solution }
]

export const publicRoutes = [
    { path: LANDING_ROUTE, Component: Landing },
    { path: AUTH_ROUTE, Component: Auth },
    { path: ADMIN_ROUTE, Component: Admin },
    { path: DOCS_ROUTE, Component: Docs }
]