/**
 * SPIRAL UP DIGITAL — Google Sheets Integration
 * 
 * HOW TO SET UP:
 * 1. Open your Google Sheet:
 *    https://docs.google.com/spreadsheets/d/15MuUMr4KyyEwnivMWob8dMnFCrl0av-YBL4fyQlt8pI/edit
 * 2. Click Extensions > Apps Script
 * 3. Delete all existing code and paste this entire file
 * 4. Click Save (Ctrl+S)
 * 5. Click Deploy > New Deployment
 * 6. Type: Web App
 * 7. Execute as: Me
 * 8. Who has access: Anyone
 * 9. Click Deploy, copy the Web App URL
 * 10. Add it to your .env.local file:
 *     APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
 */

const SHEET_NAME = 'Sheet1'

const HEADERS = [
  'Timestamp',
  'Name',
  'Company',
  'Email',
  'Phone',
  'Services',
  'Brand Link',
  'Source',
]

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet()
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet()

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS)
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
      sheet.setFrozenRows(1)
    }

    const data = JSON.parse(e.postData.contents)

    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.name || '',
      data.company || '',
      data.email || '',
      "'" + (data.phone || ''),  // Prefix with ' to force plain text (prevents +91 being read as formula)
      Array.isArray(data.services) ? data.services.join(', ') : (data.services || ''),
      data.brandLink || '',
      data.source || 'Website',
    ])

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

// Test function — run this in Apps Script editor to verify setup
function testSubmit() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        company: 'Test Company',
        email: 'test@example.com',
        phone: '+91 99999 99999',
        services: ['Performance Marketing', 'Reels & Ad Generation'],
        brandLink: 'https://instagram.com/test',
        source: 'OurWork Section',
      }),
    },
  }
  const result = doPost(mockEvent)
  Logger.log(result.getContent())
}
