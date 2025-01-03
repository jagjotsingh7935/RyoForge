document.addEventListener("DOMContentLoaded", () => {
  const contentSections = document.querySelectorAll("section, nav, footer");
  contentSections.forEach((section) => (section.style.display = "none"));

  const formContainer = document.createElement("div");
  formContainer.innerHTML = `
      <form id="user-form">
        <label for="name">Enter Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" required><br><br>
  
        <label for="profile-picture">Upload Your Profile Picture:</label>
        <input type="file" id="profile-picture" name="profile-picture" accept="image/*"><br><br>
  
        <button type="button" id="submit-btn">Submit</button>
      </form>
    `;

  document.body.prepend(formContainer);

  document.getElementById("submit-btn").addEventListener("click", () => {
    const userName = document.getElementById("name").value;
    const profilePicture = document.getElementById("profile-picture").files[0];

    if (userName) {
      formContainer.style.display = "none";
      contentSections.forEach((section) => (section.style.display = "block"));

      const nameContainer = document.createElement("div");
      nameContainer.style.position = "absolute";
      nameContainer.style.top = "30px";
      nameContainer.style.left = "20px";
      nameContainer.style.fontSize = "20px";
      nameContainer.style.fontWeight = "bold";
      nameContainer.textContent = `Hello ${userName}, Welcome to my profile page!`;
      document.body.appendChild(nameContainer);

      if (profilePicture) {
        const reader = new FileReader();
        reader.onload = () => {
          const profileImg = document.createElement("img");
          profileImg.src = reader.result;
          profileImg.alt = `${userName}'s Profile Picture`;
          profileImg.style.position = "absolute";
          profileImg.style.top = "5px";
          profileImg.style.right = "20px";
          profileImg.style.width = "50px";
          profileImg.style.height = "50px";
          profileImg.style.borderRadius = "50%";
          profileImg.style.objectFit = "cover";
          document.body.appendChild(profileImg);
        };
        reader.readAsDataURL(profilePicture);
      }
    } else {
      alert("Please enter your name before submitting.");
    }
  });
});
