const toggleSkillsBtn1 = document.getElementById('toggle-skills-btn')!;
const skillsSection1 = document.getElementById('skills')!;

toggleSkillsBtn1.addEventListener('click', () => {
  if (skillsSection1.style.display === 'none') {
    skillsSection1.style.display = 'block';
    toggleSkillsBtn1.textContent = 'Hide Skills';
  } else {
    skillsSection1.style.display = 'none';
    toggleSkillsBtn1.textContent = 'Show Skills';
  }
});
