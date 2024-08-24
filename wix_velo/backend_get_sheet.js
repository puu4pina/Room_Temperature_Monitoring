// backend_get_sheet.jsw
import { fetch } from 'wix-fetch';

export function getTemperature() {
  const sheetUrl = 'Google_Sheet_CSV_URL';

  return fetch(sheetUrl, { method: 'GET' })
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\n');
      const lastRow = rows[rows.length - 2]; // Get data row
      const columns = lastRow.split(',');
      return columns[1]; 
    })
    .catch(error => {
      console.error('Error getting data:', error);
      throw new Error('Failed to get temperature');
    });
}
