// Application Data
const appData = {
  "personal_info": {
    "name": "Philipp Hahn",
    "birth_date": "09. September 1993",
    "birth_place": "Straubing",
    "nationality": "deutsch",
    "email": "philipp_hahn93@yahoo.de"
  },
  "current_position": {
    "title": "Linux System Engineer",
    "company": "Manage Now GmbH",
    "location": "München",
    "start_date": "01.01.2025",
    "responsibilities": [
      "Administration diverser Serversysteme (Redhat, Suse, Debian Server)",
      "Automatisierung von System- und Infrastrukturprozessen mit Ansible und Terraform",
      "CI/CD-Pipelines (Jenkins, Bitbucket, Packer)",
      "Kubernetes-Umgebungen implementieren und skalieren",
      "Container-Technologien (Docker, Podman, OpenShift)",
      "Microsoft Azure Server und Cloud-Dienste",
      "IT-Sicherheit (Patch-Management, Firewalls, Security Audits)",
      "Scripting und Automatisierung (Bash, Python)"
    ]
  },
  "timeline": [
    {
      "age": 5,
      "year": 1998,
      "title": "Erster Gameboy",
      "description": "Erste Berührung mit Gaming - der Moment, der alles veränderte",
      "icon": "🎮",
      "category": "gaming"
    },
    {
      "age": 6,
      "year": 1999,
      "title": "Mega Man auf Windows 95",
      "description": "Erstes technisches Problem lösen - der Beginn der IT-Leidenschaft",
      "icon": "💻",
      "category": "tech"
    },
    {
      "age": 18,
      "year": 2011,
      "title": "Beginn Ausbildung Zerspanungsmechaniker",
      "description": "Erste berufliche Ausbildung mit Auszeichnung abgeschlossen",
      "icon": "🔧",
      "category": "education"
    },
    {
      "age": 22,
      "year": 2015,
      "title": "Studium Technische Informatik",
      "description": "Einstieg in die IT-Welt an der OTH Regensburg",
      "icon": "🎓",
      "category": "education"
    },
    {
      "age": 24,
      "year": 2017,
      "title": "Werksstudent bei Continental",
      "description": "Erste praktische IT-Erfahrungen sammeln",
      "icon": "💼",
      "category": "work"
    },
    {
      "age": 24,
      "year": 2017,
      "title": "Studium Medizinische Informatik",
      "description": "Spezialisierung in der Informatik",
      "icon": "🎓",
      "category": "education"
    },
    {
      "age": 27,
      "year": 2020,
      "title": "IT-Systemadministrator",
      "description": "Einstieg als Linux Administrator bei 12Logistics",
      "icon": "🐧",
      "category": "work"
    },
    {
      "age": 28,
      "year": 2021,
      "title": "IT-Leitung",
      "description": "Beförderung zur Teamführung",
      "icon": "👥",
      "category": "leadership"
    },
    {
      "age": 29,
      "year": 2022,
      "title": "IT-Specialist bei Fujitsu",
      "description": "Erweiterung der Enterprise-IT Kenntnisse",
      "icon": "🏢",
      "category": "work"
    },
    {
      "age": 31,
      "year": 2025,
      "title": "Linux System Engineer",
      "description": "Aktuelle Position bei Manage Now GmbH",
      "icon": "⚙️",
      "category": "work"
    }
  ],
  "skill_tree": {
    "Linux Administration": {
      "level": 95,
      "category": "System Administration",
      "sub_skills": ["RedHat", "SUSE", "Debian", "Ubuntu"],
      "icon": "🐧"
    },
    "Container Technologies": {
      "level": 90,
      "category": "DevOps",
      "sub_skills": ["Docker", "Podman", "Kubernetes", "OpenShift"],
      "icon": "📦"
    },
    "Cloud Computing": {
      "level": 85,
      "category": "Cloud",
      "sub_skills": ["Microsoft Azure", "Cloud Architecture", "AZ-900"],
      "icon": "☁️"
    },
    "Automation & Scripting": {
      "level": 88,
      "category": "Development",
      "sub_skills": ["Ansible", "Terraform", "Python", "Bash"],
      "icon": "🤖"
    },
    "CI/CD Pipelines": {
      "level": 82,
      "category": "DevOps",
      "sub_skills": ["Jenkins", "Bitbucket", "Packer", "GitLab"],
      "icon": "🔄"
    },
    "Database Administration": {
      "level": 80,
      "category": "Data Management",
      "sub_skills": ["Oracle SQL", "MySQL", "MS SQL", "MongoDB"],
      "icon": "🗄️"
    },
    "Security & Monitoring": {
      "level": 85,
      "category": "Security",
      "sub_skills": ["Firewalls", "Security Audits", "Prometheus", "Grafana"],
      "icon": "🛡️"
    },
    "Team Leadership": {
      "level": 75,
      "category": "Management",
      "sub_skills": ["Project Management", "Team Führung", "IT Strategy"],
      "icon": "👥"
    },
    "Programming": {
      "level": 78,
      "category": "Development",
      "sub_skills": ["C", "Python", "HTML/CSS", "JavaScript"],
      "icon": "💻"
    },
    "Gaming Passion": {
      "level": 100,
      "category": "Personal",
      "sub_skills": ["E-Sports", "Game Hardware", "Streaming", "Game Design"],
      "icon": "🎮"
    }
  },
  "achievements": [
    {
      "id": "explorer",
      "title": "Explorer",
      "description": "Visited all sections of the portfolio",
      "icon": "🗺️",
      "unlocked": false,
      "progress": 0,
      "target": 7
    },
    {
      "id": "skill_master",
      "title": "Skill Master",
      "description": "Explored all skills in the skill tree",
      "icon": "🏆",
      "unlocked": false,
      "progress": 0,
      "target": 10
    },
    {
      "id": "time_traveler",
      "title": "Time Traveler",
      "description": "Reviewed the complete career timeline",
      "icon": "⏰",
      "unlocked": false,
      "progress": 0,
      "target": 1
    },
    {
      "id": "theme_switcher",
      "title": "Style Master",
      "description": "Tried all different themes",
      "icon": "🎨",
      "unlocked": false,
      "progress": 0,
      "target": 3
    },
    {
      "id": "polyglot",
      "title": "Polyglot",
      "description": "Switched between languages",
      "icon": "🌍",
      "unlocked": false,
      "progress": 0,
      "target": 2
    },
    {
      "id": "chatbot_master",
      "title": "Conversation Master",
      "description": "Had a conversation with the AI assistant",
      "icon": "🤖",
      "unlocked": false,
      "progress": 0,
      "target": 5
    },
    {
      "id": "completionist",
      "title": "Completionist",
      "description": "Unlocked all achievements",
      "icon": "👑",
      "unlocked": false,
      "progress": 0,
      "target": 6
    }
  ],
  "translations": {
    "en": {
      "hero_title": "Linux System Administrator",
      "hero_subtitle": "Gaming Passion meets Technical Excellence",
      "start_adventure": "Start Adventure",
      "about_section": "About Me",
      "skills_section": "Skill Tree",
      "timeline_section": "Career Journey",
      "achievements_section": "Achievements",
      "contact_section": "Contact",
      "download_section": "Downloads",
      "theme_dark": "Dark Mode",
      "theme_gaming": "Gaming Mode",
      "theme_business": "Business Mode",
      "language_de": "Deutsch",
      "language_en": "English"
    },
    "de": {
      "hero_title": "Linux System Administrator",
      "hero_subtitle": "Gaming-Leidenschaft trifft technische Exzellenz",
      "start_adventure": "Abenteuer starten",
      "about_section": "Über mich",
      "skills_section": "Skill Tree",
      "timeline_section": "Karriereweg",
      "achievements_section": "Erfolge",
      "contact_section": "Kontakt",
      "download_section": "Downloads",
      "theme_dark": "Dark Mode",
      "theme_gaming": "Gaming Mode",
      "theme_business": "Business Mode",
      "language_de": "Deutsch",
      "language_en": "English"
    }
  }
};

