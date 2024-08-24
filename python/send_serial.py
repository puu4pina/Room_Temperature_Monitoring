import serial
import requests
import time

# Variables
SERIAL_PORT = 'my_serial_port_name'  # Port for Arduino
BAUD_RATE = 9600
GOOGLE_SHEET_URL = 'deployment_URL'  

# Serial data
ser = serial.Serial(SERIAL_PORT, BAUD_RATE)
print("Connected to Arduino")

while True:
    if ser.in_waiting > 0:
        temperature = ser.readline().decode('utf-8').strip()
        print(f"Temperature: {temperature}")

        # Send to Google Sheets
        payload = {'temperature': temperature}
        try:
            response = requests.post(GOOGLE_SHEET_URL, json=payload)
            print(f"Server response: {response.text}")
        except requests.exceptions.RequestException as e:
            print(f"Error sending data: {e}")

        time.sleep(60)  
