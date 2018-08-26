# electron-copy-file-bug
A minimal example illustrating a bug with fs.copyFile in Electron v2.0.8


Reproduction steps:

1. Run:
```
npm install
npm run build
./dest/linux-unpacked/copy-test
```

2. Click the button to copy the test file to the displayed target location
3. Check the error in the console and the fact that the source file exists in the printed fs.readdir statement
4. Verify that the issue does not happen when running an unpackaged app by running `npm start` and repeating step 2
