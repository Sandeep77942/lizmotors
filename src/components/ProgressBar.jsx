import PropTypes from 'prop-types';
const ProgressBar = (props) => {
    const {bgcolor, progress, height, name, number } = props;
    //Outerdiv style of Progress Bar
const Parentdiv = {
    height: height,
    width: "60%",
    backgroundColor: "whitesmoke",
    borderRadius: 0,
    margin: 2,
    border: "0.5px solid black",
    zIndex: "2",
    display: "inline-block",
};

ProgressBar.propTypes = {
    bgcolor: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};

    //Inner Part style of the Progress Bar
    const Childdiv = {
        height: "100%",
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 0,
        textAlign: "right",
    };

    //Add a text inside the inner part of the progress bar (style)
    // Remove the unused variable 'progresstext'
    // const progresstext = {
    //     padding: 10,
    //     color: "white",
    //     fontWeight: 900,
    // };

    return (
        <div>
            {/* Assign a name of the progress bar  */}
            <div
                style={{
                    display: "inline-block",
                    marginRight: "10px",
                    fontSize: "0.6rem",
                }}
            >
                {name}
            </div>
            {/* The actual progress bar  */}
            <div style={Parentdiv}>
                <div style={Childdiv}></div>
            </div>
            {/* Assign a number to the progress bar  */}
            <div
                style={{
                    display: "inline-block",
                    marginLeft: "5px",
                    fontSize: "0.6rem",
                }}
            >
                {number}
            </div>
        </div>
    );
};

export default ProgressBar;
