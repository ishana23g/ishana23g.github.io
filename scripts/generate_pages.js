#!/usr/bin/env node
/**
 * Auto-generate project and idea pages from templates
 *
 * This script reads content/projects.json and content/ideas.json,
 * then creates individual HTML pages by copying the template file
 * for each project/idea entry.
 *
 * Usage: node scripts/generate_pages.js
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const projectsJsonPath = path.join(rootDir, 'content', 'projects.json');
const ideasJsonPath = path.join(rootDir, 'content', 'ideas.json');
const projectTemplateSource = path.join(rootDir, 'projects', '_template', 'index.html');
const ideaTemplateSource = path.join(rootDir, 'ideas', '_template', 'index.html');

/**
 * Generate pages for a given type (projects or ideas)
 */
function generatePages(jsonPath, templatePath, outputDir, type) {
    // Check if JSON file exists
    if (!fs.existsSync(jsonPath)) {
        console.error(`❌ ${jsonPath} not found`);
        return 0;
    }

    // Check if template exists
    if (!fs.existsSync(templatePath)) {
        console.error(`❌ Template ${templatePath} not found`);
        return 0;
    }

    // Read JSON data
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const template = fs.readFileSync(templatePath, 'utf8');

    let created = 0;
    let skipped = 0;

    data.forEach(item => {
        const slug = item.slug;
        const targetDir = path.join(outputDir, slug);
        const targetFile = path.join(targetDir, 'index.html');

        // Create directory if it doesn't exist
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        // Write template to target file
        fs.writeFileSync(targetFile, template, 'utf8');
        console.log(`✅ Created ${type}/${slug}/index.html`);
        created++;
    });

    return created;
}

function main() {
    console.log('🔨 Generating project and idea pages from templates...\n');

    const projectsCreated = generatePages(
        projectsJsonPath,
        projectTemplateSource,
        path.join(rootDir, 'projects'),
        'projects'
    );

    const ideasCreated = generatePages(
        ideasJsonPath,
        ideaTemplateSource,
        path.join(rootDir, 'ideas'),
        'ideas'
    );

    console.log(`\n📦 Summary:`);
    console.log(`   Projects: ${projectsCreated} pages generated`);
    console.log(`   Ideas: ${ideasCreated} pages generated`);
    console.log('\n✨ Done!');
}

main();
