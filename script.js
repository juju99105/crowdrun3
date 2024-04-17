function toggleBathroomDetails(value) {
   const details = document.getElementById('bathroom_details');
   if (value === 'yes') {
      details.style.display = 'block';
   } else {
      details.style.display = 'none';
   }
}