import "./AboutUsStyles.css";
import who_we_are from "./myp-who_we_are.png"

// Make this responsive!
export function AboutUs() {
    return (
        <div className="about-us">
            <section className="who-we-are">
                <div className="container">
                    <h2 className="main-title">Who we are</h2>
                    <div className="content">
                        <div className="image">
                            <img src={who_we_are} alt="Who we are" />
                        </div>
                        <div className="text-box text-box1">
                            {/* <h3>Who we are</h3><br></br>     */}
                            <p>The civil rights movements across the world changed the way we identify ourselves in today's world thus, making voting one of the most important precursors to shaping and reforming our present. With growing violence, poverty, climate change and need for reform in education and sciences; Voting becomes our only weapon in this fight. </p><br></br>
                            <p>Mark Your Presence was founded on the idea that we can create more change in our country if we work together. We are a non- profit and non -partisan organisation. Our aim is to create a positive change by reaching out to the youth and every citizen of the country on relevant issues that we are negligent about. </p><br></br>
                            {/* <p>Our mission is to reach out to the youth of our country and make them aware about the democratic process and the importance of participating in it. We believe that, it's important to make the citizens who are under 18 years of age aware, as they will be the future voters of our country.</p> */}
                            {/* <p>We also enrol all the citizens who are above the age of 18 so that they can actively participate in the elections in years to come. We understand that the power of the youth is not only important but also vital in shaping the course of any democracy and therefore having educated, politically aware voter's is crucial for our democracy.</p>
                        <p>Mark Your Presence  has conducted seminars in colleges, which are affiliated with Mumbai University, Symbiosis University, and other private universities. Over the last year, we have registered over 25,000 new voters for the 2019 elections. We have registered voters in the 2019 Lok sabha MP elections, MLA elections in Mumbai and Delhi. Registration is only the first step of our campaign and the goal will be achieved only once we educate students at large about their right to vote and assist them. We have created a voter's manual which will help each individual understand the process of voting which includes the essential things a voter needs to do before he/she goes out to vote , and also educates the voter about his/her constituency and the role of the Member of Parliament, MLA, and Corporator. We not only register new voters but also follow up with the concerned BLO officers whenever there is a problem. On our website, the voters can track their voter ids, check if their name is on the Electoral roll, check their polling stations and also find out detailed information of their nearest election office. </p> */}
                            {/* <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
                        </div>
                    </div>

                    <div className="content">
                        <div className="text-box text-box2">
                            <p>Our mission is to reach out to the youth of our country and make them aware about the democratic process and the importance of participating in it. We believe that, it's important to make the citizens who are under 18 years of age aware, as they will be the future voters of our country.</p><br></br>
                            <p>We also enrol all the citizens who are above the age of 18 so that they can actively participate in the elections in years to come. We understand that the power of the youth is not only important but also vital in shaping the course of any democracy and therefore having educated, politically aware voter's is crucial for our democracy.</p>
                            {/* <p>Mark Your Presence  has conducted seminars in colleges, which are affiliated with Mumbai University, Symbiosis University, and other private universities. Over the last year, we have registered over 25,000 new voters for the 2019 elections. We have registered voters in the 2019 Lok sabha MP elections, MLA elections in Mumbai and Delhi. Registration is only the first step of our campaign and the goal will be achieved only once we educate students at large about their right to vote and assist them. We have created a voter's manual which will help each individual understand the process of voting which includes the essential things a voter needs to do before he/she goes out to vote , and also educates the voter about his/her constituency and the role of the Member of Parliament, MLA, and Corporator. We not only register new voters but also follow up with the concerned BLO officers whenever there is a problem. On our website, the voters can track their voter ids, check if their name is on the Electoral roll, check their polling stations and also find out detailed information of their nearest election office. </p> */}
                        </div>
                        <div className="image">
                            <img src={who_we_are} alt="Who we are" />
                        </div>
                    </div>
                    {/* <div className="media-icons">
                </div> */}
                </div>
            </section>
            <section className="our-story">
                <div className="container">
                    <h2 className="main-title">Our Story</h2>
                    <div className="content">
                        <div className="image">
                            <img src={who_we_are} alt="Our story"></img>
                        </div>
                        <div className="our-story-info">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}