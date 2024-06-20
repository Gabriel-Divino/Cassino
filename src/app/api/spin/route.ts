// app/api/hello/route.ts
import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'edge';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const data = {
    "dt": {
        "si": {
            "wc": 3,
            "ist": false,
            "itw": true,
            "fws": 0,
            "wp": null,
            "orl": [
                6,
                7,
                3,
                5,
                7,
                4,
                3,
                4,
                6
            ],
            "lw": null,
            "irs": false,
            "gwt": -1,
            "fb": null,
            "ctw": 0.0,
            "pmt": null,
            "cwc": 0,
            "fstc": null,
            "pcwc": 0,
            "rwsp": null,
            "hashr": "0:6;5;3#7;7;4#3;4;6#MV#3.0#MT#1#MG#0#",
            "ml": 2,
            "cs": 0.3,
            "rl": [
                6,
                7,
                3,
                5,
                7,
                4,
                3,
                4,
                6
            ],
            "sid": "1803848038206078464",
            "psid": "1803848038206078464",
            "st": 1,
            "nst": 1,
            "pf": 1,
            "aw": 0.00,
            "wid": 0,
            "wt": "C",
            "wk": "0_C",
            "wbn": null,
            "wfg": null,
            "blb": 100000.00,
            "blab": 99997.00,
            "bl": 99997.00,
            "tb": 3.00,
            "tbb": 3.00,
            "tw": 0.00,
            "np": -3.00,
            "ocr": null,
            "mr": null,
            "ge": [
                1,
                11
            ]
        }
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