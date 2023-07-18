function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsBtn = document.getElementById("memberSkillsBtn");
  var memberSkillsBtnText = document.getElementById("memberSkillsBtnText");
  var memberSkillsBtnIcon = document.getElementById("memberSkillsBtnIcon");
  var memberSkillsBtnIconText = document.getElementById(
    "memberSkillsBtnIconText"
  );

  if (memberSkills.style.display === "none") {
    memberSkills.style.display = "block";
    memberSkillsBtn.style.backgroundColor = "#fff";
    memberSkillsBtn.style.color = "#000";
    memberSkillsBtnText.style.color = "#000";
    memberSkillsBtnIcon.style.color = "#000";
    memberSkillsBtnIconText.style.color = "#000";
    member.style.backgroundColor = "#000";
    member.style.color = "#fff";
  } else {
    memberSkills.style.display = "none";
    memberSkillsBtn.style.backgroundColor = "#000";
    memberSkillsBtn.style.color = "#fff";
    memberSkillsBtnText.style.color = "#fff";
    memberSkillsBtnIcon.style.color = "#fff";
    memberSkillsBtnIconText.style.color = "#fff";
    member.style.backgroundColor = "#fff";
    member.style.color = "#000";
  }
}