// Global Application State
class AppState {
  constructor() {
    this.currentLanguage = 'de';
    this.currentTheme = 'dark';
    this.visitedSections = new Set();
    this.exploredSkills = new Set();
    this.themesUsed = new Set(['dark']);
    this.languagesUsed = new Set(['de']);
    this.chatMessages = 0;
    this.achievements = [...appData.achievements];
    this.highContrast = false;
    this.largeText = false;
  }

  updateProgress() {
    this.updateAchievement('explorer', this.visitedSections.size);
    this.updateAchievement('skill_master', this.exploredSkills.size);
    this.updateAchievement('theme_switcher', this.themesUsed.size);
    this.updateAchievement('polyglot', this.languagesUsed.size);
    this.updateAchievement('chatbot_master', this.chatMessages);
    
    // Check completionist
    const unlockedCount = this.achievements.filter(a => a.unlocked && a.id !== 'completionist').length;
    this.updateAchievement('completionist', unlockedCount);
  }

  updateAchievement(id, progress) {
    const achievement = this.achievements.find(a => a.id === id);
    if (achievement && !achievement.unlocked) {
      achievement.progress = Math.min(progress, achievement.target);
      if (achievement.progress >= achievement.target) {
        achievement.unlocked = true;
        this.showAchievementUnlocked(achievement);
      }
    }
  }

