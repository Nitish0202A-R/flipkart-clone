function openModal() {
      document.getElementById('loginModal').style.display = 'block';
    }

    function closeModal() {
      document.getElementById('loginModal').style.display = 'none';
      document.getElementById('errorMsg').textContent = '';
      document.getElementById('userInput').value = '';
    }

    function submitLogin() {
      const input = document.getElementById('userInput').value.trim();
      const error = document.getElementById('errorMsg');

      // Basic check: mobile (10 digits) or email
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
      const isMobile = /^[0-9]{10}$/.test(input);

      if (isEmail || isMobile) {
        alert("Login successful! ✅");
        closeModal();
      } else {
        error.textContent = "Please enter a valid mobile number or email.";
      }
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById('loginModal');
      if (event.target === modal) {
        closeModal();
      }
    }