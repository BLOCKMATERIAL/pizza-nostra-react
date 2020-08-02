import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader 
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            
        >
            <circle cx="133" cy="141" r="120" /> 
            <rect x="0" y="282" rx="3" ry="3" width="280" height="28" /> 
            <rect x="0" y="323" rx="6" ry="6" width="282" height="76" /> 
            <rect x="4" y="583" rx="0" ry="0" width="81" height="31" /> 
            <rect x="0" y="407" rx="19" ry="19" width="102" height="47" /> 
            <rect x="122" y="407" rx="20" ry="20" width="158" height="47" />
        </ContentLoader>
    )
}

export default LoadingBlock;
