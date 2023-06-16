function prepareEmail() {
    const form = document.querySelector('.bootstrap-form');
    const email = form.action;

    const name = document.getElementById('contact-name').value;
    const emailField = document.getElementById('contact-email').value;
    const website = document.getElementById('contact-website').value;
    const timeline = document.getElementById('contact-timeline').value;
    const budget = document.getElementById('contact-budget').value;
    const services = document.getElementById('contact-services-needed').value;
    const notes = document.getElementById('contact-notes').value;

    const body = `Name: ${name} Email: ${emailField} Website: ${website} Timeline: ${timeline} Budget: ${budget} Services Needed: ${services} Notes: ${notes}`;

    const mailtoURL = `mailto:${email}?body=${encodeURIComponent(body)}`;

    window.open(mailtoURL, '_blank');  }