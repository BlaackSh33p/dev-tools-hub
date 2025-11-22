// Developer Tools Data
const developerTools = [
    {
        id: 1,
        name: "Visual Studio Code",
        category: "ide",
        description: "Free source-code editor with built-in Git support, debugging, and extensions.",
        features: ["IntelliSense", "Debugging", "Git Integration", "Extensions Marketplace"],
        affiliateLink: "https://code.visualstudio.com/?utm_source=devtoolshub",
        officialLink: "https://code.visualstudio.com",
        icon: "💻",
        
    },
    {
        id: 2,
        name: "React",
        category: "framework",
        description: "A JavaScript library for building user interfaces, maintained by Facebook.",
        features: ["Component-Based", "Virtual DOM", "Reusable Components", "Large Ecosystem"],
        affiliateLink: "https://reactjs.org/?utm_source=devtoolshub",
        officialLink: "https://reactjs.org",
        icon: "⚛️"
    },
    {
        id: 3,
        name: "Postman",
        category: "api",
        description: "API platform for building and using APIs with collaboration features.",
        features: ["API Testing", "Automation", "Documentation", "Mock Servers"],
        affiliateLink: "https://www.postman.com/?utm_source=devtoolshub",
        officialLink: "https://www.postman.com",
        icon: "📮"
    },
    {
        id: 4,
        name: "MongoDB",
        category: "database",
        description: "NoSQL database program using JSON-like documents with optional schemas.",
        features: ["Document Database", "Scalable", "Flexible Schema", "Cloud Atlas"],
        affiliateLink: "https://www.mongodb.com/cloud/atlas?utm_source=devtoolshub",
        officialLink: "https://www.mongodb.com",
        icon: "🍃"
    },
    {
        id: 5,
        name: "Vercel",
        category: "deployment",
        description: "Platform for frontend frameworks and static sites with optimal workflow.",
        features: ["Zero Configuration", "Global CDN", "Automatic HTTPS", "CI/CD"],
        affiliateLink: "https://vercel.com/signup?utm_source=devtoolshub",
        officialLink: "https://vercel.com",
        icon: "▲"
    },
    {
        id: 6,
        name: "GitHub Copilot",
        category: "productivity",
        description: "AI pair programmer that helps you write code faster and with less work.",
        features: ["AI Assistance", "Multi-language", "Context Aware", "VS Code Integration"],
        affiliateLink: "https://github.com/features/copilot?utm_source=devtoolshub",
        officialLink: "https://github.com/features/copilot",
        icon: "🤖"
    },
    {
        id: 7,
        name: "Docker",
        category: "deployment",
        description: "Platform to build, share, and run applications with containers.",
        features: ["Containerization", "Portable", "Scalable", "Isolated Environments"],
        affiliateLink: "https://www.docker.com/?utm_source=devtoolshub",
        officialLink: "https://www.docker.com",
        icon: "🐳"
    },
    {
        id: 8,
        name: "Figma",
        category: "productivity",
        description: "Collaborative web application for interface design with real-time collaboration.",
        features: ["Real-time Collaboration", "Prototyping", "Design Systems", "Plugins"],
        affiliateLink: "https://www.figma.com/?utm_source=devtoolshub",
        officialLink: "https://www.figma.com",
        icon: "🎨"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayTools(developerTools);
    initializeAdSense();
});

// Display tools in grid
function displayTools(tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';

    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-image">
                ${tool.icon}
            </div>
            <div class="tool-content">
                <h3>${tool.name}</h3>
                <p class="tool-description">${tool.description}</p>
                <ul class="tool-features">
                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="tool-links">
                    <a href="${tool.affiliateLink}" class="affiliate-link" target="_blank" rel="noopener">
                        Get Started
                    </a>
                    <a href="${tool.officialLink}" class="official-link" target="_blank" rel="noopener">
                        Official Site
                    </a>
                </div>
            </div>
        `;
        toolsGrid.appendChild(toolCard);
    });
}

// Search functionality
function searchTools() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredTools = developerTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.category.toLowerCase().includes(searchTerm)
    );
    displayTools(filteredTools);
}

// Filter by category
function filterTools(category) {
    const filteredTools = developerTools.filter(tool => tool.category === category);
    displayTools(filteredTools);
    
    // Scroll to tools section
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    
    // In a real application, you would send this to your backend
    // For now, we'll just show a success message
    alert(`Thank you for subscribing with ${email}! You'll receive our next update.`);
    document.getElementById('email').value = '';
    
    // Here you would typically make a fetch request to your email service
    // Example:
    // fetch('/api/subscribe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email: email })
    // });
}

// AdSense initialization
function initializeAdSense() {
    // AdSense is already included in the HTML head
    // This function can be used for additional ad management
    console.log('AdSense initialized');
}

// Add search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchTools();
    }
});