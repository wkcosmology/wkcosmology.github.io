var background = "#20272d";
var g3 = {
    backgroundColor: background,
    height: "100%",
    width: "50%",
    x: "0%",
    y: "0%",
    type: "ring",
    title: {
        text: "Update: 2023-05-15",
        fontColor: "#94918a",
        fontWeight: "normal",
        fontSize: 13,
        paddingTop: 280,
        paddingLeft: 5,
        align: "left",
    },
    plot: {
        animation: {
            effect: "ANIMATION_EXPAND_VERTICAL",
            method: "ANIMATION_REGULAR_EASE_OUT",
            sequence: "ANIMATION_NO_SEQUENCE",
            speed: 1000,
        },
        "value-box": [
            {
                text: "Publication\n\n\n",
                placement: "center",
                "font-color": "white",
                "font-size": 20,
                "line-height": 30,
                "padding-left": 20,
                "font-family": "Georgia",
                "font-weight": "regular",
                rules: [
                    {
                        rule: "%p != 0",
                        visible: false,
                    },
                ],
            },
            {
                text: "\n%pie-total-value",
                placement: "center",
                "font-color": "white",
                "font-size": 60,
                "line-height": 10,
                "font-family": "Georgia",
                "font-weight": "bold",
                rules: [
                    {
                        rule: "%p != 0",
                        visible: false,
                    },
                ],
            },
        ],
        tooltip: {
            text: "%t: %v (%npv%)",
            "font-color": "black",
            "font-family": "Raleway",
            "text-alpha": 1,
            "background-color": "white",
            alpha: 0.7,
            "border-width": 1,
            "border-color": "#cccccc",
            "line-style": "solid",
            "border-radius": "10px",
            padding: "10%",
            placement: "node:center",
        },
        slice: "60%",
        "border-width": 0,
    },
    plotarea: {
        "margin-top": "0%",
    },
    series: [
        {
            values: [7],
            "background-color": "#937cb9",
            text: "MNRAS",
        },
        {
            values: [3],
            "background-color": "#3c5492",
            text: "ApJ",
        },
        {
            values: [8],
            "background-color": "#79827b",
            text: "Others",
        },
    ],
};

var g4 = {
    backgroundColor: background,
    height: "100%",
    width: "40%",
    x: "50%",
    y: "0%",
    type: "ring",
    plot: {
        animation: {
            effect: "ANIMATION_EXPAND_VERTICAL",
            method: "ANIMATION_REGULAR_EASE_OUT",
            sequence: "ANIMATION_NO_SEQUENCE",
            speed: 1000,
        },
        "value-box": [
            {
                text: "Citation\n\n\n",
                placement: "center",
                "font-color": "white",
                "padding-left": 15,
                "font-size": 20,
                "line-height": 30,
                "font-family": "Georgia",
                "font-weight": "regular",
                rules: [
                    {
                        rule: "%p != 0",
                        visible: false,
                    },
                ],
            },
            {
                text: "\n%pie-total-value",
                placement: "center",
                "font-color": "white",
                "font-size": 60,
                "line-height": 10,
                "font-family": "Georgia",
                "font-weight": "bold",
                rules: [
                    {
                        rule: "%p != 0",
                        visible: false,
                    },
                ],
            },
        ],
        tooltip: {
            text: "%t: %v (%npv%)",
            "font-color": "black",
            "font-family": "Raleway",
            "text-alpha": 1,
            "background-color": "white",
            alpha: 0.7,
            "border-width": 1,
            "border-color": "#cccccc",
            "line-style": "solid",
            "border-radius": "10px",
            padding: "10%",
            placement: "node:center",
        },
        slice: "60%",
        "border-width": 0,
    },
    plotarea: {
        "margin-top": "0%",
    },
    series: [
        {
            values: [27],
            "background-color": "#937cb9",
            text: "MNRAS",
        },
        {
            values: [28],
            "background-color": "#3c5492",
            text: "ApJ",
        },
        {
            values: [34],
            "background-color": "#79827b",
            text: "Others",
        },
    ],
};

var chartJSON = {
    backgroundColor: background,
    graphset: [g3, g4],
};

zingchart.render({
    id: "myChart",
    height: "100%",
    width: "100%",
    data: chartJSON,
});
