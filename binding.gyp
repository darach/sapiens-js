{
  "targets": [
    {
      "target_name": "robosapiens",
      "sources": [ "src/robosapiens.cc" ],
      "include_dirs": [ "deps" ],
      "libraries": [ "<!(pwd)/deps/libwiringPi.a" ]
    }
  ]
}
