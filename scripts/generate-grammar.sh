mkdir -p src/generated
nearleyc src/grammar.ne -o src/generated/grammar.ts
sed '/@preprocessor typescript/d' ./src/grammar.ne > ./src/generated/grammar-nopost.ne
nearleyc src/generated/grammar-nopost.ne -o src/generated/grammar.js
