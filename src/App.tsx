import "@mantine/core/styles.css";
import { MantineProvider, BackgroundImage, Container } from "@mantine/core";
import { theme } from "./theme";

import Cover from "./sections/cover/cover";
import Overview from "./sections/overview/overview";
import Projects from "./sections/projects/projects";
import Testimonials from "./sections/testimonials/testimonials";
import Contact from "./sections/contact/contact";

export default function App() {
    return (
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <BackgroundImage src="./images/dot-pattern-bg.png" radius="xs">
                <Cover />
            <svg height={"80px"} width={"100%"} data-alt="true" data-rotate="true" preserveAspectRatio="none" viewBox="0 0 600 120" style={{transform: 'rotate(180deg)', marginBottom: '-8px'}} xmlns="http://www.w3.org/2000/svg"><path fill="var(--mantine-color-dark-7)" d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"></path></svg>
            </BackgroundImage>
            <Container className="spacing" bg={"var(--mantine-color-dark-7)"} fluid>
                <Overview />
            </Container>
            <svg height={"80px"} width={"100%"} data-alt="true" data-rotate="true" preserveAspectRatio="none" viewBox="70 0 600 120" style={{transform: 'rotate(0deg)'}} xmlns="http://www.w3.org/2000/svg"><path fill="var(--mantine-color-dark-7)" d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"></path></svg>
            <Projects />
            <svg height={"80px"} width={"100%"} data-alt="true" data-rotate="true" preserveAspectRatio="none" viewBox="0 0 600 120" style={{transform: 'rotate(180deg)', marginBottom: '-8px'}} xmlns="http://www.w3.org/2000/svg"><path fill="var(--mantine-color-dark-7)" d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"></path></svg>
            <Container className="spacing" bg={"var(--mantine-color-dark-7)"} fluid>
                <Testimonials />
            </Container>
            <Container pt="48px" bg={"var(--mantine-color-dark-9)"} fluid>
                <Contact />
            </Container>
        </MantineProvider>
    );
}
