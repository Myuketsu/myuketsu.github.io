import classes from "./cover.module.css";

import Navbar from "../../components/navbar/navbar";
import GradientDescentApp from "../../components/gradientDescent/GradientDescentThree";

export default function Cover() {
    return (
        <section className={classes.cover}>
            <Navbar />
            <div className={classes.cover_title_box}>
                <h1 className={classes.cover_name}>ALEXANDRE LEYS</h1>
                <h5 className={classes.cover_name_desc}>
                    PASSIONATE ABOUT DATA SCIENCE & AI ENGINEERING
                </h5>
            </div>
            <div className={classes.cover_gradient_descent}>
                <GradientDescentApp />
            </div>
        </section>
    );
}
