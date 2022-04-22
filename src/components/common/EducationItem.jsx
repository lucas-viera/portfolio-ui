export function EducationItem(props){
    return (
        <>            
            <img
                src={props.image}
                alt={props.title}
                className="education-img"
            />
            <h3 className="education-title">{props.title}</h3>
            <p className="education-details">
                {props.description}
            </p>
        </>
    );
}