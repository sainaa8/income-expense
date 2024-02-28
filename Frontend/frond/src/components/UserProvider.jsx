import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("Tokenn");
    if (!token) {
      router.push("/login");
      return;
    }

    const getUserToken = async () => {
      try {
        const { email } = await axios.post(
          "http://localhost:8000/getUser",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        setUser(email);
        console.log(email);
        router.push("/");
      } catch (err) {
        console.log(err);
        // localStorage.removeItem("Tokenn");
        router.push("/login");
      }
    };
    getUserToken();
  }, []);

  return (
    <UserContext.Provider value={{ userEmail }}>
      {children}
    </UserContext.Provider>
  );
};
