// starrail_chars.js
// スタレキャラクター・バージョン共通マスターデータ
//
// 使い方:
//   TiersList02 (運命別) : starrailChars を path でフィルタしてタブ表示
//   TiersList03 (属性別) : starrailChars を element でフィルタしてタブ表示
//   StarRailCheck        : starrailChars (chara タブ) + starrailVersions (version タブ) を使用
//
// path:    yuetu=愉悦, songo=存護, junsyu=巡狩, tie=知恵, kyomu=虚無,
//          kaimetsu=壊滅, tyouwa=調和, houjou=豊穣, kioku=記憶, null=タブ非対象
// element: butsuri=物理, hi=炎, koori=氷, kaze=風, kaminari=雷,
//          kyosuu=虚数, ryoushi=量子, null=タブ非対象

// ===== キャラクターデータ =====
export const starrailChars = [

  // 愉悦 (yuetu)
  { icon: "syu5.png",       path: "yuetu",    element: "kaminari" },
  { icon: "sei5.png",       path: "yuetu",    element: "kaminari" },
  { icon: "hiei.png",       path: "yuetu",    element: "butsuri"  },
  { icon: "ginro2.png",     path: "yuetu",    element: "kyosuu"   },
  { icon: "hibana.png",     path: "yuetu",    element: "hi"       },
  { icon: "koukou.png",     path: "yuetu",    element: "butsuri"  },

  // 存護 (songo)
  { icon: "tankou2.png",    path: "songo",    element: "butsuri"  },
  { icon: "syu2.png",       path: "songo",    element: "hi"       },
  { icon: "sei2.png",       path: "songo",    element: "hi"       },
  { icon: "aben.png",       path: "songo",    element: "kyosuu"   },
  { icon: "hugen.png",      path: "songo",    element: "ryoushi"  },
  { icon: "jepado.png",     path: "songo",    element: "koori"    },
  { icon: "nanoka.png",     path: "songo",    element: "koori"    },

  // 巡狩 (junsyu)
  { icon: "sinazu.png",     path: "junsyu",   element: "kaminari" },
  { icon: "atya.png",       path: "junsyu",   element: "ryoushi"  },
  { icon: "hisyo.png",      path: "junsyu",   element: "kaze"     },
  { icon: "boothill.png",   path: "junsyu",   element: "butsuri"  },
  { icon: "reisio.png",     path: "junsyu",   element: "kyosuu"   },
  { icon: "topazu.png",     path: "junsyu",   element: "hi"       },
  { icon: "zere.png",       path: "junsyu",   element: "ryoushi"  },
  { icon: "nanoka2.png",    path: "junsyu",   element: "kyosuu"   },
  { icon: "moze.png",       path: "junsyu",   element: "kaminari" },
  { icon: "genkyo.png",     path: "junsyu",   element: "koori"    },
  { icon: "susyo.png",      path: "junsyu",   element: "butsuri"  },
  { icon: "tankou.png",     path: "junsyu",   element: "kaze"     },

  // 知恵 (tie)
  { icon: "anaikusu.png",   path: "tie",      element: "kaze"     },
  { icon: "heltamama.png",  path: "tie",      element: "koori"    },
  { icon: "ranpa.png",      path: "tie",      element: "kyosuu"   },
  { icon: "jeido.png",      path: "tie",      element: "ryoushi"  },
  { icon: "arujen.png",     path: "tie",      element: "butsuri"  },
  { icon: "keigen.png",     path: "tie",      element: "kaminari" },
  { icon: "seijaku.png",    path: "tie",      element: "ryoushi"  },
  { icon: "sebaru.png",     path: "tie",      element: "kaminari" },
  { icon: "helta.png",      path: "tie",      element: "koori"    },
  { icon: "himeko.png",     path: "tie",      element: "hi"       },

  // 虚無 (kyomu)
  { icon: "daria.png",      path: "kyomu",    element: "hi"       },
  { icon: "seirensu.png",   path: "kyomu",    element: "butsuri"  },
  { icon: "saferu.png",     path: "kyomu",    element: "ryoushi"  },
  { icon: "newteiun.png",   path: "kyomu",    element: "hi"       },
  { icon: "syokyu.png",     path: "kyomu",    element: "hi"       },
  { icon: "yomi.png",       path: "kyomu",    element: "kaminari" },
  { icon: "swan.png",       path: "kyomu",    element: "kaze"     },
  { icon: "kahuka.png",     path: "kyomu",    element: "kaminari" },
  { icon: "ginro.png",      path: "kyomu",    element: "ryoushi"  },
  { icon: "ketya.png",      path: "kyomu",    element: "hi"       },
  { icon: "ruka.png",       path: "kyomu",    element: "butsuri"  },
  { icon: "sanpo.png",      path: "kyomu",    element: "kaze"     },
  { icon: "pera.png",       path: "kyomu",    element: "koori"    },
  { icon: "velto.png",      path: "kyomu",    element: "kyosuu"   },

  // 壊滅 (kaimetsu)
  { icon: "fainon.png",     path: "kaimetsu", element: "butsuri"  },
  { icon: "seiba.png",      path: "kaimetsu", element: "kaze"     },
  { icon: "modis.png",      path: "kaimetsu", element: "kyosuu"   },
  { icon: "syu1.png",       path: "kaimetsu", element: "butsuri"  },
  { icon: "sei1.png",       path: "kaimetsu", element: "butsuri"  },
  { icon: "unri.png",       path: "kaimetsu", element: "butsuri"  },
  { icon: "hotaru.png",     path: "kaimetsu", element: "hi"       },
  { icon: "ingetsu.png",    path: "kaimetsu", element: "kyosuu"   },
  { icon: "keiryu.png",     path: "kaimetsu", element: "koori"    },
  { icon: "jin.png",        path: "kaimetsu", element: "kaze"     },
  { icon: "misia.png",      path: "kaimetsu", element: "koori"    },
  { icon: "setui.png",      path: "kaimetsu", element: "ryoushi"  },
  { icon: "hukku.png",      path: "kaimetsu", element: "hi"       },
  { icon: "kurara.png",     path: "kaimetsu", element: "butsuri"  },
  { icon: "aran.png",       path: "kaimetsu", element: "kaminari" },

  // 調和 (tyouwa)
  { icon: "keryu.png",      path: "tyouwa",   element: "kaze"     },
  { icon: "toribi.png",     path: "tyouwa",   element: "ryoushi"  },
  { icon: "sunday.png",     path: "tyouwa",   element: "kyosuu"   },
  { icon: "syu3.png",       path: "tyouwa",   element: "kyosuu"   },
  { icon: "sei3.png",       path: "tyouwa",   element: "kyosuu"   },
  { icon: "robin.png",      path: "tyouwa",   element: "butsuri"  },
  { icon: "hanabi.png",     path: "tyouwa",   element: "ryoushi"  },
  { icon: "ruanmama.png",   path: "tyouwa",   element: "koori"    },
  { icon: "kana.png",       path: "tyouwa",   element: "butsuri"  },
  { icon: "gyoku.png",      path: "tyouwa",   element: "kyosuu"   },
  { icon: "teiun.png",      path: "tyouwa",   element: "kaminari" },
  { icon: "buronya.png",    path: "tyouwa",   element: "kaze"     },
  { icon: "aster.png",      path: "tyouwa",   element: "hi"       },

  // 豊穣 (houjou)
  { icon: "fofo.png",       path: "houjou",   element: "kaze"     },
  { icon: "rasetu.png",     path: "houjou",   element: "kyosuu"   },
  { icon: "gyaraga.png",    path: "houjou",   element: "hi"       },
  { icon: "rinkusu.png",    path: "houjou",   element: "ryoushi"  },
  { icon: "byakuro.png",    path: "houjou",   element: "kaminari" },
  { icon: "natasya.png",    path: "houjou",   element: "butsuri"  },
  { icon: "reisa.png",      path: "houjou",   element: "hi"       },

  // 記憶 (kioku)
  { icon: "kyurene.png",    path: "kioku",    element: "koori"    },
  { icon: "nagayatuki.png", path: "kioku",    element: "koori"    },
  { icon: "hiansi.png",     path: "kioku",    element: "kaze"     },
  { icon: "kyasuto.png",    path: "kioku",    element: "ryoushi"  },
  { icon: "aguraia.png",    path: "kioku",    element: "kaminari" },
  { icon: "syu4.png",       path: "kioku",    element: "koori"    },
  { icon: "sei4.png",       path: "kioku",    element: "koori"    },

  // タブ非対象 (StarRailCheckのみ)
  { icon: "jin2.png",       path: null,       element: null       }, // ※ path/element要確認
  { icon: "sutera.png",     path: null,       element: null       }, // ※ path/element要確認

];

// ===== バージョン画像データ (StarRailCheck用) =====
export const starrailVersions = [
  "4_1.png",
  "4_0.png",
  "3_8.png",
  "3_7.png",
  "3_6.png",
  "3_5.png",
  "3_4.png",
  "3_3.png",
  "3_2.png",
  "3_1.png",
  "3_0.png",
  "2_7.png",
  "2_6.png",
  "2_5.png",
  "2_4.png",
  "2_3.png",
  "2_2.png",
  "2_1.png",
  "2_0.png",
  "1_6.png",
  "1_5.png",
  "1_4.png",
  "1_3.png",
  "1_2.png",
  "1_1.png",
  "1_0.png",
];
