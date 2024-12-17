#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");

try {
  const regex = /^\/\/\s*#(?=(region)|(endregion)).+/gm;
  const changedFiles = execSync("git diff --cached --name-only", { encoding: "utf-8" }).split("\n").filter(Boolean);

  // Iterate over each staged file
  for (const file of changedFiles) {
    if (!fs.existsSync(file)) continue;

    const content = fs.readFileSync(file, "utf8");
    const newContent = content.replace(regex, "").trim();

    if (newContent !== content) {
      fs.writeFileSync(file, newContent, "utf8");
      // Re-add the file to the staging area after modification
      execSync(`git add ${file}`);
    }
  }

  process.exit(0);
} catch (err) {
  console.error("Error in authors script:", err);
  process.exit(1);
}