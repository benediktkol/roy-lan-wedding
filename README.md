# Roy & Lan's Wedding Website

A beautiful wedding website featuring an interactive carousel, timeline, and RSVP form.

## Local Development Setup

### Prerequisites
- Git LFS (Large File Storage) for handling large image/GIF files
- Python 3 (for local development server)

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/roymiles/wedding.git
   cd wedding
   ```

2. **Install and setup Git LFS:**
   ```bash
   # Install Git LFS (if not already installed)
   brew install git-lfs  # On macOS
   # or apt-get install git-lfs  # On Ubuntu
   
   # Initialize Git LFS for this repository
   git lfs install
   
   # Download the actual large files (GIFs)
   git lfs checkout
   ```

3. **Start local development server:**
   ```bash
   python3 -m http.server 8000
   ```

4. **View the website:**
   Open your browser to `http://localhost:8000`

### Important Notes

- **Git LFS is required** - The carousel images are stored in Git LFS. Without running `git lfs checkout`, you'll only see text pointers instead of actual images.
- **Local server needed** - Opening the `index.html` file directly in browser won't work properly due to CORS restrictions.

### Features

- **Interactive Carousel** - Love story timeline with GIF backgrounds
- **Responsive Timeline** - Wedding day schedule with elegant design  
- **Collapsible FAQs** - Common questions with smooth animations
- **RSVP Form** - Embedded Fillout form for guest responses
- **Mobile Optimized** - Responsive design for all devices

### Tech Stack

- HTML5, CSS3, JavaScript
- Git LFS for large file management
- Fillout for RSVP form embedding
- Custom carousel and FAQ interactions
