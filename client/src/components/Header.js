import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export const Header = () => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">Blogger</span>
            <button className="navbar-toggler" type="button" onClick={() => setIsOpened(!isOpened)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={isOpened ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                <div className="navbar-nav">
                    <NavLink exact to="/posts" >
                        <span className="nav-item nav-link">Home</span>
                    </NavLink>
                    <NavLink exact to="/posts/create" >
                        <span className="nav-item nav-link">Create post</span>
                    </NavLink>
                </div>
            </div>
        </nav>

    )
}
