import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const Timer = ({ hours, mins, next }) => {
  const hour = hours * 60 * 60 * 1000;
  const min = mins * 60 * 1000;

  const duration = hour + min;

  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  function getFormattedTime(millisecs) {
    let totalSecs = parseInt(Math.floor(millisecs / 1000));
    let totalMins = parseInt(Math.floor(totalSecs / 60));
    let totalHours = parseInt(Math.floor(totalMins / 60));

    let seconds = parseInt(totalSecs % 60);
    let minutes = parseInt(totalMins % 60);
    let hours = parseInt(totalHours % 24);

    if (time === 0) {
      next();
    }

    return `${hours} H : ${minutes}mins : ${seconds} secs`;
  }
  return <Text style={styles.coloredTitle}>{getFormattedTime(time)}</Text>;
};

export default Timer;

const styles = StyleSheet.create({
  coloredTitle: {
    color: "#DE6637",
    fontSize: 16,
    fontWeight: "500",
  },
});
