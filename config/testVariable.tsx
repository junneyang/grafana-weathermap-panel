export const pointClassImport : any = {
    "id": 1,
    "linkURL": {
        "followLink": "",
        "hoveringTooltipLink": "",
        "hoveringTooltipText": ""
    },
    "meta": "",
    "lowerLimit": [],
    "label": "",
    "textObj": {
        "addColorBackElement": false,
        "addColorTextElement": false,
        "colorBack": "",
        "colorBackElement": "",
        "colorText": "",
        "colorTextElement": "",
        "displayObjectInText": false,
        "displayObjectPermanently": false,
        "generateObjectText": false,
        "isTextRegion": false,
        "legendElement": "",
        "legend": "",
        "numericFormatElement": "",
        "styleText": "",
        "unit": "",
        "unityMesureElement": "",
        "value": ""
    },
    "mainMetric": {
        "key": "lblblb",
        "unit": "",
        "format": "",
        "refId": "",
        "keyValue": "",
        "expr": "",
        "returnQuery": {}
    },
    "metrics": [],
    "colorMode": false,
    "traceBack": false,
    "traceBorder": false,
    "name": "point1",
    "​​​valueMetric": "",
    "coordinateSpace": {},
    "drawGraphicMarker": {
        "label": "Yes",
        "value": "true"
    },
    "shape": {
        "label": "Circle",​​​
        "value": "circle"
    },​​  ​   
    "sizeWidth": {
        "label": "Small",
        "value": "small"
    },
    ​​"sizeHeight": {
        "label": "Small",
        "value": "small"
    },
    "rotateArrow": "0",
    "positionShapeX": "-18",
    "positionShapeY": "78",
    "positionLabelX": "0",
    "positionLabelY": "0",
    "color": "black",
    "associateLinkIn": [],
    "associateLinkOut": [],
    "associateOrientedLinksIn": [],
    "associateOrientedLinksOut": []
};

