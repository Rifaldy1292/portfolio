import React, { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Membersihkan interval saat komponen di-unmount
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (time) => {
    const day = time.getDate().toString().padStart(2, "0");
    const month = (time.getMonth() + 1).toString().padStart(2, "0"); // Bulan dimulai dari 0
    const year = time.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="text-center p-4 w-[100px] hidden	md:block">
      <div className="text-xl">{formatTime(currentTime)}</div>
    </div>
  );
};

export default DateTimeDisplay;
