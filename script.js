var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills');
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
});
