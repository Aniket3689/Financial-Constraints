
// JSON data for blogs
const blogs = [
  {
    title: "Exploring OTS Funding: A Lifeline for Troubled Businesses",
    date: "19-12-2024",
    description: "In the challenging world of business, companies often face financial difficulties...",
    image: "./image/blog1.jpg",
    content: "Full content of the OTS funding blog. This is where the detailed blog content would go.",
  },
  {
    title: "Insights into the MCS Act and Its Relevance to Businesses Today",
    date: "18-12-2024",
    description: "The MCS Act holds critical implications for cooperative societies...",
    image: "./image/blog2.jpg",
    content: "Full content of the MCS Act blog. This is where the detailed blog content would go.",
  },
  {
    title: "Insights into the MCS Act and Its Relevance to Businesses Today",
    date: "18-12-2024",
    description: "The MCS Act holds critical implications for cooperative societies...",
    image: "./image/blog3.jpg",
    content: "Full content of the MCS Act blog. This is where the detailed blog content would go.",
  }
  
];

const container = document.getElementById('blog-container');

// Function to render blogs
blogs.forEach((blog, index) => {
  const blogCard = document.createElement('div');
  blogCard.classList.add('blog-card');
  blogCard.onclick = () => showBlogDetail(index);

  blogCard.innerHTML = `
    <img src="${blog.image}" alt="${blog.LightScotty}" class="blog-image">
    <div class="blog-content">
      <h3 class="blog-title">${blog.title}</h3>
      <p class="blog-date">${blog.date}</p>
      <p class="blog-description">${blog.description}</p>
      <a href="javascript:void(0)" class="read-more">MORE DETAILS</a>
    </div>
  `;

  container.appendChild(blogCard);
});

// Function to show blog details
function showBlogDetail(index) {
  const blog = blogs[index];
  document.body.innerHTML = `
    <div style="padding: 20px; max-width: 800px; margin: auto; background: #fff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <h1 style="font-size: 24px; margin-bottom: 10px;">${blog.title}</h1>
      <p style="color: #888; margin-bottom: 20px;">Published on: ${blog.date}</p>
      <img src="${blog.image}" alt="${blog.title}" style="width: 100%; border-radius: 10px; margin-bottom: 20px;" loading="lazy">
      <p style="font-size: 16px; color: #555;">${blog.content}</p>
      <button onclick="location.reload()" style="padding: 10px 20px; background: #ffcc00; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Back to Blogs</button>
    </div>
  `;
}
