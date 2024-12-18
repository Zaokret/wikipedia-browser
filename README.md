# wikipedia-browser

1. install recommended vscode extensions

# git template

Co-authored-by: {NAME} <{EMAIL}>

Authors

- Lazar Todorovic <Zaokret@users.noreply.github.com>
- Vukasin Todorovic <Vulax@users.noreply.github.com>

# command za region koji ima u sebi git template

done
todo - nested authorship

# stage git patch based on regions

sed -n '/\/\/\s*#region/,/\/\/\s*#endregion/ {
/\/\/\s*#region/d
/\/\/\s*#endregion/d
p
}' test.js

git diff -U0 | grepdiff -E '# .+' --output-matching=hunk | git apply --cached --unidiff-zero

# pre-commit hook za brisanje region-a

`.husky/pre-commit`
`npm run authors`
`node scripts/authors.js`

# folder/file author

https://github.com/microsoft/vscode-extension-samples/blob/main/tree-view-sample