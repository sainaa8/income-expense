import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUser] = useState("");
  const [records, setRecords] = useState();
  const [cash, setCash] = useState();
  const [nam, setname] = useState();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("Tokenn");
    const cash = localStorage.getItem("UserCash");
    const username = localStorage.getItem("name");

    if (!token) {
      router.push("/login");
      return;
    }

    const getUserToken = async () => {
      try {
        const result = await axios.post(
          "http://localhost:8000/getUser",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        setUser(result.data);
        setCash(cash);
        setname(username);
        // router.push("/");
      } catch (err) {
        console.log(err);
        localStorage.removeItem("Tokenn");
        router.push("/login");
      }
    };
    getUserToken();
  }, []);

  console.log(nam);

  useEffect(() => {
    const getRecords = async () => {
      const { data } = await axios.post(
        "http://localhost:8000/getIncomeExpence",
        {
          email: userEmail,
        }
      );

      setRecords(data);
    };
    getRecords();
  }, [userEmail]);
  console.log(records);
  return (
    <UserContext.Provider value={{ userEmail, records, cash, nam }}>
      {children}
    </UserContext.Provider>
  );
};
