// 1. CARD SEARCH / FILTER FUNCTION
function filterCards() {
    let searchText = document.getElementById('search').value.toLowerCase();
    
   
    let cards = document.querySelectorAll('.stem-card');

    cards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        
        // If  title contains the text typed, show it, otherwise hide
        if (title.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// 2. CARD CLICK TO FORM POPULATION FUNCTION
function selectActivity(activityName) {
    // Put the clicked card's text inside the read-only form input field
    document.getElementById('linked-activity').value = activityName;
}

// 3. STORAGE PERSISTENCE FUNCTION
function savePlan(event) {
    event.preventDefault(); // Prevents the browser from reloading the page

    // Map your current form inputs into a simple data object
    let plan = {
        title: document.getElementById('plan-title').value,
        activity: document.getElementById('linked-activity').value,
        notes: document.getElementById('delivery-notes').value
    };

    // Retrieve previous plans out of browser localStorage, or build an empty array if empty
    let existingPlans = JSON.parse(localStorage.getItem('saved_plans')) || [];
    
    // Append the fresh plan into our stack list
    existingPlans.push(plan);
    
    // Save it back to the computer's persistent storage profile
    localStorage.setItem('saved_plans', JSON.stringify(existingPlans));

    // Reset fields and display a status notice
    document.getElementById('session-form').reset();
    document.getElementById('status-message').innerText = "Plan saved to local browser memory!";
    
    // Fade the status message out after 3 seconds
    setTimeout(() => { 
        document.getElementById('status-message').innerText = ""; 
    }, 3000);
    loadAndDisplayPlans(); // Refresh the displayed list of saved plans
}
//DISPLAY STORED PLANS FROM LOCAL STORAGE
function loadAndDisplayPlans() {
    let container = document.getElementById('saved-plans');
    
    container.innerHTML = '';

    // string array from browser mem
    let existingPlans = JSON.parse(localStorage.getItem('saved_plans')) || [];

    // empty err msg
    if (existingPlans.length === 0) {
        container.innerHTML = '<p style="color: #666; font-style: italic;">No saved plans found in local memory.</p>';
        return;
    }

    // Loop through each plan object and format it into clean HTML boxes
    existingPlans.forEach((plan, index) => {
        let planBox = document.createElement('div');
        
        planBox.style.background = '#f9fafb';
        planBox.style.border = '1px solid #e5e7eb';
        planBox.style.padding = '12px';
        planBox.style.marginBottom = '10px';
        planBox.style.borderRadius = '6px';

        planBox.innerHTML = `
            <strong style="color: #2563eb; font-size: 1.1rem;">${index + 1}. ${plan.title}</strong><br>
            <small style="color: #4b5563;">⚙️ Activity: ${plan.activity || 'None Chosen'}</small>
            <p style="margin: 6px 0 0 0; color: #1f2937; font-size: 0.95rem;">📝 Notes: ${plan.notes || 'No custom notes written.'}</p>
        `;

        container.appendChild(planBox);
    });
}

loadAndDisplayPlans();
