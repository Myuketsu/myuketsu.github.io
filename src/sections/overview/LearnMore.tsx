import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Flex,
  Text,
  Anchor,
  Title,
  Timeline,
  List,
  Group,
  Divider,
  Container,
} from "@mantine/core";

import { FaPersonCircleQuestion } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";

function Courses() {
  return (
    <Flex
      direction="column"
      bg="var(--mantine-color-dark-8)"
      p="md"
      style={{ borderRadius: "0.5rem" }}
    >
      <Text size="sm">
        Here is an overview of my academic journey, along with the subjects
        studied each semester:
      </Text>
      <Group justify="center" mt="md">
        <Timeline active={8} bulletSize={20} lineWidth={2} w="30rem">
          <Timeline.Item title="1st semester">
            <List c="dimmed" size="sm">
              <List.Item>General Mathematics</List.Item>
              <List.Item>Computer Science</List.Item>
              <List.Item>Advanced Mathematics</List.Item>
              <List.Item>
                Digital Skills - Methodology and Communication
              </List.Item>
              <List.Item>Probability and Statistics</List.Item>
              <List.Item>Interdisciplinary Opening</List.Item>
              <List.Item>English</List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item title="2nd semester">
            <List c="dimmed" size="sm">
              <List.Item>Analysis 1</List.Item>
              <List.Item>Linear Algebra 1</List.Item>
              <List.Item>Array Algorithmics</List.Item>
              <List.Item>Introduction to C Programming under Unix</List.Item>
              <List.Item>CMI ISI Statistics Project</List.Item>
              <List.Item>CMI ISI Internship in a Company</List.Item>
              <List.Item>English</List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item title="3rd semester">
            <List c="dimmed" size="sm">
              <List.Item>Analysis 2</List.Item>
              <List.Item>Linear Algebra 2</List.Item>
              <List.Item>Algorithmics of Basic Data Structures</List.Item>
              <List.Item>C Programming</List.Item>
              <List.Item>Philosophy of Science</List.Item>
              <List.Item>Probability, Continuous Random Variables</List.Item>
              <List.Item>
                Methods and Tools for Using Computer Systems
              </List.Item>
              <List.Item>English Eloquence</List.Item>
              <List.Item>English</List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item title="4th semester">
            <List c="dimmed" size="sm">
              <List.Item>Analysis 3</List.Item>
              <List.Item>Optimization</List.Item>
              <List.Item>Functional Programming Algorithmics</List.Item>
              <List.Item>Databases and Web Programming</List.Item>
              <List.Item>Science and Communication 2</List.Item>
              <List.Item>CMI Programming Project</List.Item>
              <List.Item>Simulating Life</List.Item>
              <List.Item>Professional Opening</List.Item>
              <List.Item>English</List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item title="5th semester">
            <List c="dimmed" size="sm">
              <List.Item>
                Advanced Programming for Scientific Computing
              </List.Item>
              <List.Item>Graph Algorithms</List.Item>
              <List.Item>Object-Oriented Programming</List.Item>
              <List.Item>Case Studies, Applied Statistics</List.Item>
              <List.Item>
                Numerical Linear Methods and Statistical Modeling
              </List.Item>
              <List.Item>Mathematics, Science and Society</List.Item>
              <List.Item>Improvisation and Communication</List.Item>
              <List.Item>English</List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item title="6th semester - CMI ISI bachelor degree">
            <List c="dimmed" size="sm">
              <List.Item>Algorithmic Techniques and Programming</List.Item>
              <List.Item>Software Development Projects</List.Item>
              <List.Item>Probability</List.Item>
              <List.Item>Image, Signal Processing</List.Item>
              <List.Item>Professional Opening 3</List.Item>
              <List.Item>Application Workgroup</List.Item>
              <List.Item>International Internship</List.Item>
              <List.Item>English</List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item title="7th semester">
            <List c="dimmed" size="sm">
              <List.Item>Probability and Statistics</List.Item>
              <List.Item>
                Data Representation and Multidimensional Statistics
              </List.Item>
              <List.Item>Regression Models</List.Item>
              <List.Item>Computer Tools for Data Processing</List.Item>
              <List.Item>Data Analysis, Classification, Indexing</List.Item>
              <List.Item>Analytical Visualization Project</List.Item>
              <List.Item>Management and Organizational Theory</List.Item>
              <List.Item>English</List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item title="8th semester">
            <List c="dimmed" size="sm">
              <List.Item>Markov Chains</List.Item>
              <List.Item>Martingales and Stochastic Algorithms</List.Item>
              <List.Item>MCMC Methods</List.Item>
              <List.Item>Convex Optimization for Inverse Problems</List.Item>
              <List.Item>
                Expertise Project in Statistics and Probability
              </List.Item>
              <List.Item>Environmental Data Statistics Project</List.Item>
              <List.Item>
                Computational Statistics for Data Exploration
              </List.Item>
              <List.Item>Advanced Databases</List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item title="9th semester" lineVariant="dashed">
            <List c="dimmed" size="sm">
              <List.Item>
                Statistics and Data Analysis in High Dimensions
              </List.Item>
              <List.Item>
                Introduction to Deep Learning and Data Science Challenge
              </List.Item>
              <List.Item>Supervised Learning</List.Item>
              <List.Item>
                Mixed Linear Models and Applications in Biostatistics
              </List.Item>
              <List.Item>
                Optimization in High Dimensions - Deterministic and Stochastic
                Approaches
              </List.Item>
              <List.Item>
                Computational Optimal Transport for Data Science
              </List.Item>
              <List.Item>Data and Network Science</List.Item>
              <List.Item>Management and Ethics</List.Item>
              <List.Item>Scientific Article Reading</List.Item>
              <List.Item>English</List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item title="10th semester - CMI ISI master's degree">
            <List c="dimmed" size="sm">
              <List.Item>Big Data Project</List.Item>
              <List.Item>
                Elective: Open Data Project and Data Science in Enterprise or
                Reading and Synthesis of Research Papers
              </List.Item>
              <List.Item>Long Internship in a Company or Laboratory</List.Item>
            </List>
          </Timeline.Item>
        </Timeline>
      </Group>
    </Flex>
  );
}