export const regionClassImport : any = {
    "id": 1,
    "linkURL": {
      "followLink": "",
      "hoveringTooltipLink": "",
      "hoveringTooltipText": ""
    },
    "meta": "",
    "lowerLimit": [
      {
        "borderColor": "#5794F2",
        "backColor": "#B877D9",
        "id": 0,
        "lowerLimitMax": "",
        "lowerLimitMin": "",
        "sizeBorder": ""
      },
      {
        "borderColor": "#5794F2",
        "backColor": "#B877D9",
        "id": 1,
        "lowerLimitMax": "",
        "lowerLimitMin": "",
        "sizeBorder": ""
      },
      {
        "borderColor": "#5794F2",
        "backColor": "#B877D9",
        "id": 2,
        "lowerLimitMax": "",
        "lowerLimitMin": "",
        "sizeBorder": ""
      }
    ],
    "label": "test",
    "textObj": {
      "addColorBackElement": false,
      "addColorTextElement": false,
      "colorBackTooltip": "",
      "colorBackElement": "",
      "colorBackRegion": "",
      "colorTextBulle": "",
      "colorTextElement": "",
      "colorTextRegion": "",
      "displayObjectInText": false,
      "displayObjectPermanently": false,
      "generateObjectText": false,
      "legendElement": "",
      "legend": "",
      "numericFormatElement": "",
      "styleTextTooltip": "",
      "styleTextRegion": "",
      "unit": "",
      "unityMesureElement": "",
      "value": ""
    },
    "mainMetric": {
      "expr": "rate(node_cpu_seconds_total{mode=\"system\"}[1m])",
      "format": "",
      "key": "",
      "keyValue": "",
      "refId": "A",
      "returnQuery": {
        "datasource": "Prometheus",
        "expr": "rate(node_cpu_seconds_total{mode=\"system\"}[1m])",
        "interval": "",
        "legendFormat": "",
        "refId": "A",
        "requestId": "2A"
      },
      "unit": ""
    },
    "metrics": [],
    "colorMode": true,
    "traceBack": true,
    "traceBorder": true,
    "idSVG": "",
    "orientedLink": [],
    "coords": {
      "xMax": "50",
      "xMin": "20",
      "yMax": "50",
      "yMin": "20"
    },
    "mode": false,
    "img": ""
  };

  export const multiPointClassImport = {
    "points": [{   
            "id":1,
            "linkURL": {
                "followLink":"",
                "hoveringTooltipLink":"",
                "hoveringTooltipText":""
            },
            "meta":"",
            "lowerLimit":[],
            "label":"",
            "textObj": {
                "legend":"",
                "value":"",
                "unit":"",
                "isTextRegion":false,
                "colorBack":"",
                "colorText":"",
                "styleText":"",
                "generateObjectText":false,
                "legendElement":"",
                "numericFormatElement":"",
                "unityMesureElement":"",
                "displayObjectInText":false,
                "displayObjectPermanently":false,
                "addColorTextElement":false,
                "colorTextElement":"",
                "addColorBackElement":false,
                "colorBackElement":""
            },
            "mainMetric": {
                "key":"",
                "unit":"",
                "format":"",
                "keyValue":"",
                "refId":"",
                "returnQuery": {
                    "fields":[],
                    "length":0
                }
            },
            "metrics":[],
            "colorMode":false,
            "traceBack":false,
            "traceBorder":false,
            "positionParameter": {
                "labelPositionX":"0",
                "labelPositionY":"0",
                "tooltipPositionA": {},
                "tooltipPositionB":{}
            },"name":"point1",
            "valueMetric":"",
            "coordinateSpace": {},
            "drawGraphicMarker": {
                "label":"Yes",
                "value":"true"
            },
            "shape": {
                "label":"Circle",
                "value":"circle"},
                "sizeWidth": {
                    "label":"Small",
                    "value":"small"
                },
                "sizeHeight": {
                    "label":"Small",
                    "value":"small"
                },
                "rotateArrow":"0",
                "positionShapeX":"-68",
                "positionShapeY":"76",
                "color":"black",
                "associateLinkIn":[],
                "associateLinkOut":[],
                "associateOrientedLinksIn":[],
                "associateOrientedLinksOut":[] 
            }, 
            {
                "id":2,
                "linkURL": {
                    "followLink":"",
                    "hoveringTooltipLink":"",
                    "hoveringTooltipText":""
                },
                "meta":"",
                "lowerLimit":[],
                "label":"",
                "textObj": {
                    "legend":"",
                    "value":"",
                    "unit":"",
                    "isTextRegion":false,
                    "colorBack":"",
                    "colorText":"",
                    "styleText":"",
                    "generateObjectText":false,
                    "legendElement":"",
                    "numericFormatElement":"",
                    "unityMesureElement":"",
                    "displayObjectInText":false,
                    "displayObjectPermanently":false,
                    "addColorTextElement":false,
                    "colorTextElement":"",
                    "addColorBackElement":false,
                    "colorBackElement":""
                },
                "mainMetric": {
                    "key":"",
                    "unit":"",
                    "format":"",
                    "keyValue":"",
                    "refId":"",
                    "returnQuery": {
                        "fields":[],
                        "length":0
                    }
                },
                "metrics":[],
                "colorMode":false,
                "traceBack":false,
                "traceBorder":false,
                "positionParameter": {
                    "labelPositionX":"0",
                    "labelPositionY":"0",
                    "tooltipPositionA": {},
                    "tooltipPositionB": {}
                },
                "name":"point2",
                "valueMetric":"",
                "coordinateSpace":{},
                "drawGraphicMarker": {
                    "label":"Yes",
                    "value":"true"
                },
                "shape": {
                    "label":"Circle",
                    "value":"circle"
                },
                "sizeWidth": {
                    "label":"Small",
                    "value":"small"
                },
                "sizeHeight": {
                    "label":"Small",
                    "value":"small"
                },
                "rotateArrow":"0",
                "positionShapeX":"-8",
                "positionShapeY":"84",
                "color":"black",
                "associateLinkIn":[],
                "associateLinkOut":[],
                "associateOrientedLinksIn":[],
                "associateOrientedLinksOut":[]
            },
            {
                "id":3,
                "linkURL": {
                    "followLink":"",
                    "hoveringTooltipLink":"",
                    "hoveringTooltipText":""
                },
                "meta":"",
                "lowerLimit":[],
                "label":"",
                "textObj": {
                    "legend":"",
                    "value":"",
                    "unit":"",
                    "isTextRegion":false,
                    "colorBack":"",
                    "colorText":"",
                    "styleText":"",
                    "generateObjectText":false,
                    "legendElement":"",
                    "numericFormatElement":"",
                    "unityMesureElement":"",
                    "displayObjectInText":false,
                    "displayObjectPermanently":false,
                    "addColorTextElement":false,
                    "colorTextElement":"",
                    "addColorBackElement":false,
                    "colorBackElement":""
                },
                "mainMetric": {
                    "key":"",
                    "unit":"",
                    "format":"",
                    "keyValue":"",
                    "refId":"",
                    "returnQuery": {
                        "fields":[],
                        "length":0
                    }
                },
                "metrics":[],
                "colorMode":false,
                "traceBack":false,
                "traceBorder":false,
                "positionParameter": {
                    "labelPositionX":"0",
                    "labelPositionY":"0",
                    "tooltipPositionA":{},
                    "tooltipPositionB":{}
                },
                "name":"point3",
                "valueMetric":"",
                "coordinateSpace":{},
                "drawGraphicMarker": {
                    "label":"Yes",
                    "value":"true"
                },
                "shape": {
                    "label":"Circle",
                    "value":"circle"
                },
                "sizeWidth": {
                    "label":"Small",
                    "value":"small"
                },
                "sizeHeight": {
                    "label":"Small",
                    "value":"small"
                },
                "rotateArrow":"0",
                "positionShapeX":"40",
                "positionShapeY":"76",
                "color":"black",
                "associateLinkIn":[],
                "associateLinkOut":[],
                "associateOrientedLinksIn":[],
                "associateOrientedLinksOut":[]
            },
            {
                "id":4,
                "linkURL": {
                    "followLink":"",
                    "hoveringTooltipLink":"",
                    "hoveringTooltipText":""
                },
                "meta":"",
                "lowerLimit":[],
                "label":"",
                "textObj": {
                    "legend":"",
                    "value":"",
                    "unit":"",
                    "isTextRegion":false,
                    "colorBack":"",
                    "colorText":"",
                    "styleText":"",
                    "generateObjectText":false,
                    "legendElement":"",
                    "numericFormatElement":"",
                    "unityMesureElement":"",
                    "displayObjectInText":false,
                    "displayObjectPermanently":false,
                    "addColorTextElement":false,
                    "colorTextElement":"",
                    "addColorBackElement":false,
                    "colorBackElement":""
                },
                "mainMetric": {
                    "key":"",
                    "unit":"",
                    "format":"",
                    "keyValue":"",
                    "refId":"",
                    "returnQuery": {
                        "fields":[],
                        "length":0
                    }
                },
                "metrics":[],
                "colorMode":false,
                "traceBack":false,
                "traceBorder":false,
                "positionParameter": {
                    "labelPositionX":"0",
                    "labelPositionY":"0",
                    "tooltipPositionA":{},
                    "tooltipPositionB":{}
                },
                "name":"point4",
                "valueMetric":"",
                "coordinateSpace":{},
                "drawGraphicMarker": {
                    "label":"Yes",
                    "value":"true"
                },
                "shape": {
                    "label":"Circle",
                    "value":"circle"
                },
                "sizeWidth": {
                    "label":"Small",
                    "value":"small"
                },
                "sizeHeight": {
                    "label":"Small",
                    "value":"small"
                },
                "rotateArrow":"0",
                "positionShapeX":"-38",
                "positionShapeY":"72",
                "color":"black",
                "associateLinkIn":[],
                "associateLinkOut":[],
                "associateOrientedLinksIn":[],
                "associateOrientedLinksOut":[]
            },
            {
                "id":5,
                "linkURL": {
                    "followLink":"",
                    "hoveringTooltipLink":"",
                    "hoveringTooltipText":""
                },
                "meta":"",
                "lowerLimit":[],
                "label":"",
                "textObj": {
                    "legend":"",
                    "value":"",
                    "unit":"",
                    "isTextRegion":false,
                    "colorBack":"",
                    "colorText":"",
                    "styleText":"",
                    "generateObjectText":false,
                    "legendElement":"",
                    "numericFormatElement":"",
                    "unityMesureElement":"",
                    "displayObjectInText":false,
                    "displayObjectPermanently":false,
                    "addColorTextElement":false,
                    "colorTextElement":"",
                    "addColorBackElement":false,
                    "colorBackElement":""
                },
                "mainMetric": {
                    "key":"",
                    "unit":"",
                    "format":"",
                    "keyValue":"",
                    "refId":"",
                    "returnQuery": {
                        "fields":[],
                        "length":0
                    }
                },
                "metrics":[],
                "colorMode":false,
                "traceBack":false,
                "traceBorder":false,
                "positionParameter": {
                    "labelPositionX":"0",
                    "labelPositionY":"0",
                    "tooltipPositionA":{},
                    "tooltipPositionB":{}
                },
                "name":"point5",
                "valueMetric":"",
                "coordinateSpace":{},
                "drawGraphicMarker": {
                    "label":"Yes",
                    "value":"true"
                },
                "shape": {
                    "label":"Circle",
                    "value":"circle"
                },
                "sizeWidth": {
                    "label":"Small",
                    "value":"small"
                },
                "sizeHeight": {
                    "label":"Small",
                    "value":"small"
                },
                "rotateArrow":"0",
                "positionShapeX":"14",
                "positionShapeY":"72",
                "color":"black",
                "associateLinkIn":[],
                "associateLinkOut":[],
                "associateOrientedLinksIn":[],
                "associateOrientedLinksOut":[]
            }
        ]
};

