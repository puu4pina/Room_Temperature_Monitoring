import { getTemperature } from 'backend/temperature';

$w.onReady(function () {
  // Get temperature, Update text
  getTemperature()
    .then(temp => {
      $w('#text').text = `Current Temperature: ${temp}°C`;
    })
    .catch(err => {
      console.error('Error fetching temperature:', err);
      $w('#text').text = 'Failed to show temperature';
    });
});
