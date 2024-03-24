import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const user = await getCurrentUser();
        const isAuthanicated = user?.role === "authenticated";
        if (!user && !isAuthanicated) {
          // Redirect to login page if no authenticated user
          navigate("/login");
        } else {
          // Set loading state to false once user data is fetched
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching current user:", error.message);
        // Handle error or redirect to login page
        navigate("/login");
      }
    }

    fetchCurrentUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="loader-wrapper">
        {" "}
        <Spinner />{" "}
      </div>
    ); // Display a loading indicator while fetching user data
  }
  // 1. load the authanticated user

  // 2. while loading, show a spinner

  //3. if there is no authanticated user, redirect to /login page

  // 4. if there is a user, render the app

  // If user is authenticated and loading is complete, render the app content
  return children;
}

export default ProtectedRoute;
