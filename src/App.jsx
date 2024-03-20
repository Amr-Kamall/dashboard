import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Suspense, lazy, useState } from "react";
const AppLayout = lazy(() => import("./pages/applayout/AppLayout"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Team = lazy(() => import("./pages/team/Team"));
const PageNotFound = lazy(() => import("./pages/undefined/PageNotFound"));
const Calendar = lazy(() => import("./pages/calendar/Calendar"));
const Faq = lazy(() => import("./pages/faq/Faq"));
const Form = lazy(() => import("./pages/form/Form"));
const Geography = lazy(() => import("./pages/geography/Geography"));
const BarChart = lazy(() => import("./pages/barChart/BarChart"));
const Contacts = lazy(() => import("./pages/contacts/Contacts"));
const Invoices = lazy(() => import("./pages/invoices/Invoices"));
const LineChart = lazy(() => import("./pages/lineChart/LineChart"));
const PieChart = lazy(() => import("./pages/pieChart/PieChart"));

function App() {
  const [isDashboard, setIsDashboard] = useState(false);
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>loading.....</h1>}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route
              index
              element={
                <Dashboard
                  setIsDashboard={setIsDashboard}
                  isDashboard={isDashboard}
                />
              }
            />
            <Route path="team" element={<Team />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="bar"
              element={<BarChart isDashboard={isDashboard} />}
            />
            <Route path="calendar" element={<Calendar />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="faq" element={<Faq />} />
            <Route
              path="geography"
              element={<Geography isDashboard={isDashboard} />}
            />
            <Route path="form" element={<Form />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="line" element={<LineChart />} />
            <Route
              path="pie"
              element={<PieChart isDashboard={isDashboard} />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
