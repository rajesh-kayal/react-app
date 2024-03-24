import React from "react";

const MenuCard = ({ menuData }) => {
    const myStyle = { color: "red" };
    return (
        <>
            {menuData.map((cruElem) => {
                const { id, name, image, description } = cruElem; // Corrected variable name and added 'image' to destructuring
                return (
                    <div className={"card-container"} key={id}>
                        <div className={"card"}>
                            <div className={"card-body"}>
                                <span className={"card-number card-circle subtle"}>{id}</span>
                                <span className={"card-author subtle"} style={myStyle}>{name}</span>
                                <h2 className={"card-title"}>{name}</h2>
                                <span className={"card-description subtle"}>
                                    {description}
                                </span>
                                <div className={"card-read"}>Read</div>
                            </div>
                            <img src={image} alt={"images"} className={"card-media"} width={"100px"} /> {/* Changed 'images' to 'image' */}
                            <span className={"card-tag subtle"}>Order Now</span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default MenuCard;
