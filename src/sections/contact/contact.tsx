import classes from "./contact.module.css";

import {
  Title,
  Text,
  Container,
  Flex,
  Avatar,
  Button,
  Group,
} from "@mantine/core";

export default function Contact() {
  return (
    <section id="contact" className={"spacing " + classes.contact}>
      <Title className={"section-title " + classes.contact_title}>
        CONTACT
      </Title>
      <Flex direction="column" justify="center" align="center">
        <Text ta="center">
          If you have any questions or would like to collaborate, please send me
          an e-mail.
          <br />
          I'll be delighted to get back to you as soon as possible.
        </Text>
        <Container mb="md">
          <a
            href="mailto:alexandre.leys11@gmail.com"
            className={classes.contact_email}
          >
            alexandre.leys11@gmail.com
          </a>
        </Container>
        <Group>
          <Button
            leftSection={
              <Avatar
                src="./images/buttons/linkedIn.png"
                alt="LinkedIn"
                size={"sm"}
              />
            }
            variant="light"
          >
            LinkedIn
          </Button>
          <Button
            leftSection={
              <Avatar src="./images/buttons/github.png" alt="GitHub" />
            }
            variant="light"
          >
            GitHub
          </Button>
          <Button
            leftSection={
              <Avatar
                src="./images/buttons/kaggle.svg"
                alt="Kaggle"
                size={"sm"}
              />
            }
            variant="light"
          >
            Kaggle
          </Button>
        </Group>
      </Flex>
    </section>
  );
}
