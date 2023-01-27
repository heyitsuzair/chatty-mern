import React, { useEffect, useState } from "react";
import moment from "moment";

const Date = ({ text, date }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    /**
     * Converting Date Into Desired Format
     */
    const ago = moment(date).format("LT, dddd, LL");
    setCurrentDate(ago);
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      {text} {currentDate}
    </div>
  );
};

export default Date;
