# arduino-cli-runtime

Prebuilt Arduino CLI binaries for macOS, Linux, and Windows

```
npm i -g arduino-cli-runtime
```

## Usage

```sh
arduino-cli version
```

## New builds

Prerequisites:

- https://go.dev/doc/install
- https://taskfile.dev/#/installation

Compile:

```sh
git clone --depth=1 https://github.com/arduino/arduino-cli.git
cd arduino-cli
task build
```

Know your runtime:

```sh
node -e "console.log(process.platform + '-' + process.arch)"
# E.g. "linux-x64"
```

Create a folder with your runtime name like `npm/linux-x64`, and adjust the package file.

Finally, copy the compiled binary into `npm/linux-x64/bin/...`.

## License

MIT
