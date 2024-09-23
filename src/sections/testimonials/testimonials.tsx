import classes from "./testimonials.module.css";

import { Title, Text, Container, Flex, Card, Avatar, Group } from "@mantine/core";

function CardTestimonial() {
  return (
    <Card shadow="sm" padding="xl" radius="md">
      <Text>
        Alexandre works in a very mature and autonomous way, while keeping his
        management aware of the progress and being open to guidance and feedback
        received. He is very enthusiast about the technical aspect and really
        good at proposing multiple innovative way forward to overcome technical
        difficulties.
      </Text>

      <Flex gap="md" mt={"sm"} wrap="nowrap">
        <Avatar
          src="./images/cards/ROBERT_Emilien.jpg"
          alt="Profile picture of Mr ROBERT Emilien"
        />
        <Container m={0} p={0}>
          <Text size="md" c="blue">
            - Emilien ROBERT
          </Text>
          <Text size="xs" c="dimmed">
            CNS Innovation Coordinator - EUROCONTROL
          </Text>
        </Container>
      </Flex>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <section className={"spacing " + classes.testimonials}>
      <Title className={"section-title " + classes.testimonials_title} mb={"2.5rem"}>
        TESTIMONIAL
      </Title>
      <Container pos={"relative"} p={0}>
        <Flex className={classes.testimonials_box}>
          <CardTestimonial />
        </Flex>
      </Container>
    </section>
  );
}
