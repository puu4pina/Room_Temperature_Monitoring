# Room_Temperature_Monitoring

Arduino Temperature Monitoring System: A project that captures temperature data with an Arduino, sends it to Google Sheets with Python and displays the data on a Wix website using Wix Velo.

## Structure

- **Arduino:** Code for reading temperature data (`/arduino/sketch.ino`).
- **Python:** Script to send data to Google Sheets (`/python/send_serial.py`).
- **Google Apps Script:** Writes data to Google Sheets (`/apps-script/code.gs`).
- **Wix Velo:** Fetches and shows temperature data (`/wix-velo/display-temperature.js`).

## Setup

1. **Arduino:**
   - Upload Arduino sketch from `/arduino/sketch.ino` into Arduino board.
   - Connect temperature sensor into Arduino.

2. **Python Script:**
   - Install Python packages:
     ```bash
     pip install -r /python/requirements.txt
     ```
   - Configure script with the Google Apps Script URL.
   - Run the script to start sending data.

3. **Google Apps Script:**
   - Open the Google Apps Script from `/apps-script/code.gs`.
   - Deploy the script as web app and get the deployment URL.
   - Paste URL to Python script.

4. **Wix Velo:**
   - Paste code from `/wix-velo/temperature-display.js` into Wix Velo backend.
   - Ensure code fetches data from Google Sheets and displays it on Wix site.

## Usage

- **Python Script:** Run script to send data from Arduino to Google Sheets.
- **Wix Velo:** The code in Wix Velo will automatically update and show the latest temperature on the site.

## Notes

- Assumptions: using an Arduino Uno Rev 3, you have a wix site published, you have a working google sheet, keep Arduino connected to computer while program is running
- Hardware: Arduino UNO Rev 3, Texas Instruments LM35 temperature sensor, MacBook Air
- Parts of code are written using generative AI

