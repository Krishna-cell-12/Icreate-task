# CodeCraft - Mini Coding Platform

A modern, interactive coding platform where users can practice programming problems across different difficulty levels. Built with vanilla HTML, CSS, and JavaScript, featuring a sleek UI/UX design with glassmorphism effects and smooth animations.

## ✨ Features

### 🎯 Core Functionality
- **Multi-level Problem Selection**: Choose from Easy, Medium, and Hard difficulty levels
- **Interactive Code Editor**: Dark-themed code editor with syntax highlighting-friendly styling
- **Problem Library**: 9 carefully curated coding problems covering various algorithms and data structures
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices

### 🎨 UI/UX Excellence
- **Modern Glassmorphism Design**: Beautiful backdrop-filter effects with transparency
- **Smooth Animations**: Fade-in effects, hover animations, and smooth transitions
- **Intuitive Navigation**: Tab-based difficulty selection with visual feedback
- **Professional Styling**: Clean typography, consistent spacing, and modern color scheme
- **Interactive Elements**: Hover effects, loading animations, and smooth state transitions

### 🛠️ Technical Features
- **Vanilla JavaScript**: No external dependencies, pure JavaScript implementation
- **CSS Grid & Flexbox**: Modern layout techniques for perfect responsiveness
- **LocalStorage Alternative**: In-memory state management (Claude.ai compatible)
- **Simulated Code Execution**: Demo code runner with realistic feedback
- **Accessible Design**: Proper contrast ratios and semantic HTML structure

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation
1. **Clone or Download**: Get the HTML file from the repository
2. **Open in Browser**: Simply double-click the HTML file or open it in your preferred browser
3. **Start Coding**: No setup required - the platform is ready to use!

### Usage
1. **Select Difficulty**: Choose from Easy, Medium, or Hard tabs in the sidebar
2. **Pick a Problem**: Click on any problem from the list to load it
3. **Read Description**: Review the problem statement and examples
4. **Write Code**: Use the dark-themed code editor to write your solution
5. **Run Code**: Click "Run Code" to execute your solution (demo mode)
6. **Reset**: Use the "Reset" button to restore the starter code

## 📁 Project Structure

```
codecraft-platform/
│
├── index.html              # Main HTML file with embedded CSS and JS
├── README.md               # This file
└── assets/                 # (Optional) Additional assets
    └── screenshots/        # Platform screenshots
```

## 🔧 Customization

### Adding New Problems
To add new problems, modify the `problems` object in the JavaScript section:

```javascript
const problems = {
    'your-problem-id': {
        title: 'Your Problem Title',
        difficulty: 'Easy|Medium|Hard',
        description: 'Problem description here...',
        examples: [
            {
                input: 'Example input',
                output: 'Expected output',
                explanation: 'Optional explanation'
            }
        ],
        starterCode: `function yourFunction() {
    // Starter code here
}`
    }
};
```

### Styling Customization
The platform uses CSS custom properties for easy theming. Key variables include:

```css

/* Glassmorphism effect */
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.95);

/* Difficulty colors */
--easy-color: #10b981;
--medium-color: #f59e0b;
--hard-color: #ef4444;
```

## 📚 Problem Categories

### Easy Level
- **Two Sum**: Array manipulation and hash tables
- **Valid Palindrome**: String processing with two pointers
- **Reverse String**: Basic string manipulation

### Medium Level
- **Longest Substring Without Repeating Characters**: Sliding window technique
- **Group Anagrams**: Hash table and string sorting
- **Product of Array Except Self**: Array processing and prefix sums

### Hard Level
- **Median of Two Sorted Arrays**: Binary search on arrays
- **Trapping Rain Water**: Two pointers and stack techniques
- **Word Ladder**: BFS and graph traversal

## 🔧 Technical Implementation

### Architecture
- **Single Page Application**: All functionality in one HTML file
- **Component-Based JavaScript**: Modular functions for different features
- **Event-Driven Design**: Responsive user interactions
- **State Management**: In-memory state without external storage

### Browser Compatibility
- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+

### Performance Features
- **Optimized CSS**: Efficient selectors and minimal reflows
- **Smooth Animations**: Hardware-accelerated transforms
- **Lazy Loading**: Problems loaded on demand
- **Minimal JavaScript**: Lightweight vanilla JS implementation

## 🎨 Design System

### Color Palette
- **Primary**: `#667eea` to `#764ba2` (gradient)
- **Success**: `#10b981` (Easy)
