import './styles/About.css'

const AboutCard = () => {

    return (
        <>
            <h1>ABOUT THIS PROJECT</h1>
            <p className="about-info">This project was created by me, Jiri Ottis as a passionate project to showcase my skills and development as a front-end developer.<br/>
             Project was build in February 2023 with HTML 5, CSS, JavaScript, React and some additional libraries. The vision was to create a webpage
                where you can find how much time is left for upcoming movie to be released. Simply and easily done.
             </p>

            <p className="about-info" >If you want to find out more about me visit those links below &#128071;</p>
            <p className="about-info" style={{textAlign: "left"}}>My Linkedin account: <a href="https://www.linkedin.com/in/jiri-ottis/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/jiri-ottis/</a></p>
            <p className="about-info" style={{textAlign: "left"}}>My GitHub account: <a href="https://github.com/JiriOttis" target="_blank" rel="noreferrer">https://github.com/JiriOttis</a></p>
        </>
    )
}

export default AboutCard;