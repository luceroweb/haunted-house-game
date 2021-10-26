import React, { useState } from 'react';

const PageNumber = () => {
    const [pageNumber, setPageNumber] = useState(1);
    let finalNumber = pageNumber;
    let localStorageResult = localStorage.getItem('page')
    localStorage.setItem('page', finalNumber)
    
    return (
        <div>
            <div>Page {localStorageResult} / 3</div>
        </div>
    )
}

export default PageNumber