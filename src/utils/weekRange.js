//Calender range is 1 month (2weeks before and 2 weeks after)
export const weekRange = (noOfweeks, beforeOrAfter) => {
  let nowDate = new Date();
  if (beforeOrAfter === "before") {
    return nowDate.setDate(nowDate.getDate() - noOfweeks * 7);
  }

  if (beforeOrAfter === "after") {
    return nowDate.setDate(nowDate.getDate() + noOfweeks * 7);
  }
};
