function submitForm() {
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const subject = document.getElementById('fsubject').value;
    const message = document.getElementById('fmessage').value.trim();

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    document.getElementById('form-main').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }