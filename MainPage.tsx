import React, { useState } from "react";
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
  const [mode, setMode] = useState("FOCUS");
  const [time, setTime] = useState(0);
  const [isCounting, setCounting] = useState(false);
  const MODES = {
    FOCUS: {
      name: "FOCUS",
      time: 25,
      text: "Keep focused for",
    },
    SHORT: {
      name: "SHORT",
      time: 5,
      text: "Get a short break",
    },
    LONG: {
      name: "LONG",
      time: 15,
      text: "Get a long break",
    },
  };

  const changeMode = (type: { name: string; time: number }) => {
    setCounting(false);
    setMode(type.name);
    setTime(type.time);
  };

  const handleReset = () => {
    const targetTime = MODES[mode].time;
    setTime(targetTime);
  };

  const minToTimestamp = (mins: number) => {
    const timestamp = new Date();
    timestamp.setMinutes(mins);
    return timestamp;
  };
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>EXPOmodoro Timer</Title>
        </Body>
        <Right />
      </Header>
      <View>
        <ListItem
          onPress={() => changeMode(MODES.FOCUS)}
          selected={mode === "FOCUS"}
        >
          <Left>
            <Text>Focus</Text>
          </Left>
          <Right>
            <Radio selected={mode === "FOCUS"} />
          </Right>
        </ListItem>
        <ListItem
          onPress={() => changeMode(MODES.SHORT)}
          selected={mode === "SHORT"}
        >
          <Left>
            <Text>Short Break</Text>
          </Left>
          <Right>
            <Radio selected={mode === "SHORT"} />
          </Right>
        </ListItem>
        <ListItem
          onPress={() => changeMode(MODES.LONG)}
          selected={mode === "LONG"}
        >
          <Left>
            <Text>Long Break</Text>
          </Left>
          <Right>
            <Radio selected={mode === "LONG"} />
          </Right>
        </ListItem>
      </View>
      <ScrollView contentContainerStyle={styles.center}>
        <View style={styles.title}>
          <H1>{MODES[mode].text}</H1>
          <H1 style={styles.countdown}>{time}</H1>
        </View>
        <View style={styles.controls}>
          <Button>
            <Icon name="play" />
            <Icon name="pause" />
            <Text>Start / pause</Text>
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