  showAchievementUnlocked(achievement) {
    // Show achievement popup
    const popup = document.getElementById('achievement-popup');
    const title = document.getElementById('achievement-title');
    const description = document.getElementById('achievement-description');
    
    if (popup && title && description) {
      title.textContent = achievement.title;
      description.textContent = achievement.description;
      popup.classList.add('show');
      
      setTimeout(() => {
        popup.classList.remove('show');
      }, 3000);
    }
    
    // Show toast notification
    this.showAchievementToast(achievement.title);
  }

  showAchievementToast(title) {
    const toast = document.getElementById('achievement-toast');
    if (toast) {
      const text = toast.querySelector('.toast-text');
      if (text) {
        text.textContent = `Achievement unlocked: ${title}!`;
      }
      toast.classList.add('show');
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4000);
    }
  }
}

// Initialize application state
const appState = new AppState();

// Chatbot responses
const chatbotResponses = {
  greeting: [
    "Hallo! Ich bin hier, um Fragen zu Philipp Hahn zu beantworten. Was möchtest du wissen?",
    "Hi! Frag mich alles über Philipps Erfahrungen, Skills oder Motivation!"
  ],
  skills: [
    "Philipp hat über 5 Jahre Erfahrung als Linux Administrator mit Expertise in RedHat, SUSE und Debian. Er beherrscht auch Container-Technologien wie Docker und Kubernetes.",
    "Seine Hauptstärken liegen in der Linux-Administration, DevOps, Cloud Computing und Automatisierung mit Ansible und Terraform."
  ],
  experience: [
    "Philipp hat bei verschiedenen Unternehmen wie Continental, 12Logistics und Fujitsu gearbeitet und dabei umfassende IT-Erfahrungen gesammelt.",
    "Er hat sowohl als IT-Administrator als auch als Teamleiter gearbeitet und bringt Leadership-Erfahrung mit."
  ],
  gaming: [
    "Philipps Leidenschaft für Gaming begann mit 5 Jahren beim ersten Gameboy. Diese Begeisterung für interaktive Welten führte ihn zur IT.",
    "Gaming ist nicht nur ein Hobby für Philipp - es hat seine technische Neugier geweckt und sein Verständnis für komplexe Systeme geprägt."
  ],
  cipsoft: [
    "Philipp sieht Cipsoft als den perfekten Ort, wo seine Gaming-Leidenschaft und technische Expertise aufeinandertreffen.",
    "Als Schöpfer von Tibia verkörpert Cipsoft für Philipp deutsche Gaming-Exzellenz und innovative Technologie."
  ],
  motivation: [
    "Philipps Motivation kommt aus seiner lebenslangen Leidenschaft für Gaming und dem Wunsch, die Technik hinter großartigen Spielerlebnissen zu verstehen.",
    "Er möchte seine Linux-Expertise nutzen, um die technische Infrastruktur zu schaffen, die Millionen von Spielern begeistert."
  ],
  default: [
    "Das ist eine interessante Frage! Kannst du spezifischer fragen zu Philipps Skills, Erfahrungen oder seiner Motivation für Cipsoft?",
    "Erzähl mir mehr darüber, was du wissen möchtest - über seine technischen Fähigkeiten, Gaming-Leidenschaft oder Karriere?"
  ]
};

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Theme Management
class ThemeManager {
  static switchTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-color-scheme', theme === 'business' ? 'light' : 'dark');
    
