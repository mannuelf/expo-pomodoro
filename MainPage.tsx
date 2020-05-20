import React, { useState, useEffect } from "react";
import {
  H1,
  Header,
  Body,
  Grid,
  Col,
  Row,
  Left,
  Right,
  Title,
  Container,
  Icon,
  Content,
  ListItem,
  Button,
  Radio,
  Segment,
  Text,
  CheckBox,
} from "native-base";

import { StyleSheet, View, ScrollView } from "react-native";

const MainPage = () => {
  const MODES = {
    FOCUS: {
      name: "FOCUS",
      title: "Focus",
      time: 25,
      text: "Keep focused for",
    },
    SHORT: {
      name: "SHORT",
      title: "Short break",
      time: 5,
      text: "Get a cup of coffee",
    },
    LONG: {
      name: "LONG",
      title: "Long break",
      time: 15,
      text: "Go for a walk",
    },
  };
  const initialTime = new Date(25 * 60000);
  const [mode, setMode] = useState("FOCUS");
  const [time, setTime] = useState(initialTime);
  const [isCounting, setCounting] = useState(false);

  const changeMode = (type: { name: string; time: number }) => {
    setCounting(false);
    setMode(type.name);
    setTime(minToTimestamp(type.time).getTime());
  };

  const ListRadioItems = Object.values(MODES).map((el, index) => {
    return (
      <ListItem
	key={index}
        onPress={() => changeMode(MODES[el.name])}
        selected={mode === el.name}
      >
        <Left>
          <Text>{el.title}</Text>
        </Left>
        <Right>
          <Radio selected={mode === el.name} />
        </Right>
      </ListItem>
    );
  });

  const togglePause = () => {
    setCounting(!isCounting);
  };

  const handleReset = () => {
    const targetTime = MODES[mode].time;
    setCounting(false);
    setTime(minToTimestamp(targetTime));
  };

  const minToTimestamp = (mins: number) => {
    return new Date(mins * 60000);
  };

  const handleFinished = () => {
    alert("Poof");
  };

  useEffect(() => {
    const counter = setInterval(() => {
      if (isCounting) {
        if (
          new Date(time).getSeconds() === 0 &&
          new Date(time).getMinutes() === 0
        ) {
          togglePause();
          handleFinished();
        } else {
          setTime(time - 1000);
        }
      }
    }, 1000);
    return () => clearInterval(counter);
  }, [time, isCounting]);
  return (
    <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>Pomodoro Timer</Title>
        </Body>
        <Right />
      </Header>
      <View>{ListRadioItems}</View>
      <ScrollView contentContainerStyle={styles.center}>
        <View style={styles.title}>
          <H1>{MODES[mode].text}</H1>
          <H1 style={styles.countdown}>
            {new Date(time).getMinutes().toString().length < 2
              ? `0${new Date(time).getMinutes()}`
              : new Date(time).getMinutes()}
            :
            {new Date(time).getSeconds().toString().length < 2
              ? `0${new Date(time).getSeconds()}`
              : new Date(time).getSeconds()}
          </H1>
        </View>
        <View style={styles.controls}>
          <Button onPress={togglePause}>
            <Icon name={isCounting ? "pause" : "play"} />
            <Text>{isCounting ? "Pause" : "Start"}</Text>
          </Button>
          <Button onPress={handleReset} danger>
            <Icon name="refresh" />
            <Text>Reset</Text>
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
  },
  controls: {
    width: "100%",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  countdown: {
    paddingTop: 16,
    fontSize: 36,
  },
});

export default MainPage;
