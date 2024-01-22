function toggleStyles() {
    // Get the elements by their IDs
    var heading = document.getElementById("mainHeading");
    var paragraph = document.getElementById("mainParagraph");

    // Toggle the 'active' class on the elements
    heading.classList.toggle("active");
    paragraph.classList.toggle("active");
}
