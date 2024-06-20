import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {



  var data = {
    "dt": {
        "oj": {
            "jid": 1
        },
        "pid": "0",
        "pcd": "",
        "tk": "4731A981-7499-40F6-8225-1F6405B6484B",
        "st": 1,
        "geu": "https://api.pg-demo.com/game-api/fortune-tiger/",
        "lau": "https://api.pg-demo.com/game-api/lobby/",
        "bau": "https://api.pg-demo.com/web-api/game-proxy/",
        "cc": "PGC",
        "cs": "",
        "nkn": "",
        "gm": [
            {
                "gid": 126,
                "msdt": 1638432036000,
                "medt": 1638432036000,
                "st": 1,
                "amsg": ""
            }
        ],
        "uiogc": {
            "bb": 1,
            "grtp": 0,
            "gec": 1,
            "cbu": 0,
            "cl": 0,
            "bf": 0,
            "mr": 0,
            "phtr": 0,
            "vc": 0,
            "bfbsi": 0,
            "bfbli": 0,
            "il": 0,
            "rp": 0,
            "gc": 0,
            "ign": 0,
            "tsn": 0,
            "we": 0,
            "gsc": 1,
            "bu": 0,
            "pwr": 0,
            "hd": 0,
            "et": 0,
            "np": 0,
            "igv": 0,
            "as": 0,
            "asc": 0,
            "std": 0,
            "hnp": 0,
            "ts": 0,
            "smpo": 0,
            "grt": 0,
            "ivs": 0,
            "ir": 0,
            "gvs": 0,
            "hn": 1,
            "swf": 0,
            "swfbsi": 0,
            "swfbli": 0
        },
        "ec": [],
        "occ": {
            "rurl": "",
            "tcm": "You are playing Demo.",
            "tsc": 1000000,
            "ttp": 43200,
            "tlb": "Continue",
            "trb": "Quit"
        },
        "ioph": "a144e10f9311"
    },
    "err": null
    }



  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}