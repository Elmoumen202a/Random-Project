// Array of video objects containing title, thumbnail, and description
const videos = [
    {
        title: "Sample Video 1",
        thumbnail: "https://via.placeholder.com/300x200",
        description: "This is a description for Sample Video 1."
    },
    {
        title: "Sample Video 2",
        thumbnail: "https://via.placeholder.com/300x200",
        description: "This is a description for Sample Video 2."
    },
    {
        title: "Sample Video 3",
        thumbnail: "https://via.placeholder.com/300x200",
        description: "This is a description for Sample Video 3."
    }
];

// Function to display videos on the webpage
function displayVideos(videos) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // Clear previous videos

    // Loop through each video and create its HTML structure
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video'); // Add class for styling
        
        // Set the inner HTML of the video element
        videoElement.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h2>${video.title}</h2>
            <p>${video.description}</p>
        `;
        
        // Append the video element to the container
        videoContainer.appendChild(videoElement);
    });
}

// Event listener for the search input
document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase(); // Get the search term and convert to lowercase
    // Filter videos based on the search term
    const filteredVideos = videos.filter(video => 
        video.title.toLowerCase().includes(searchTerm) || 
        video.description.toLowerCase().includes(searchTerm)
    );
    // Display the filtered videos
    displayVideos(filteredVideos);
});

// Initial display of all videos when the page loads
window.onload = function() {
    displayVideos(videos);
};
