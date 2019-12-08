## nodeのバージョン
- nodebrew install v11.10.1
- nodebrew use v11.10.1
- brew uninstall node（brewのはアンインストールしておく）
- パスも通す
```
$ export PATH=$PATH:$HOME/.nodebrew/current/bin
$ echo 'export PATH=$PATH:$HOME/.nodebrew/current/bin' >> ~/.bashrc
```
    - which nodeとnode -vで確認しておこう
