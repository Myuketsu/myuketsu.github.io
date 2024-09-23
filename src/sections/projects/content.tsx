import { Text, Card, Group, Image } from "@mantine/core";

import { useHover } from "@mantine/hooks";

import { MdDateRange } from "react-icons/md";

// ########
// # TAGS #
// ########

export const TagsMap: Record<string, string[]> = {
    "Programming language": ["Python", "R"],
    "Data science": ["Data Mining", "Data Visualization", "Machine Learning"],
    "Database": ["SQL", "NoSQL", "PL/pgSQL", "PostgreSQL", "MongoDB"],
    "Web": ["Website", "Dashboard", "API"],
};

// const AllTags: string[] = Object.values(TagsMap).reduce((acc, arr) => acc.concat(arr), []);

// #################
// # CARDS CONTENT #
// #################

interface CardContent {
    title: string;
    text: string;
    url: string;
    date: string;

    imageSrc: string;

    tags: string[];
}

const CardsContent: CardContent[] = [
    {
        title: "Data Mining and Prediction for Asthma Detection",
        text: "Statistical analysis and development of predictive models for detecting asthma in patients",
        url: "https://www.kaggle.com/code/myuketsu/asthma-disease-data-exploration-and-prediction/notebook",
        date: "Jun 23, 2024",
        imageSrc: "./images/cards/data_asthma_detection.jpg",
        tags: ["Python", "Data Mining", "Data Visualization", "Machine Learning"],
    },
    {
        title: "Design and implementation of an INSEE database",
        text: "Creation and manipulation of a detailed French geographic database based on INSEE data",
        url: "https://github.com/Myuketsu/Design-and-implementation-of-an-INSEE-database",
        date: "Mar 29, 2024",
        imageSrc: "./images/cards/database_insee.jpg",
        tags: ["Python", "SQL", "PL/pgSQL", "PostgreSQL", "Website"],
    },
    {
        title: "Time Series Prediction on Sensor Networks",
        text: "Reconstruction of the temporal dynamics of self-service bicycle stations in Toulouse",
        url: "https://github.com/Myuketsu/TER",
        date: "Feb 18, 2024",
        imageSrc: "./images/cards/bike_time_series.jpg",
        tags: ["Python", "Data Mining", "Data Visualization", "Dashboard", "Machine Learning"],
    },
    {
        title: "French water resources analysis platform",
        text: "Exploring Water Management and its indicators in Metropolitan France",
        url: "https://github.com/BaptisteGERBOUIN/PVA",
        date: "Sep 22, 2023",
        imageSrc: "./images/cards/analytical_visualization_project.jpg",
        tags: ["Python", "NoSQL", "MongoDB", "API", "Data Mining", "Data Visualization", "Dashboard"],
    },
];

// ##############
// # COMPONENTS #
// ##############

function ProjetCard({ cardContent }: { cardContent: CardContent }) {
    const { hovered, ref } = useHover();
    return (
        <a
            href={cardContent.url}
            target="_blank"
            style={{ display: "flex", textDecoration: "none" }}
        >
            <Card
                ref={ref}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                bg={
                    hovered
                        ? "var(--mantine-color-dark-5)"
                        : "var(--mantine-color-dark-6)"
                }
            >
                <Card.Section>
                    <Image
                        src={cardContent.imageSrc}
                        height={160}
                        alt={cardContent.title}
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{cardContent.title}</Text>
                </Group>

                <Text size="sm" c="dimmed" lineClamp={2}>
                    {cardContent.text}
                </Text>

                <Group mt="md" gap={"xs"}>
                    <MdDateRange color="var(--mantine-color-dimmed)" />
                    <Text size="sm" c="dimmed">
                        {cardContent.date}
                    </Text>
                </Group>
            </Card>
        </a>
    );
}

export default function ProjectCards({ selectedTags }: { selectedTags: string[] }) {
    return (
        <>
            {CardsContent.map((value, index) => {
                if (selectedTags.every(tag => value.tags.includes(tag))) {
                    return <ProjetCard key={index} cardContent={value} />;
                }
            })}
        </>
    );
}
