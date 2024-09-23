import classes from "./overview.module.css";

import {
    Container,
    Title,
    Text,
    Grid,
    Tabs,
    Divider,
    Image,
    Flex,
} from "@mantine/core";

import React from "react";

import { FaPython } from "react-icons/fa6";
import { AiFillDatabase } from "react-icons/ai";
import { PiGraph } from "react-icons/pi";
import { FaBrain } from "react-icons/fa";

import LearnMore from "./LearnMore";

function GridImage({
    path_list,
    height,
}: {
    path_list: string[];
    height: number;
}) {
    return (
        <Grid>
            {path_list.map((path, index) => (
                <React.Fragment key={index}>
                    <Grid.Col span={{ base: 12, md: "auto" }}>
                        <Image
                            radius="md"
                            src={path}
                            h={height}
                            fit="contain"
                        />
                    </Grid.Col>
                    {index < path_list.length - 1 && (
                        <Divider orientation="vertical" />
                    )}
                </React.Fragment>
            ))}
        </Grid>
    );
}

export default function Overview() {
    const image_height: number = 200;
    return (
        <section
            id="overview"
            className={"section-spacing-top " + classes.overview}
        >
            <Title className={"section-title"}>OVERVIEW</Title>
            <Text size="md" mb="lg">
                I'm an ambitious engineer with a passion for ML/AI-oriented data
                science, based on real-world projects and a solid background in
                applied mathematics and computer science. My goal is to provide
                solutions in the management, processing and exploration of big
                data.
            </Text>
            <Tabs
                orientation="vertical"
                variant="unstyled"
                defaultValue="Python Developer"
                classNames={classes}
                style={{ width: "100%", display: "flex" }}
                mb="xl"
            >
                <Tabs.List grow>
                    <Tabs.Tab
                        value="Python Developer"
                        leftSection={
                            <FaPython
                                color="var(--mantine-color-blue-8)"
                                size={"1.75rem"}
                            />
                        }
                    >
                        Python Developer
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="Database Designer"
                        leftSection={
                            <AiFillDatabase
                                color="var(--mantine-color-blue-8)"
                                size={"1.75rem"}
                            />
                        }
                    >
                        Database Designer
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="Data Miner"
                        leftSection={
                            <PiGraph
                                color="var(--mantine-color-blue-8)"
                                size={"1.75rem"}
                            />
                        }
                    >
                        Data Miner
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="ML/AI Engineer"
                        leftSection={
                            <FaBrain
                                color="var(--mantine-color-blue-8)"
                                size={"1.75rem"}
                            />
                        }
                    >
                        ML/AI Engineer
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.List grow style={{ flexBasis: "100%" }}>
                    <Tabs.Panel
                        value="Python Developer"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <GridImage
                            path_list={[
                                "./images/logos/python.png",
                                "./images/logos/numpy.png",
                                "./images/logos/scipy.png",
                            ]}
                            height={image_height}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel
                        value="Database Designer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <GridImage
                            path_list={[
                                "./images/logos/sql.png",
                                "./images/logos/postgresql.png",
                                "./images/logos/mongoDB.png",
                            ]}
                            height={image_height}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel
                        value="Data Miner"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <GridImage
                            path_list={[
                                "./images/logos/R.png",
                                "./images/logos/pandas.png",
                                "./images/logos/plotly.png",
                            ]}
                            height={image_height}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel
                        value="ML/AI Engineer"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <GridImage
                            path_list={[
                                "./images/logos/scikit_learn.png",
                                "./images/logos/pytorch.png",
                                "./images/logos/tensorflow.png",
                            ]}
                            height={image_height}
                        />
                    </Tabs.Panel>
                </Tabs.List>
            </Tabs>
            <Divider my="md" />
            <Container fluid p={0}>
                <Title size="h3" mb="sm">
                    What about me
                </Title>
                <Grid>
                    <Grid.Col span={{ base: 12, sm: 8 }}>
                        <Text>
                            I'm currently in the final-year of my Masters in
                            Data Science at the University of Bordeaux in
                            France. I'm autonomous in the projects I get
                            involved in, I like being in a group and working as
                            part of a team. Finally, I'm very versatile. For
                            example, I made this portfolio using React,
                            TypeScript and Vite.
                        </Text>
                    </Grid.Col>
                    <Grid.Col
                        span={{ base: 12, sm: 4 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Flex>
                            <LearnMore />
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    );
}
