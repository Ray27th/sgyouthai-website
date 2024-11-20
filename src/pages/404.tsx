import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    // Use setTimeout to delay the redirection
    const timeoutId = setTimeout(() => {
      navigate(-1);
    }, countdown * 1000); // 5000 milliseconds = 5 seconds

    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // Update countdown every 1 second

    // Cleanup function to clear the timeout if the component unmounts before redirection
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [navigate]);

  return (
    <div className="justify-center items-center flex flex-col h-[100svh] gap-2">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p>Redirecting in {countdown} seconds...</p>
    </div>
  );
}

export default Error;
