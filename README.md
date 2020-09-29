# um_auto_build

***Note: tool chỉ hoạt động khi có nhạc, tool ko chạy được VCC

b1: bỏ nhạc vào trong những folder con của genres (vd pop, rock)
b2: start-me-once.bat
b3: auto-update.bat
b4: chỉnh settings
  các settings cần chú ý: 
    "headless": false,      // false = mở crhome khi chạy tool
    "useVCC": false,        // false = ko dùng vcc (phải để false)    
    "forcedGenre": "dance", // ghi tên genre vào để bắt tool CHỈ dùng genre này, để "" thì sẽ ra random
    "minTracks": 2,         // random min songs
    "maxTracks": 3,         // random max songs
    "supportedGenres": [    // chỉ để những genre mà folder có nhạc
      "classical",
      "dance",
      "electronic",
      "pop",
      "rock",
      "world"
    ],
b5: start-me.bat
