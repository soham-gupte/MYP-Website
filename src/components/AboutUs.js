import "./AboutUsStyles.css";
import who_we_are_1 from "./whoweare1.jpg"
import who_we_are_2 from "./whoweare2.jpg"
import aboutus_1 from "./aboutus1.jpg"
import aboutus_2 from "./aboutus2.jpg"
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

// Make this responsive!
export function AboutUs() {

    useEffect(() => {
        const sr = ScrollReveal({
            delay: 500,            // Delay between elements in milliseconds
            distance: '60px',      // Distance to start the animation (from bottom/top/left/right)
            origin: 'bottom',      // Direction from which the animation starts ('bottom', 'top', 'left', 'right')
            duration: 1000,        // Animation duration in milliseconds
            easing: 'ease-out',    // Easing function
            reset: true,
        });
        sr.reveal(".main-title", { delay: 500, origin: "left" });
        sr.reveal(".who-we-are .image, .text-box3, .text-box4, .text-box5-cont", { delay: 500, origin: "bottom" });
        sr.reveal(".text-box", { delay: 500, origin: "right" })
        sr.reveal(".our-story .image", { delay: 500, origin: "top" })
    }, []);



    // ScrollReveal().reveal(".main-title", {delay: 200, origin: "left"});
    // ScrollReveal().reveal(".who-we-are .image", {delay: 200, origin: "bottom"});
    // ScrollReveal().reveal(".our-story .image", {delay: 200, origin: "bottom"});


    return (
        <div className="about-us">
            <section className="who-we-are">
                <div className="container">
                    <h2 className="main-title">Who We Are</h2>
                    <div className="content">
                        <div className="image">
                            <img src={who_we_are_1} alt="Who we are" />
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
                        <div className="image img-1">
                            <img src={who_we_are_2} alt="Who we are" />
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
                            <img src={aboutus_1} alt="Our story"></img>
                        </div>
                        <div className="text-box3">
                            <p>Mark Your Presence was founded on the pillars of change and commitment to democracy to bring about a political order that is participatory and progresssive. Chaitanya Prabhu founded the organisation in 2018 as an ode to his 100 year old grandfather’s commitment to practise the right that people of this country lay their lives for. He envisioned an organisation that would remind young people of the journey we as a nation took to make this tryst with democracy as our destiny.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={aboutus_2} alt="Our story"></img>
                        </div>
                        <div className="text-box3">
                            <p>Chaitanya is passionate for the cause of strengthening Indian democracy and sees voting as a way to honour the ones who struggled for that right to vote. Chaitanya's inspiration comes from his grandfather who is 100 years old and has been voting since India gained independence. He believes that if his grandfather can go and vote in every poll so can the youth of India. So, when he learnt that most of his friends do not have a voter ID required to register their vote, the 20-year-old Chaitanya Prabhu took it upon himself to register his peers on the voters' list.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mission">
                <div className="container">
                    <h2 className="main-title">Mission</h2>
                    <p className="text-box4">Our mission is to reach out to the youth of our country and enrol all the citizens above the age of 18 so that they can actively participate in the 2024 elections and in the election in years to come. The power of the youth is not only important but also vital in shaping the course of any democracy. More than 50 per cent of India’s population is below the age of 25, and more than 65 percent is below the age of 35. Harnessing these young citizens of our county to participate in democratic processes and contribute positively for the development of the Country is an essential requirement. We at Mark your presence are working to make voting  more interesting for the youth of India, We run microtragetted voter campaigns which have resulted in increase in voter awareness and voter turnout in the city.</p><br></br>
                    <p className="text-box4">Our Founder, Chaitanya Prabhu has been registering and educating voters since 2018 and reached more than 36000 voters throughout his campaign. He was successful in registering 10,000 voters in the last general elections and assembly elections in India. As a result of his hard work, he created an impact in the life of more than 10,000 young eligible voters by enabling them to cast their informed vote.</p>
                </div>
            </section>
            <section className="organization-structure">
                <div className="container">
                    <div className="text-box5">
                        <h2 className="main-title">Organization Structure</h2>
                        <div className="text-box5-cont">
                            <p>Mark Your Presence is a programme that registers young voters and educates them about their right to vote. Our goal is to make registering a continuous activity rather than just an issue that is discussed during elections. We employ cutting-edge technology and creative approaches to increase the number of educated voters in our democracy. We teach and register young voters in institutions, which we refer to as democracy courses in schools and universities.</p><br></br>
                            <p>The organisation is divided into two sections, the first of which is the leadership fellowship and the second of which is the research fellowship. Both sections of the organisation are dedicated to raising voter awareness and improving voter registration and turnout. The team is made up of students that want to help establish a stronger democracy. The team now has twenty-five core members and 480 volunteers. Chaitanya Prabhu, the organisation's founder, is a lawyer who is now earning a master's degree in public policy at Xaviers.</p><br></br>
                            <p>Everyone in the group is a student with a great desire to contribute to the strengthening of Indian democracy. The organisation and its founder, Chaitanya Prabhu, has been awarded by the United Nations India  and felicitated by the Ministry of Youth Affairs and Sports for his contributions to youth empowerment. This year, the organisation and its founder was also honoured with the Diana International Award, the greatest honour given for humanitarian efforts. The award was founded in honour of Diana, Princess of Wales, and is given out by the charity of the same name, which has the backing of both of her sons, the Duke of Cambridge and the Duke of Sussex.</p><br></br>
                        </div>
                        <hr></hr><br></br><br></br>
                        <h2>Some of our work entails: </h2><br></br>
                        <div className="text-box6-cont">
                            <li>Setting up Electoral literacy club in colleges</li>
                                <li>City level registration with NSS</li>
                                <li>Rotaract level registration for all rotaract clubs in Mumbai.</li>
                                <li>Convincing young individuals to register to vote through social media</li>
                                <li>Register young individuals and convert them into educated voters.</li>
                                <li>Art campaign to create more awareness</li>
                                <li>Run Surveys to understand voter problems</li>
                                <li>Working on establishing VAF</li>
                                <li>Starting a competition for voter registrations amongst Mumbai colleges in Mumbai.
   Register voters in 7.30mins </li>
                        </div>

                            
                    </div>
                </div>
            </section>
        </div>
    )
}