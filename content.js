window.onload = () => {    
    // delay to ensure the DOM is fully loaded and rendered
    console.log("Window fully loaded");
    
    const links = document.querySelectorAll('a');
    console.log("Number of <a> tags found:", links.length);

    if (links.length > 6) {
        const secondLink = links[6]; // check if changing the logic to find an archive.ph url which isn't the original works
        console.log("Clicking the 7th <a> tag:", secondLink);
        secondLink.click();
    } else {
        console.log("No Results :(");
    }
};
