import React from "react";
import PropTypes from "prop-types";



function Layout({title, description, keywords, image}) {
    let Blah = <img className="w-full h-48" src="/images/bytes_center.svg" alt="Sunset in the mountains" />
    switch (title) {
        case 'Community':
            Blah = <img className="w-full h-48" src="/images/bytes_center.svg" alt="Community" />
            break;
        case 'Consulting':
            Blah = <img className="w-full h-48" src="/images/undraw_developer.png" alt="Consulting" />
            break;
        case 'Teaching':
            Blah = <img className="w-full h-48" src="/images/undraw_teaching.png" alt="Teaching" />
            break;
        default:
            Blah = <img className="w-full h-48" src="/images/undraw_developer.png" alt="Sunset in the mountains" />
      }

    const listItems = keywords.map((keyword) =>  
    <span key={keyword.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{keyword}</span>
    );

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <img className="w-full h-48" src={image} alt="Community" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                {description}
                </p>
            </div>
            <div className="px-6 py-4">
                {listItems}
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span> */}
            </div>
        </div>
  );
}

Layout.defaultProps = {
    lang: `en`,
    title: ``,
    image: ``,
    description: ``,
    keywords: [],
};

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
};

export default Layout;