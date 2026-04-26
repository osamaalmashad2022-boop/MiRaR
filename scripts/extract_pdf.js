const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

// Utility to extract text from a given PDF file
async function extractText(pdfPath) {
    let dataBuffer = fs.readFileSync(pdfPath);
    try {
        const data = await pdf(dataBuffer);
        console.log(`\n--- Extracted Text from ${path.basename(pdfPath)} ---`);
        console.log(`Number of Pages: ${data.numpages}`);
        console.log(`Text snippet (first 300 chars):\n`);
        console.log(data.text.substring(0, 300));
        console.log(`\n--------------------------------------\n`);
        
        // Save to txt file
        const outPath = pdfPath.replace('.pdf', '_extracted.txt');
        fs.writeFileSync(outPath, data.text);
        console.log(`Full text saved to: ${outPath}`);
    } catch (error) {
        console.error("Error extracting PDF:", error);
    }
}

const files = [
    path.join(__dirname, '../geographic_1sec.pdf'),
    path.join(__dirname, '../كتاب الوزارة انجليزي تانية ابتدائي ترم اول 2026.pdf'),
    path.join(__dirname, '../كتاب_الوزارة_في_اللغة_العربية_للصف_الثاني_الإعدادي_ترم_ثاني_2026.pdf')
];

files.forEach(f => {
    if (fs.existsSync(f)) {
        extractText(f);
    } else {
        console.log(`File not found: ${f}`);
    }
});
