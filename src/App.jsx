import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/applayout/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import PageNotFound from "./pages/undefined/PageNotFound";
import Calendar from "./pages/calendar/Calendar";
import Faq from "./pages/faq/Faq";
import Form from "./pages/form/Form";
import Geography from "./pages/geography/Geography";
import BarChart from "./pages/barChart/BarChart";
import Contacts from "./pages/contacts/Contacts";
import Invoices from "./pages/invoices/Invoices";
import LineChart from "./pages/lineChart/LineChart";
import PieChart from "./pages/pieChart/PieChart";
import { useState } from "react";
function App() {
  const [isDashboard, setIsDashboard] = useState(false);
  return (
    <BrowserRouter>
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
          <Route path="bar" element={<BarChart isDashboard={isDashboard} />} />
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
          <Route path="pie" element={<PieChart isDashboard={isDashboard} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
