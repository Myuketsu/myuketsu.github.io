import classes from "./navbar.module.css";

export default function Navbar() {
    return (
        <ul className={classes.navbar}>
            <hr />
            <li>
                <a href="#overview">OVERVIEW</a>
            </li>
            <li>
                <a href="#work">MY WORK</a>
            </li>
            <li>
                <a href="#contact">CONTACT</a>
            </li>
        </ul>
    );
}
