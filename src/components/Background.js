const Background = ({ children, background }) => {
    return (
        <header className={background}>
            {children}

        </header>

    );
}

export default Background;

Background.defaultProps = {
    background: "defaultBackground"
}