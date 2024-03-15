import React from "react";

function Card({ imageUrl, title, content }) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                <div className="bg-cover h-48" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div className="p-4 flex-1 flex flex-col">
                    <h3 className="mb-4 text-2xl">{title}</h3>
                    <div className="mb-4 text-grey-darker text-sm flex-1">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
