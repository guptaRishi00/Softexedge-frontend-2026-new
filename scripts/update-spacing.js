const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src/components');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to match the className of the first <section> or top-level <div> that might be a section.
    // Actually, we'll just look for `<section className="...` and update it.
    // If we only have 1 main section, we can update the first `<section className="..."` or `<section\n *className="..."`
    
    // We only want to update <section className="..."> where there are padding classes or it's a major section.
    // A simpler regex: find `<section[^>]*className=["']([^"']+)["']`
    // OR we just use a generic regex to replace mt-*, mb-*, scale-*, origin-*, rounded-* inside the first section className
    
    let modified = false;
    
    content = content.replace(/(<section[^>]*className=["'])([^"']+)(["'])/g, (match, prefix, classNames, suffix) => {
        // Skip if this section doesn't seem to be a root layout section (e.g. it has no padding)
        // But the user said "every page" -> "between every component".
        // Most root sections have w-full or container.
        if (!classNames.includes('w-full') && !classNames.includes('py-') && !classNames.includes('p-') && !classNames.includes('bg-')) {
            return match;
        }

        let classes = classNames.split(/\s+/).filter(Boolean);
        
        // Remove existing spacing/scaling classes
        classes = classes.filter(cls => {
            if (cls.startsWith('mt-') || cls.startsWith('mb-') || cls.startsWith('my-') || 
                cls.startsWith('scale-') || cls === 'origin-top' || 
                cls.startsWith('rounded-')) {
                return false;
            }
            return true;
        });
        
        // Add standardized classes
        classes.push('rounded-[20px]', 'scale-[0.97]', 'origin-top', 'mt-5');
        
        modified = true;
        return `${prefix}${classes.join(' ')}${suffix}`;
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            replaceInFile(fullPath);
        }
    }
}

traverseDir(directoryPath);
