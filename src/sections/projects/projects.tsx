import classes from "./projects.module.css";

import { useState } from 'react';
import { Title, SimpleGrid, Flex, MultiSelect } from "@mantine/core";

import ProjectCards, { TagsMap } from "./content";

import { FiHash } from "react-icons/fi";

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  return (
    <section id="work" className={"spacing " + classes.projects}>
      <Title className={"section-title " + classes.projects_title}>
        PROJECTS
      </Title>
      {/* <Text size="md" mb="lg">
                You will find here the personal projects I have completed as
                well as those made during my training. I'm interested in
                creating web applications or software to take sharing and
                communication in data mining to the next level.
            </Text> */}
      <Flex mb={"md"}>
        <MultiSelect
          searchable
          clearable
          hidePickedOptions
          leftSection={<FiHash />}
          onChange={(tags: string[]) => setSelectedTags(tags)}
          label="Tag filter"
          placeholder="Python, Pandas, ..."
          data={Object.entries(TagsMap).map(([group, items]) => ({
            group,
            items,
          }))}
        />
      </Flex>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        <ProjectCards selectedTags={selectedTags}/>
      </SimpleGrid>
    </section>
  );
}
