
import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedBackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };


    leaveFeedback = evt => {
        const name = evt.target.name;
        this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
    };
    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    }
    positivePercentage = () => {

        return Math.round((this.state.good / this.countTotalFeedback()) * 100);

    }

    render() {
        return (
            <>
                <Section title = "Leave your feedback here">
                    <FeedBackOptions options={this.leaveFeedback}/>
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={
                                this.countTotalFeedback()}
                            positivePercentage={this.positivePercentage()}
                        />
                    ) : (<Notification message="No feedback given" />)
                    }
                </Section>

            </>
        )
    }
}

export default App;