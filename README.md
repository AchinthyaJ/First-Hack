# First Hack - Cybersecurity News Platform

A modern, responsive web application that provides the latest cybersecurity, hacking, and technology news. Built with vanilla JavaScript and featuring a beautiful, accessible design.

## 🚀 Features

- **Real-time News**: Fetches latest articles from GNews API
- **Multiple Categories**: 11+ specialized tech categories including:
  - Hacking News
  - Cybersecurity Updates
  - Smartphone Technology
  - Tech Scams & Fraud
  - Gaming Technology
  - Blockchain & Cryptocurrency
  - AI & Machine Learning
  - And more...

- **Interactive Elements**:
  - Hacker Typer simulation
  - Password cracker demo
  - Community solutions sharing
  - Smooth animations and transitions

- **Modern Design**:
  - Dark theme with gradient backgrounds
  - Glassmorphism effects
  - Responsive layout for all devices
  - Accessibility-focused design

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- A GNews API key (get one at [gnews.io](https://gnews.io/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Incharajayaram/First-Hack.git
cd First-Hack
```

2. Install dependencies:
```bash
npm install
```

3. Get your GNews API key:
   - Visit [gnews.io](https://gnews.io/)
   - Sign up for a free account
   - Get your API key

4. Update the API configuration:
   - Open `public/script.js`
   - Replace `YOUR_GNEWS_API_KEY` with your actual API key:
   ```javascript
   const GNEWS_API_KEY = 'your_actual_api_key_here';
   ```

5. Start the development server:
```bash
npm start
```

6. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
First-Hack/
├── public/
│   ├── index.html          # Main homepage
│   ├── categories.html     # Categories page
│   ├── solutions.html      # Community solutions
│   ├── HAckType.html      # Hacker typer simulator
│   ├── script.js          # Main JavaScript functionality
│   └── Images/            # Logo and icon assets
├── routes/                # Express.js routes (if using backend)
├── server.js             # Express server configuration
├── package.json          # Project dependencies
└── README.md            # This file
```

## 🎨 Design Features

- **Color Scheme**: Modern dark theme with purple/pink gradients
- **Typography**: Inter font family for excellent readability
- **Animations**: Smooth hover effects, loading spinners, and page transitions
- **Responsive**: Mobile-first design that works on all screen sizes
- **Accessibility**: Proper focus states, semantic HTML, and keyboard navigation

## 🔧 API Configuration

The application uses GNews API for fetching news articles. For development/demo purposes, it includes mock data as a fallback. To use real data:

1. Get your API key from [gnews.io](https://gnews.io/)
2. Update the `GNEWS_API_KEY` constant in `script.js`
3. Uncomment the actual API call code in the `fetchGNewsArticles` function

## 🌐 Deployment

The application is designed to be easily deployable to various platforms:

- **Netlify**: Simply drag and drop the `public` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Enable Pages in repository settings
- **Traditional hosting**: Upload the `public` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Achinthya J (Incharajayaram)**
- GitHub: [@Incharajayaram](https://github.com/Incharajayaram)

## 🙏 Acknowledgments

- GNews API for providing news data
- Font Awesome for icons
- Google Fonts for typography
- The cybersecurity community for inspiration

---

**Note**: This application is for educational and informational purposes. Always follow ethical guidelines when exploring cybersecurity topics.