    // Update button states
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    
    appState.currentTheme = theme;
    appState.themesUsed.add(theme);
    appState.updateProgress();
  }
}

// Language Management
class LanguageManager {
  static switchLanguage(lang) {
    appState.currentLanguage = lang;
    appState.languagesUsed.add(lang);
    
    // Update button states
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = appData.translations[lang][key];
      if (translation) {
        element.textContent = translation;
      }
    });
    
    appState.updateProgress();
  }
}

// Typing Effect
class TypingEffect {
  static typeText(element, text, speed = 100) {
    if (!element) return;
    element.textContent = '';
    let i = 0;
    
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };
    
    type();
  }
}

// Scroll Animations
class ScrollAnimations {
  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      { threshold: 0.3 }
    );
    
    this.init();
  }
  
  init() {
    // Observe story sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => {
      this.observer.observe(section);
    });
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
      this.observer.observe(item);
    });
    
    // Update progress on scroll
    window.addEventListener('scroll', debounce(this.updateProgress.bind(this), 100));
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Track section visits
        const sectionName = entry.target.getAttribute('data-section');
        if (sectionName) {
          appState.visitedSections.add(sectionName);
          appState.updateProgress();
        }
        
        // Animate level bars
        const levelFill = entry.target.querySelector('.level-fill');
        if (levelFill) {
          const level = levelFill.getAttribute('data-level');
          setTimeout(() => {
            levelFill.style.width = `${level}%`;
          }, 500);
        }
        
        // Animate skill progress bars
        const skillProgress = entry.target.querySelectorAll('.skill-progress');
        skillProgress.forEach((bar, index) => {
          const percentageElement = bar.parentElement.querySelector('.skill-percentage');
          if (percentageElement) {
            const level = percentageElement.textContent.replace('%', '');
            setTimeout(() => {
              bar.style.width = `${level}%`;
            }, index * 200);
          }
        });
      }
    });
  }
  
  updateProgress() {
    const scrolled = window.pageYOffset;
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxHeight) * 100;
    const progressBar = document.getElementById('story-progress');
    if (progressBar) {
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    }
  }
}

// Skill Tree
class SkillTree {
  static render() {
    const skillTree = document.getElementById('skill-tree');
    if (!skillTree) return;
    
    skillTree.innerHTML = '';
    
    Object.entries(appData.skill_tree).forEach(([skillName, skill]) => {
      const skillNode = document.createElement('div');
      skillNode.className = 'skill-node';
      skillNode.setAttribute('tabindex', '0');
      
      skillNode.innerHTML = `
        <span class="skill-icon">${skill.icon}</span>
        <h3 class="skill-name">${skillName}</h3>
        <p class="skill-category">${skill.category}</p>
        <div class="skill-level">
          <div class="skill-progress" style="width: 0%"></div>
        </div>
        <span class="skill-percentage">${skill.level}%</span>
        <div class="skill-details">
          <h4>Sub-Skills:</h4>
          <ul class="sub-skills">
            ${skill.sub_skills.map(subSkill => `<li>${subSkill}</li>`).join('')}
          </ul>
        </div>
      `;
      
      // Add hover/focus tracking
      skillNode.addEventListener('mouseenter', () => {
        appState.exploredSkills.add(skillName);
        appState.updateProgress();
      });
      
      skillNode.addEventListener('focus', () => {
        appState.exploredSkills.add(skillName);
        appState.updateProgress();
      });
      
      skillTree.appendChild(skillNode);
    });
  }
}

