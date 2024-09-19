{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell rec {
  buildInputs = [
    pkgs.go
    pkgs.nodejs # To include Node.js for React and npm or yarn
    pkgs.yarn   # or `pkgs.npm` if you prefer npm over yarn
    pkgs.typescript
    pkgs.esbuild
    pkgs.clean-css-cli
    pkgs.html-minifier
  ];
}
