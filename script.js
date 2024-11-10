document.getElementById('job-search-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  generateLinkedInUrl();
});

function generateLinkedInUrl() {
  const jobTitle = document.getElementById('jobTitle').value.trim().replace(" ", "%20");
  const location = document.getElementById('location').value.trim().replace(" ", "%20");
  const experienceLevel = document.getElementById('experienceLevel').value;
  const company = document.getElementById('company').value.trim().replace(" ", "%20");
  const jobType = document.getElementById('jobType').value;
  const datePosted = document.getElementById('datePosted').value;

  let url = `https://www.linkedin.com/jobs/search/?keywords=${jobTitle}&location=${location}&f_E=${experienceLevel}`;
  
  if (company) url += `&f_C=${company}`;
  if (jobType) url += `&f_JT=${jobType}`;
  if (datePosted) url += `&f_TP=${datePosted}`;

  document.getElementById('result').innerHTML = `<a href="${url}" target="_blank">Open LinkedIn Job Search</a>`;
}