// Timeline
class Timeline {
  static render() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    appData.timeline.forEach((item, index) => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      
      timelineItem.innerHTML = `
        <div class="timeline-content">
          <div class="timeline-year">${item.year}</div>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-description">${item.description}</p>
        </div>
        <div class="timeline-icon">${item.icon}</div>
      `;
      
      timeline.appendChild(timelineItem);
    });
    
    // Mark timeline as viewed when scrolled into view
    const timelineSection = document.getElementById('timeline');
    if (timelineSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            appState.updateAchievement('time_traveler', 1);
          }
        });
      });
      observer.observe(timelineSection);
    }
  }
}

// Achievements System
class AchievementsSystem {
  static render() {
    const grid = document.getElementById('achievements-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    appState.achievements.forEach(achievement => {
      const card = document.createElement('div');
      card.className = `achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`;
      
      const progressText = achievement.unlocked ? 
        'Completed!' : 
        `${achievement.progress}/${achievement.target}`;
      
      card.innerHTML = `
        <span class="achievement-icon-large">${achievement.icon}</span>
        <h3 class="achievement-title">${achievement.title}</h3>
        <p class="achievement-desc">${achievement.description}</p>
        <div class="achievement-progress">${progressText}</div>
      `;
      
      grid.appendChild(card);
    });
  }
  
  static updateDisplay() {
    this.render();
  }
}

// Chatbot
class Chatbot {
  constructor() {
    this.isOpen = false;
    this.init();
  }
  
  init() {
    const trigger = document.getElementById('chatbot-trigger');
    const closeBtn = document.getElementById('chatbot-close');
    const sendBtn = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');
    
    if (trigger) {
      trigger.addEventListener('click', () => this.toggle());
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
    if (sendBtn) {
      sendBtn.addEventListener('click', () => this.sendMessage());
    }
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.sendMessage();
      });
    }
  }
  
  toggle() {
    this.isOpen = !this.isOpen;
    const window = document.getElementById('chatbot-window');
    const badge = document.getElementById('chatbot-badge');
    const input = document.getElementById('chatbot-input');
    
    if (window) {
      window.classList.toggle('open', this.isOpen);
    }
    if (this.isOpen) {
      if (input) input.focus();
      if (badge) badge.style.display = 'none';
    }
  }
  
  close() {
    this.isOpen = false;
    const window = document.getElementById('chatbot-window');
    if (window) {
      window.classList.remove('open');
    }
  }
  
  sendMessage() {
    const input = document.getElementById('chatbot-input');
    if (!input) return;
    
    const message = input.value.trim();
    
    if (message) {
      this.addMessage(message, 'user-message');
      input.value = '';
      
      // Simulate typing delay
      setTimeout(() => {
        const response = this.generateResponse(message);
        this.addMessage(response, 'bot-message');
      }, 1000);
      
      appState.chatMessages++;
      appState.updateProgress();
    }
  }
  
  addMessage(text, className) {
    const messages = document.getElementById('chatbot-messages');
    if (!messages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = `<div class="message-text">${text}</div>`;
    
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
  }
  
  generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('können') || lowerMessage.includes('fähigkeit')) {
      return getRandomItem(chatbotResponses.skills);
    }
    if (lowerMessage.includes('erfahrung') || lowerMessage.includes('experience') || lowerMessage.includes('arbeit')) {
      return getRandomItem(chatbotResponses.experience);
    }
    if (lowerMessage.includes('gaming') || lowerMessage.includes('spiel') || lowerMessage.includes('gameboy')) {
      return getRandomItem(chatbotResponses.gaming);
    }
    if (lowerMessage.includes('cipsoft') || lowerMessage.includes('tibia')) {
      return getRandomItem(chatbotResponses.cipsoft);
    }
    if (lowerMessage.includes('motivation') || lowerMessage.includes('warum') || lowerMessage.includes('why')) {
      return getRandomItem(chatbotResponses.motivation);
    }
    if (lowerMessage.includes('hallo') || lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
      return getRandomItem(chatbotResponses.greeting);
    }
    
    return getRandomItem(chatbotResponses.default);
  }
}

// Contact Form
class ContactForm {
  static init() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      if (!submitBtn) return;
      
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Wird gesendet...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.textContent = 'Nachricht gesendet! ✓';
        submitBtn.style.background = 'var(--color-success)';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          form.reset();
        }, 3000);
      }, 2000);
    });
  }
}

