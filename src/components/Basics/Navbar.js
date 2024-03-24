import React, { useState } from "react";

const Navbar = ({ filterItem, menuList }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        filterItem(category);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/"> Restaurant</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {menuList.map((curElem, index) => (
                            <li className="nav-item" key={index}>
                                <button
                                    className={`nav-link ${activeCategory === curElem ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(curElem)}
                                >
                                    {curElem}
                                    <div className="hover-effect"></div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
