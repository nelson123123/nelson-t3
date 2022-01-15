var APP_DATA = {
  "scenes": [
    {
      "id": "0-fora",
      "name": "Fora",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.15434951805688257,
        "pitch": 0.18922625485788025,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": -2.4200365235269317,
          "pitch": -0.13249336333460526,
          "rotation": 6.283185307179586,
          "target": "1-hall--prdio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.45862455053827134,
          "pitch": 0.09314669240689355,
          "title": "rotunda carioquinhas",
          "text": ""
        }
      ]
    },
    {
      "id": "1-hall--prdio",
      "name": "Hall -prédio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.6356404884283027,
        "pitch": -0.028763494707986226,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": 2.410152450860462,
          "pitch": -0.055588592673757375,
          "rotation": 0,
          "target": "0-fora"
        },
        {
          "yaw": -0.7879242712817458,
          "pitch": -0.0807940682718975,
          "rotation": 0,
          "target": "2-porta-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-porta-entrada",
      "name": "Porta entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 2.7303615256926808,
        "pitch": 0.17408102572005646,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": 1.3925701363691516,
          "pitch": 0.00941323069852018,
          "rotation": 4.71238898038469,
          "target": "1-hall--prdio"
        },
        {
          "yaw": 2.969071785462061,
          "pitch": -0.1312321722446832,
          "rotation": 0,
          "target": "3-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.06259782901483746,
        "pitch": 0.02246120954850994,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": 2.48375753571017,
          "pitch": -0.09560286867219858,
          "rotation": 0,
          "target": "2-porta-entrada"
        },
        {
          "yaw": -2.401148003001172,
          "pitch": -0.08332408337939867,
          "rotation": 0,
          "target": "14-sala"
        },
        {
          "yaw": -0.7658318264516382,
          "pitch": -0.06373408989965057,
          "rotation": 0,
          "target": "13-cozinha"
        },
        {
          "yaw": 0.7459482090786853,
          "pitch": 0.11082353081695828,
          "rotation": 0,
          "target": "4-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corredor",
      "name": "Corredor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.012608720039161,
        "pitch": 0.16307949087646811,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": -3.0297886446617586,
          "pitch": 0.09244184820465584,
          "rotation": 0,
          "target": "3-entrada"
        },
        {
          "yaw": 0.051971763288634065,
          "pitch": 0.1349996314176849,
          "rotation": 3.141592653589793,
          "target": "5-corredor-fundo"
        },
        {
          "yaw": -0.9098832428939758,
          "pitch": -0.19881912542337332,
          "rotation": 0,
          "target": "10-qto1"
        },
        {
          "yaw": -2.1553388534417888,
          "pitch": -0.20488562740693794,
          "rotation": 0,
          "target": "12-qto2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corredor-fundo",
      "name": "Corredor fundo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.5321551739606694,
        "pitch": 0.29757658786734,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": 1.051798859982032,
          "pitch": -0.09216990046850171,
          "rotation": 0,
          "target": "6-wc"
        },
        {
          "yaw": -0.7249865176208878,
          "pitch": -0.16911322959088793,
          "rotation": 0.7853981633974483,
          "target": "7-wc-suite"
        },
        {
          "yaw": -1.28372321546634,
          "pitch": -0.20084163141055278,
          "rotation": 4.71238898038469,
          "target": "8-suite"
        },
        {
          "yaw": 2.530796133422349,
          "pitch": 0.1288167314955455,
          "rotation": 0,
          "target": "4-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-wc",
      "name": "wc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.06833826577030777,
        "pitch": 0.5834882732046189,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": 2.1941096076058137,
          "pitch": -0.23770527915268147,
          "rotation": 0,
          "target": "5-corredor-fundo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-wc-suite",
      "name": "wc suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.6323200870556391,
        "pitch": 0.32839955851011027,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": -2.917638889809883,
          "pitch": -0.06986596748066987,
          "rotation": 0,
          "target": "5-corredor-fundo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-suite",
      "name": "Suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.91829026243731,
        "pitch": 0.26458181167595285,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": 0.5031635432427226,
          "pitch": -0.022461909382624157,
          "rotation": 0,
          "target": "9-varanda-suite"
        },
        {
          "yaw": -2.223776159360952,
          "pitch": 0.017485861815897508,
          "rotation": 0.7853981633974483,
          "target": "5-corredor-fundo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-varanda-suite",
      "name": "Varanda suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5528909397659341,
          "pitch": -0.09841118011553895,
          "rotation": 0,
          "target": "8-suite"
        },
        {
          "yaw": 0.8143873200879845,
          "pitch": -0.00984848863717147,
          "rotation": 3.141592653589793,
          "target": "11-varanda-qtos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-qto1",
      "name": "Qto1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 1.1433724027267758,
        "pitch": 0.1530424204792311,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": 0.8231165968647325,
          "pitch": 0.05052129250507953,
          "rotation": 0,
          "target": "10-qto1"
        },
        {
          "yaw": -2.26627727576002,
          "pitch": 0.005565137456418512,
          "rotation": 0,
          "target": "4-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-varanda-qtos",
      "name": "varanda qtos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "12-qto2",
      "name": "Qto2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.7293007180474476,
        "pitch": 0.09078787655547593,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": -2.359639015286181,
          "pitch": 0.025807127702311305,
          "rotation": 0,
          "target": "11-varanda-qtos"
        },
        {
          "yaw": 0.14928355724138953,
          "pitch": 0.04258423654935761,
          "rotation": 0,
          "target": "4-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cozinha",
      "name": "cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.8893779650911426,
        "pitch": 0.16004665230143544,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": -2.7327665095250797,
          "pitch": -0.008005744705757323,
          "rotation": 0,
          "target": "3-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-sala",
      "name": "sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 1.5389184922262338,
        "pitch": 0.03280769452671173,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": 1.2467868638018498,
          "pitch": 0.04270297148469737,
          "rotation": 0,
          "target": "15-varanda-sala"
        },
        {
          "yaw": -2.806004095367337,
          "pitch": 0.061003556125527325,
          "rotation": 0,
          "target": "3-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-varanda-sala",
      "name": "Varanda sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 1.9982140153240557,
        "pitch": 0.19215104422620755,
        "fov": 1.1828363345513648
      },
      "linkHotspots": [
        {
          "yaw": -0.5088172559868696,
          "pitch": -0.13326940821034405,
          "rotation": 0,
          "target": "14-sala"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
