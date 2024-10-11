function analyzeRoutine() {
    const activities = ['sleep', 'work', 'skill', 'namaz', 'coaching', 'gym','book'];
    let totalMinutes = 0;
    const activityData = [];
    const minutesInADay = 24 * 60; // Total minutes in a day
  
    activities.forEach(activity => {
      const start = document.getElementById(`${activity}-start`).value;
      const end = document.getElementById(`${activity}-end`).value;
  
      const duration = calculateDuration(start, end);
      totalMinutes += duration;
  
      activityData.push({
        name: activity,
        duration
      });
    });
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    activityData.forEach(({ name, duration }) => {
      const percentageOfTotal = ((duration / totalMinutes) * 100).toFixed(2);
      const percentageOfDay = ((duration / minutesInADay) * 100).toFixed(2);
  
      resultsDiv.innerHTML += `
        <p>${capitalizeFirstLetter(name)}: ${duration} minutes 
        (${percentageOfTotal}% of total time, ${percentageOfDay}% </p>`;
    });
  
    resultsDiv.innerHTML += `<p>Total time accounted: ${totalMinutes} minutes</p>`;
  }
  
  function calculateDuration(start, end) {
    const startTime = new Date(`1970-01-01T${start}:00`);
    const endTime = new Date(`1970-01-01T${end}:00`);
  
    let duration = (endTime - startTime) / (1000 * 60); // Duration in minutes
    if (duration < 0) {
      duration += 24 * 60; // Adjust for crossing midnight
    }
    return duration;
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  