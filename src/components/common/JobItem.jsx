export function JobItem(props){
    return (
        <>            
            <img
                src={props.image}
                alt={props.title}
                className="job-img"
            />
            <h3 className="job-title">{props.title}</h3>
            <p className="job-details">
                {props.description}
            </p>
        </>
    );
}