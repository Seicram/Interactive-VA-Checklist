# Interactive VA Compliance Checklist

## Project Overview
The Interactive VA Compliance Checklist is a browser-based tool designed to help Veterans Service Representatives (VSRs) follow the step-by-step process of verifying dependency claims. The application uses an intuitive flip-card interface to guide users through essential compliance checks, ensuring each step is reviewed and marked complete before progressing.

## Purpose
This project addresses the need for a lightweight, easy-to-use, and privacy-conscious solution that supports VA staff in their day-to-day workflow. Because the tool does not store any veteran data, it avoids HIPAA-related concerns, making it safe for use in real-time without backend integration.

This project was inspired by a real and frequent challenge in the VA system: the number one deferral/error VSRs receive is due to system compliance — specifically the failure to complete S-1 checklist items. By enforcing a structured, interactive process, this tool helps ensure no required steps are missed and reduces error rates in claim processing.

## Technologies Used
- **HTML**: Structure of the application
- **CSS**: Styling and layout, including flip-card effects
- **JavaScript**: Step navigation, logic, and user interaction

## Features
- Flip-card UI for each checklist item
- Step-by-step logic that unlocks the next step only after completion
- Final review question to confirm checklist completion
- Fully front-end, runs entirely in the browser

## Testing Methodology
Manual testing was performed using a browser to verify:
- Flip animations work correctly
- Steps unlock in proper sequence
- Checklist resets or prompts as expected

Refer to the `test-cases.xlsx` file for detailed test results.

## Limitations & Future Enhancements
- No backend or data storage is included to avoid storing sensitive information (HIPAA compliance).
- In future iterations, a backend (Node.js + MongoDB) could be added to allow for saving progress or customizing checklists, with secure authentication.

## How to Run
1. Open `index.html` in a web browser.
2. Complete each card in order by clicking "View Details" and checking "Mark as complete".
3. Submit the final question at the end.

## Author
Marcies Smith - Veterans Service Representative, VA