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
  const [mode, setMode] = useState("focus");
  const [time, setTime] = useState(0);
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
        <ListItem onClick={() => setMode("focus")} selected={mode === "focus"}>
          <Left>
            <Text>Focus</Text>
          </Left>
          <Right>
            <Radio selected={mode === "focus"} />
          </Right>
        </ListItem>
        <ListItem onClick={() => setMode("short")} selected={mode === "short"}>
          <Left>
            <Text>Short Break</Text>
          </Left>
          <Right>
            <Radio selected={mode === "short"} />
          </Right>
        </ListItem>
        <ListItem onClick={() => setMode("long")} selected={mode === "long"}>
          <Left>
            <Text>Long Break</Text>
          </Left>
          <Right>
            <Radio selected={mode === "long"} />
          </Right>
        </ListItem>
      </View>
      <ScrollView contentContainerStyle={styles.center}>
        <View style={styles.title}>
          <H1>Focus</H1>
          <H1 style={styles.countdown}>24:55</H1>
        </View>
        <View style={styles.controls}>
          <Button>
            <Icon name="play" />
            <Icon name="pause" />
            <Text>Start / pause</Text>
          </Button>
          <Button danger>
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
