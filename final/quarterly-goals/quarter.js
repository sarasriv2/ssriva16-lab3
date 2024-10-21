document.querySelector('.add p').onclick = function() {
    const goal = prompt("Enter a new quarter goal:");
    const hashtag = prompt("Enter a goal hashtag:");
    const fraction = prompt("Enter a goal-completion status:");

    const newGoalDiv = document.createElement('div');
    const newGoalLabel = document.createElement('label');
    const newCheckbox = document.createElement('input');
    const newGoalSpan = document.createElement('span');
    const newHashtag = document.createElement('p');
    const newFraction = document.createElement('p');
    const newLine = document.createElement('hr');
    
    newCheckbox.type = 'checkbox';
    newCheckbox.classList.add('goal-checkbox');
    newGoalSpan.textContent = goal;
    newHashtag.textContent = hashtag;
    newHashtag.classList.add('hashtag');
    newHashtag.style.color = '#9b72ee';
    newFraction.textContent = fraction;
    newFraction.classList.add('fraction');
    newHashtag.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';
    newFraction.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';
    newGoalSpan.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';
    newFraction.style.color = '#4B5853';
    newGoalSpan.style.color = '#4B5853';
    newFraction.style.lineHeight = '1';


    
    newGoalLabel.appendChild(newCheckbox);
    newGoalLabel.appendChild(newGoalSpan);
    newGoalDiv.appendChild(newGoalLabel);
    newGoalDiv.appendChild(newHashtag);
    newGoalDiv.appendChild(newFraction);
    
    newGoalDiv.classList.add('goal-item');
    const addSection = document.querySelector('.add');

    document.body.insertBefore(newGoalDiv, addSection);
    
    newLine.style.display = 'block';
    newLine.style.margin = '10px auto'; 
    newLine.style.border = '1.25px solid #ccc';
    newLine.style.width = '20%';
    newLine.style.borderRadius = '20px';
    newLine.style.marginLeft = '0';
    newLine.style.marginTop = '10px';
    newLine.style.marginBottom = '10px';
    document.body.insertBefore(newLine, addSection);

};
