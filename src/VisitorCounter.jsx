import { useEffect, useState } from "react";

function VisitorCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    let count = localStorage.getItem("visits");

    if (!count) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }

    localStorage.setItem("visits", count);
    setVisits(count);
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px 0"}}>
      <h2 style={{color:"black", backgroundColor:"#65a17c", height:"50px", justifyContent:"center", alignContent:"center", color:"white"}}>👥 You have visited this site {visits} times.</h2>
    </div>
  );
}

export default VisitorCounter;