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

https://go.dev/doc/install
https://taskfile.dev/#/installation

```sh
mkdir build
cd build
git clone --depth=1 git@github.com:arduino/arduino-cli.git
cd arduino-cli
task build
rm -rf .git

# E.g. "linux-x64"
model=$(node -e "console.log(process.platform + '-' + process.arch)")

cp ./arduino-cli ../../npm/$model/bin
```

## License

Apache-2.0