export const multiRegionClassImport = { "regions": [{"colorMode":false,"coords":{"xMax":"0","xMin":"0","yMax":"0","yMin":"0"},"id":1,"idSVG":"path141","img":"","label":"je suis","linkURL":{"followLink":"","hoveringTooltipLink":"","hoveringTooltipText":""},"lowerLimit":[{"borderColor":"#C4162A","backColor":"rgba(14,92, 3, 0.43)","id":0,"lowerLimitMax":"","lowerLimitMin":"","sizeBorder":"5"}],"mainMetric":{"expr":"rate(go_memstats_alloc_bytes[5m])","format":"","key":"","keyValue":"","refId":"A","returnQuery":{"name":"{instance=\"localhost:9090\",job=\"prometheus\"}","refId":"A","fields":[{"name":"{instance=\"localhost:9090\",job=\"prometheus\"}","type":"number","config":{},"values":[159512.16842105263],"labels":{"instance":"localhost:9090","job":"prometheus"},"calcs":null},{"name":"Time","type":"time","config":{},"values":[1583492730000],"calcs":null}],"length":1},"unit":""},"meta":"","metrics":[],"mode":true,"orientedLink":[],"textObj":{"addColorBackElement":false,"addColorTextElement":false,"colorBack":"rgba(255,255, 255, 0)","colorBackElement":"","colorText":"rgba(0, 0, 0, 1)","colorTextElement":"","displayObjectInText":false,"displayObjectPermanently":false,"generateObjectText":false,"isTextRegion":false,"legendElement":"","legend":"","numericFormatElement":"","styleText":"","unit":"","unityMesureElement":"","value":""},"traceBack":true,"traceBorder":true},{"colorMode":true,"coords":{"xMax":"100","xMin":"50","yMax":"100","yMin":"20"},"id":2,"idSVG":"","img":"image.png","label":"coucou","linkURL":{"followLink":"qwert","hoveringTooltipLink":"asdf","hoveringTooltipText":"xcv"},"lowerLimit":[{"borderColor":"#73BF69","backColor":"#5794F2","id":0,"lowerLimitMax":"1000","lowerLimitMin":"","sizeBorder":"3"},{"borderColor":"#FF9830","backColor":"#FADE2A","id":1,"lowerLimitMax":"200000","lowerLimitMin":">1000","sizeBorder":"5"},{"borderColor":"#5794F2","backColor":"#73BF69","id":2,"lowerLimitMax":"","lowerLimitMin":">200000","sizeBorder":"3"}],"mainMetric":{"format":"","key":"","keyValue":"","refId":"","returnQuery":{"fields":[],"length":0},"unit":""},"meta":"","metrics":[],"mode":false,"orientedLink":[],"textObj":{"addColorBackElement":true,"addColorTextElement":true,"colorBack":"#B877D9","colorBackElement":"#F2495C","colorText":"#73BF69","colorTextElement":"#73BF69","displayObjectInText":true,"displayObjectPermanently":true,"generateObjectText":true,"isTextRegion":true,"legendElement":"ok","legend":"legendddd","numericFormatElement":"round","styleText":"italic","unit":"em","unityMesureElement":"er","value":""},"traceBack":true,"traceBorder":true},{"colorMode":false,"coords":{"xMax":"0","xMin":"0","yMax":"0","yMin":"0"},"id":3,"idSVG":"","img":"","label":"pc","linkURL":{"followLink":"","hoveringTooltipLink":"","hoveringTooltipText":""},"lowerLimit":[],"mainMetric":{"expr":"rate(go_memstats_alloc_bytes[5m])","format":"","key":"","keyValue":"","refId":"A","returnQuery":{"name":"{instance=\"localhost:9090\",job=\"prometheus\"}","refId":"A","fields":[{"name":"{instance=\"localhost:9090\",job=\"prometheus\"}","type":"number","config":{},"values":[159512.16842105263],"labels":{"instance":"localhost:9090","job":"prometheus"},"calcs":null},{"name":"Time","type":"time","config":{},"values":[1583492730000],"calcs":null}],"length":1},"unit":""},"meta":"","metrics":[],"mode":true,"orientedLink":[],"textObj":{"addColorBackElement":false,"addColorTextElement":false,"colorBack":"rgba(255,255, 255, 0)","colorBackElement":"","colorText":"rgba(0, 0, 0, 1)","colorTextElement":"","displayObjectInText":false,"displayObjectPermanently":false,"generateObjectText":false,"isTextRegion":false,"legendElement":"","legend":"","numericFormatElement":"","styleText":"","unit":"","unityMesureElement":"","value":""},"traceBack":false,"traceBorder":false}]}