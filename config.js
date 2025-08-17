// Website Configuration
const CONFIG = {
    // Personal Information
    name: "Bruno Veltri",
    title: "PhD Candidate",
    institution: "Berlin School of Economics",
    
    // Contact Information
    email: "bruno.veltri@hu-berlin.de",
    github: "brunoVeltri",
    
    // Design Theme Configuration
    theme: {
      // Color Scheme Options: 'blue', 'green', 'purple', 'orange', 'red'
      colorScheme: 'blue',
      
      // Font Options: 'inter', 'roboto', 'system'
      fontFamily: 'roboto',
      
      // Layout Options: 'centered', 'wide'
      layout: 'centered',
      
      // Image Style: 'rounded', 'square', 'circle'
      imageStyle: 'rounded'
    },
    
    // Color Schemes
    colors: {
      blue: {
        primary: '#2563eb',
        primaryHover: '#1d4ed8'
      },
      green: {
        primary: '#059669',
        primaryHover: '#047857'
      },
      purple: {
        primary: '#7c3aed',
        primaryHover: '#6d28d9'
      },
      orange: {
        primary: '#ea580c',
        primaryHover: '#dc2626'
      },
      red: {
        primary: '#dc2626',
        primaryHover: '#b91c1c'
      }
    },
    
    // Font Families
    fonts: {
      inter: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      roboto: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      system: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    
    // Navigation
    navigation: [
      { name: 'Home', url: 'index.html' },
      { name: 'CV', url: 'cv.html' },
      { name: 'Research', url: 'research.html' }
    ],
    
    // Research Papers
    papers: [
      {
        title: "Policy Uncertainty, Misinformation, and Retirement Age Reform",
        authors: ["Maximilian Blesch"],
        abstract: "This study examines the impact of Statutory Retirement Age (SRA) reforms on individual behavior and welfare in the presence of policy uncertainty and misinformation. We develop a structural life-cycle model in which individuals are uncertain about the future evolution of the SRA and misinformed about its importance. We derive individuals' expectations and information on the SRA from self-elicited belief data using the German Socio-Economic Panel Innovation Sample (SOEP-IS). The model accounts for key life-cycle savings and old-age labor supply determinants, such as human capital accumulation, involuntary job loss, health status, and family dynamics. We estimate the model using decision data from the core sample of the SOEP. We design counterfactual simulations to assess the effects of SRA reforms and illustrate the trade-offs of several implementation strategies.",
        status: "working_paper"
      },
      {
        title: "Public Appeals and Collective Crisis Mitigation",
        authors: ["Peter Haan", "Lea Heursen", "Jule Specht", "Georg Weizsäcker"],
        abstract: "Arrivals of crises often trigger public appeals from policy leaders, attempting to encourage crisis-mitigating behaviors. We ask whether the tone of an appeal changes its effectiveness, and to what extent policymakers know what tone to use. Using a controlled experiment in a large, general-population sample, we first study the impact of appeals and of their emotional tone on contributions to a well-defined crisis mitigation effort. Two equivalent appeals have either positive-tone or negative-tone wordings, and both increase contributions by about 20% compared to no appeal. Next, a sample of policymakers (n=88) is presented with our design and asked to predict the outcome. Although they correctly predict the impact of the positive appeal, they substantially underestimate the effectiveness of the negative one.",
        status: "working_paper"
      }
    ]
  };
  
  // Apply configuration to CSS variables
  function applyTheme() {
    const root = document.documentElement;
    const theme = CONFIG.theme;
    
    // Apply color scheme
    const colors = CONFIG.colors[theme.colorScheme];
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--primary-hover', colors.primaryHover);
    
    // Apply font family
    const fontFamily = CONFIG.fonts[theme.fontFamily];
    root.style.setProperty('--font-family', fontFamily);
    
    // Apply layout
    if (theme.layout === 'wide') {
      root.style.setProperty('--max-width', '1200px');
    }
    
    // Apply image style
    const imageElement = document.querySelector('.image img');
    if (imageElement) {
      if (theme.imageStyle === 'circle') {
        imageElement.style.borderRadius = '50%';
      } else if (theme.imageStyle === 'square') {
        imageElement.style.borderRadius = '0';
      }
    }
  }
  
  // Generate navigation HTML
  function generateNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    return CONFIG.navigation.map(item => {
      const isActive = item.url === currentPage;
      return `<a href="${item.url}" ${isActive ? 'class="active"' : ''}>${item.name}</a>`;
    }).join('');
  }
  
  // Generate research papers HTML
  function generateResearchPapers() {
    return CONFIG.papers.map(paper => {
      const authorsText = paper.authors.length > 0 ? `with ${paper.authors.join(', ')}` : '';
      return `
        <div class="paper">
          <h2>${paper.title}</h2>
          ${authorsText ? `<p class="authors">${authorsText}</p>` : ''}
          <p class="abstract"><span class="abstract-label">Abstract:</span> ${paper.abstract}</p>
        </div>
      `;
    }).join('');
  }
  
  // Initialize theme on page load
  document.addEventListener('DOMContentLoaded', function() {
    applyTheme();
    
    // Update navigation if nav element exists
    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.innerHTML = generateNavigation();
    }
    
    // Update research papers if research container exists
    const researchContainer = document.querySelector('#research-papers');
    if (researchContainer) {
      researchContainer.innerHTML = generateResearchPapers();
    }
  });