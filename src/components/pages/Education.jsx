// import { Link } from "react-router-dom";
import ProfileImage from "../../assets/img/profile.gif";
export function Education() {
   //TODO: Add Institution small logo to each education title
   //TODO: Style components and separate each kind of education
    return (
        <>
            <section className="about-me">
                <h2>Professional Education</h2>
                <h3>Universidad ORT</h3>
                <p>
                    Systems Engineering
                    <br></br>
                    2021 - Present
                </p>
                <p> 
                    Telecommunications Engineering
                    <br></br>
                    2012 - 2021
                </p>
            </section>

            <section className="about-me">
                <h2>Courses and Seminars</h2>
                <h3>Universidad ORT</h3>
                <p>
                    DevOps Certificate
                    <br></br>
                    March 2022 - August 2022
                </p>

                <h3>UCU Business School - Universidad Catolica</h3>
                <p>
                    Blockchain and Cryptocurrencies for Enterprises
                    <br></br>
                    March 2022
                </p>
                

                <h3>IEEM Business School - Universidad de Montevideo</h3>
                <p>
                    Leadership Skills - Young Professionals Program
                    <br></br>
                    February 2022
                </p>
                <h3>Senpai Academy</h3>
                <p>
                    Fullstack Development
                    <br></br>
                    September 2021 - April 2022
                </p>


                <h2>Certifications</h2>

                <h3>Python Institute</h3>
                <p>
                    Python Certified Entry-Level Programmer (PCEP)
                    <br></br>
                    July 2021
                </p>

                <h3>AXELOS ITIL</h3>
                <p>
                    ITIL Foundation Certificate in IT Service Management
                    <br></br>
                    February 2021
                </p>
                <h3>Microsoft Azure</h3>
                <p>
                    AZ-900 Azure Fundamentals
                    <br></br>
                    January 2021
                </p>

                <h3>CertiProf SFPC</h3>
                <p>
                    Scrum Foundation Professional Certificate 
                    <br></br>
                    June 2020
                </p>
            </section>
        </>
    );
}