// Accessibility Features
class AccessibilityManager {
  static init() {
    const fontSizeBtn = document.getElementById('font-size-btn');
    const contrastBtn = document.getElementById('contrast-btn');
    
    if (fontSizeBtn) {
      fontSizeBtn.addEventListener('click', this.toggleFontSize);
    }
    if (contrastBtn) {
      contrastBtn.addEventListener('click', this.toggleHighContrast);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeyboardNavigation);
  }
  
  static toggleFontSize() {
    appState.largeText = !appState.largeText;
    document.body.classList.toggle('large-text', appState.largeText);
  }
  
  static toggleHighContrast() {
    appState.highContrast = !appState.highContrast;
    document.body.classList.toggle('high-contrast', appState.highContrast);
  }
  
  static handleKeyboardNavigation(e) {
    // Space bar to scroll
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
      window.scrollBy(0, window.innerHeight * 0.8);
    }
    
    // Arrow keys for skill tree navigation
    if (e.target.classList.contains('skill-node')) {
      const skills = [...document.querySelectorAll('.skill-node')];
      const currentIndex = skills.indexOf(e.target);
      let newIndex = currentIndex;
      
      switch (e.key) {
        case 'ArrowRight':
          newIndex = Math.min(currentIndex + 1, skills.length - 1);
          break;
        case 'ArrowLeft':
          newIndex = Math.max(currentIndex - 1, 0);
          break;
        case 'ArrowDown':
          newIndex = Math.min(currentIndex + 3, skills.length - 1);
          break;
        case 'ArrowUp':
          newIndex = Math.max(currentIndex - 3, 0);
          break;
      }
      
      if (newIndex !== currentIndex) {
        e.preventDefault();
        skills[newIndex].focus();
      }
    }
  }
}

// Parallax Effects
class ParallaxManager {
  static init() {
    window.addEventListener('scroll', debounce(this.updateParallax, 16));
  }
  
  static updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${rate}px)`;
    }
    
    // Parallax for particles
    const particles = document.querySelector('.particles');
    if (particles) {
      particles.style.transform = `translate3d(${-scrolled * 0.2}px, ${-scrolled * 0.3}px, 0)`;
    }
  }
}

// Application Initialization
class App {
  static init() {
    // Remove loading screen immediately
    this.hideLoadingScreen();
    
    // Initialize all components
    this.initializeThemes();
    this.initializeLanguages();
    this.initializeAccessibility();
    this.initializeScrollAnimations();
    this.initializeComponents();
    this.initializeEventListeners();
    this.initializeParallax();
    
    // Start typing animation
    setTimeout(() => {
      const typingText = document.querySelector('.typing-text');
      if (typingText) {
        TypingEffect.typeText(typingText, appData.personal_info.name, 150);
      }
    }, 500);
    
    console.log('🎮 Philipp Hahn Portfolio - Ready for Adventure!');
  }
  
  static hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
      }, 1000);
    }
  }
  
  static initializeThemes() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        ThemeManager.switchTheme(btn.dataset.theme);
      });
    });
  }
  
  static initializeLanguages() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        LanguageManager.switchLanguage(btn.dataset.lang);
      });
    });
  }
  
  static initializeAccessibility() {
    AccessibilityManager.init();
  }
  
  static initializeScrollAnimations() {
    new ScrollAnimations();
  }
  
  static initializeComponents() {
    SkillTree.render();
    Timeline.render();
    AchievementsSystem.render();
    new Chatbot();
    ContactForm.init();
  }
  
  static initializeEventListeners() {
    const startAdventureBtn = document.getElementById('start-adventure');
    if (startAdventureBtn) {
      startAdventureBtn.addEventListener('click', () => {
        const childhoodSection = document.getElementById('childhood');
        if (childhoodSection) {
          childhoodSection.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }
      });
    }
    
    // Update achievements display when progress changes
    setInterval(() => {
      AchievementsSystem.updateDisplay();
    }, 1000);
  }
  
  static initializeParallax() {
    ParallaxManager.init();
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

// Export for potential future use
window.PhilippHahnPortfolio = {
  App,
  appState,
  appData,
  ThemeManager,
  LanguageManager,
  AchievementsSystem
};