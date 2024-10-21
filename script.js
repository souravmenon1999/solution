document.getElementById('toQ1').addEventListener('click', function () {
    const contentArea = document.getElementById('contentArea');

    // Clear previous content
    contentArea.innerHTML = `
        <h2>Q1:  Project Outlook</h2>
        
    `;

    // Create 2 new buttons for Q1 with links
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const button1 = document.createElement('a');
    button1.textContent = 'Deployment link';
    button1.classList.add('dynamic-button');
    button1.href = 'https://project-outlook.vercel.app/'; // Link for Q1 Button 1
    button1.target = '_blank'; // Opens link in a new tab

    const button2 = document.createElement('a');
    button2.textContent = 'Github Link';
    button2.classList.add('dynamic-button');
    button2.href = 'https://github.com/souravmenon1999/projectOutlook'; // Link for Q1 Button 2
    button2.target = '_blank'; // Opens link in a new tab

    // Append buttons to the container
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);

    // Append button container to the content area
    contentArea.appendChild(buttonContainer);

    // Fade-out and fade-in effect
    contentArea.style.opacity = '0';
    setTimeout(() => {
        contentArea.style.opacity = '1';
    }, 100); // Short delay to allow fade-out effect
});

document.getElementById('toQ2').addEventListener('click', function () {
    const contentArea = document.getElementById('contentArea');

    // Clear previous content
    contentArea.innerHTML = `
        <h2>Q2: DashBoard</h2>
       
    `;

    // Create 4 new buttons for Q2 with links
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const button3 = document.createElement('a');
    button3.textContent = 'Deployment Link';
    button3.classList.add('dynamic-button');
    button3.href = 'https://analytics-dash-boad.vercel.app'; // Link for Q2 Button 1
    button3.target = '_blank'; // Opens link in a new tab

    const button4 = document.createElement('a');
    button4.textContent = 'Frontend Code Github';
    button4.classList.add('dynamic-button');
    button4.href = 'https://github.com/souravmenon1999/analytics_dashBoad'; // Link for Q2 Button 2
    button4.target = '_blank'; // Opens link in a new tab

    const button5 = document.createElement('a');
    button5.textContent = 'Backend Github Code';
    button5.classList.add('dynamic-button');
    button5.href = 'https://github.com/souravmenon1999/analyticsplatform_backend'; // Link for Q2 Button 3
    button5.target = '_blank'; // Opens link in a new tab

    

    // Append buttons to the container
    buttonContainer.appendChild(button3);
    buttonContainer.appendChild(button4);
    buttonContainer.appendChild(button5);

    // Append button container to the content area
    contentArea.appendChild(buttonContainer);

    // Fade-out and fade-in effect
    contentArea.style.opacity = '0';
    setTimeout(() => {
        contentArea.style.opacity = '1';
    }, 100); // Short delay to allow fade-out effect
});
