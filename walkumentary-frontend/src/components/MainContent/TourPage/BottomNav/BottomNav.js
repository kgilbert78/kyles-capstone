import "./BottomNav.scss"

export const BottomNav = (props) => {
    return (
        <div className="BottomNav">
            <nav className="navbarBottom navbar navbar-expand-lg navbar-light">
                <div className="audioControls container-fluid justify-content-center">
                    <a className="nav-link" href="#"><i className="fas fa-fast-backward"></i></a>
                    <a className="nav-link" href="#"><i className="fas fa-backward"></i></a>
                    {/* <a className="nav-link" href="#"><i className="fas fa-pause-circle"></i></a> */}
                    <a className="nav-link" href="#"><i className="fas fa-play-circle"></i></a>
                    <a className="nav-link" href="#"><i className="fas fa-forward"></i></a>
                    {/* <a className="nav-link" href="#"><i className="fas fa-fast-forward"></i></a> */}
                    <a className="nav-link" href="#"><i className="fas fa-volume-up"></i></a>
                </div>
            </nav>
        </div>
    );
};