function Content() {
  return (
    <Flex gap="md" direction="column">
      <Text size="sm">
        Hello, my name is Alexandre Leys, I'm currently a final-year Data
        Science student at the University of Bordeaux in France. I'm passionate
        about Data Science and Artificial Intelligence and would like to make a
        career out of it. I'm curious, autonomous and diligent in what I do and
        the projects I carry out. I'm looking for a 6-month internship starting
        March 1, 2025 as part of my career path. I hope to get the most out of
        this experience, both professionally and personally.
      </Text>

      <Container m={0} p={0}>
        <Title size="h4">
          <FaPersonCircleQuestion /> | Why data science?
        </Title>
        <Divider></Divider>
      </Container>

      <Text size="sm">
        A student of data science, my passion for computing goes back to my
        childhood, when I first became interested in the construction of
        computers and their inner workings. This curiosity then led me to
        programming, starting with Scratch, then self-taught Java and then
        Python.
      </Text>

      <Text size="sm">
        The discovery of “
        <Anchor
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
          target="_blank"
          underline="hover"
        >
          The Game of Life
        </Anchor>
        ” was a turning point, awakening my interest in the concept of
        artificial intelligence, which subsequently led me to explore data
        science. Today, I'm actively pursuing my knowledge in this field to meet
        the challenges of modern AI.
      </Text>

      <Container m={0} p={0}>
        <Title size="h4">
          <MdMenuBook /> | Education
        </Title>
        <Divider></Divider>
      </Container>

      <Text size="sm">
        I am currently pursuing a Master's degree in Statistical and Computer
        Science Engineering at the{" "}
        <Anchor
          href="https://www.u-bordeaux.fr/"
          target="_blank"
          underline="hover"
        >
          University of Bordeaux
        </Anchor>
        . Since the beginning of my higher education, I have been following the{" "}
        <Anchor
          href="https://uf-mi.u-bordeaux.fr/cmi-isi/"
          target="_blank"
          underline="hover"
        >
          CMI ISI
        </Anchor>{" "}
        program. The Cursus Master Ingénierie (CMI) are progressive and
        demanding university programs with a national label awarded by the{" "}
        <Anchor
          href="https://reseau-figure.fr/"
          target="_blank"
          underline="hover"
        >
          Figure network
        </Anchor>
        . These are five-year, coherent programs leading to engineering
        functions with interaction with the research field, based on the
        international model of the “Master of Engineering.”
      </Text>

      <Text size="sm">
        A national reference guarantees the balance of this demanding program
        (20% more teaching than a traditional license-master program),
        motivating and inspired by the curricula of major international
        universities. A significant amount of time is dedicated to projects and
        internships, combining scientific specialization and personal
        development.
      </Text>

      <Courses />
    </Flex>
  );
}

export default function LearnMore() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="80%"
        title={
          <Title c="blue" tt="uppercase" size="h2">
            What about me?
          </Title>
        }
      >
        <Content />
      </Modal>

      <Button onClick={open} variant="outline">
        Want to know more?
      </Button>
    </>
  );
}
